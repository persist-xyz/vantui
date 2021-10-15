import * as fs from 'fs'
import * as path from 'path'
export function getFiles(
  parentPath = path.resolve(__dirname, './../pages'),
): string[] {
  let fileList: string[] = []

  let files = []
  try {
    files = fs.readdirSync(parentPath)
  } catch (err) {
    throw new Error('文件夹不存在，请检查config配置')
  }

  files.forEach((item) => {
    item = path.join(parentPath, item)

    const stat = fs.statSync(item)
    try {
      if (stat.isDirectory()) {
        fileList = fileList.concat(getFiles(item))
      } else if (stat.isFile()) {
        fileList.push(item)
      }
    } catch (error) {
      // console.log(chalk.red(`rapper: Rap 接口引用扫描失败, ${error}`));
    }
  })
  return fileList
}
function promiseReadFile(
  path: string,
): Promise<{ content: string; path: string }> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
        return
      }
      resolve({
        content: data,
        path,
      })
    })
  })
}

async function getContent(filsNames: string[]) {
  const allFile = getFiles()
  // TODO: 没找到一步扫描本地 代码的 api
  const readAllFile = allFile.map(async (filePath) => {
    const fileReg = new RegExp(`(${filsNames.join('|')})\.js$`)
    if (fileReg.test(filePath)) {
      const result = await promiseReadFile(filePath)

      // console.log(result)
      // 检查合法性 -- 这东西会自动扩散 去解析导入类型的文件
      return result
    }
    return null
  })
  // console.log('文件', readAllFile.filter(file => file).length)
  const allSchemaContent = await Promise.all(readAllFile)
  return allSchemaContent.filter((file) => file)
}
function convert(fileContent: string, pathName: string): string {
  // 1. 先把  @withWeapp   弄出来

  let result = fileContent.replace(
    // @withWeapp({ data: {} })
    /@withWeapp\({((\s+data:\s+{)?[\s\S]+?),?\s+}\)\s+class\s+_C\s+extends\s+React\.Component\s+{/,
    (_: string, $1: string): any => {
      // 2. 把 data 改为 state
      let str = $1.replace(/data:/, 'state =')
      // 3.把 方法之间的 ， 去掉-
      str = str.replace(/(?<=}),(?=\s+\w+\(([{}\w,\s]+)?\)\s+{)/g, '')
      // 绑定类的this
      str = str.replace(/(\w+)\(([{}\w,\s]+)?\)\s+{/g, '$1 = ($2) => {')
      // 4. 把this.data this.setData 改了

      str = str.replace(/this\.setData/g, 'this.setState')
      return `export default class Index extends React.Component {
    constructor(){
      super()
    }
    ${str}
    `
    },
  )

  // import { Block, Image } from '@tarojs/components'

  result = result.replace(
    /import\s+{([A-Za-z,\s]+)}\s+from\s+'@tarojs\/components'/,
    (_str: string, $1: string): any => {
      return `import { ${$1.replace(
        /,?\s+Image/,
        '',
      )}} from '@tarojs/components'`
    },
  )
  result = result.replace(/this\.data/g, 'this.state')

  result = result.replace(/Van([A-Z]\w+)/g, '$1')

  result = result.replace(/export\s+default\s+_C/, '')

  const importComReg =
    /import\s+(?<com>[a-zA-Z]+)\s+from\s+'\.\.\/\.\.\/dist\/[\w\/-]+'\n/g

  const coms = (result.match(importComReg) ?? [])
    .map((e) => e.replace(importComReg, '$1'))
    .filter((e) => {
      const reg = new RegExp(`<${e}[\\s>]`)
      return result.match(reg)
    })

  // 通用

  const currencyReg =
    /import\s+(Notify|Dialog|Toast)\s+from\s+'[\.\/]+dist[\w\/-]+\.js'/g

  const currencyResult = (result.match(currencyReg) ?? []).map((e) =>
    e.replace(currencyReg, (_str, $1) => `${$1.toLowerCase()}`),
  )

  if (currencyResult.length !== 0) {
    coms.push(...currencyResult)
    result = result.replace(currencyReg, '')
    result = result.replace(
      /(?<=\s+)(Notify|Dialog|Toast)([(.])/g,
      (_str, $1, $2) => `${$1.toLowerCase()}${$2}`,
    )
  }

  //   import withWeapp from '@tarojs/with-weapp'
  // import list from '../../config.js'
  // import Page from '../../common/page.js'

  //  这个可以分 两次 把 withWeapp 和  Page 去掉
  result = result.replace(
    /import\s+withWeapp\s+from\s+'@tarojs\/with-weapp'/,
    '',
  )
  result = result.replace(
    /import\s+Page\s+from\s+'[\/\.]+common\/page\.js'/,
    `import { ${coms.join(',')}} from '@antmjs/vantui'\n`,
  )

  result = result.replace(importComReg, '')

  // 替换 customStyle customClass
  // customClass="
  result = result.replace(
    /custom(Style|Class)="/g,
    (_str: string, $1: string) => {
      let str = $1.toLowerCase()
      if (str === 'class') {
        str += 'Name'
      }
      return str + '="'
    },
  )

  // 替换  ions

  // import icons from '../../dist/@vant/icons/src/config'
  const iconsReg =
    /import\s+([a-zA-Z]+)\s+from\s+'\.\.\/\.\.\/dist\/[\w\/-@]+config'\n/g
  result = result.replace(iconsReg, "import icons from '@vant/icons'\n")

  // 去掉htmpl 标签
  result = result.replace(
    /(?<=(?:<\/|<))(H\d|Div)/g,
    (_str: string, $1: string) => $1.toLowerCase(),
  )

  // onTap = onClick
  result = result.replace(/onTap={/g, 'onClick={')

  // [`show.${event.target.dataset.type}`]: true,
  result = result.replace(
    /\[`show\.\$\{([\w\.]+)\}`\]:\s+(\w+),/,
    `show: {
      ...this.state.show,
      [$1]: $2
  }`,
  )
  // 分析并对代码做出更改
  // 1. dateset
  // 2. selectComponent

  // const datasetReg =
  //   /(\w+?)\s=\s+\([\s|,|\w|^\n]+\)\s+=>\s+{[\w\(\)\.\s]+?const\s{[\s\S]+?}\s+=\s+event\.(currentTarget|target)\.dataset/g
  // const datasets = (result.match(datasetReg) ?? []).map((e) => {
  //   return e.replace(datasetReg, (_str, $1) => $1)
  // })

  // if (datasets.length > 0) {
  //   result = result.replace(
  //     /<[a-zA-Z]+\s+[^>]+data-[a-z]+="[\w-]+"[^>]+>/g,
  //     (str: string) => {
  //       const dataReg = /data-([a-z]+)="([\w-]+)"/g
  //       const data = (str.match(dataReg) ?? []).map((e) => {
  //         return e.replace(dataReg, '$1:$2')
  //       })
  //       // {this.onChange}
  //       const fnReg = new RegExp(`{this\\.(${datasets.join('|')})}`, 'g')
  //       // console.log(str, new RegExp(`{this\\.(${datasets.join('|')})}`, 'g'))
  //       const newCom = str.replace(
  //         fnReg,
  //         `{(e) => {this.$1({...e, ${data.join(',')}})}}`,
  //       )
  //       return newCom
  //     },
  //   )
  // }

  const callFuncs = new Set<string>()

  result = result.replace(
    /<[a-zA-Z]+\s+[^>]+data-[a-z]+=("[\w-]+"|[\w-{}]+)+?[^>]+>/g,
    (str: string): any => {
      const dataReg = /data-([a-z]+)={?("[\w-]+"|[\w-]+)}?/g
      const data = (str.match(dataReg) ?? []).map((e) => {
        return e.replace(dataReg, '$1:$2')
      })
      const callFuncsReg = /={this\.(\w+)}/g

      ;(str.match(callFuncsReg) ?? []).forEach((e) => {
        callFuncs.add(e.replace(callFuncsReg, '$1'))
      })
      const newCom = str.replace(
        callFuncsReg,
        `={(e) => {this.$1({...e, ${data.join(',')}})}}`,
      )

      return newCom
    },
  )
  const callFuncsArr = Array.from(callFuncs)
  const datasetReg = new RegExp(
    `(${callFuncsArr.join(
      '|',
    )})\\s=\\s+\\([\\s|,|\\w|^\\n]+\\)\\s+=>\\s+{[\\s\\S]+?const\\s{[\\s\\S]+?}\\s+=\\s+event\\.(currentTarget|target)\\.dataset`,
    'g',
  )

  result = result.replace(datasetReg, (str) => {
    return str.replace(/event\.(currentTarget|target)\.dataset/g, 'event')
  })
  // currentTarget.dataset.type  event.target.dataset.type
  result = result.replace(
    /(event\.)?(currentTarget|target)\.dataset(\.\w+)/,
    'event$3',
  )
  console.log(pathName)
  return result
}

function writeFile(
  dirName: string,
  e: {
    content: string
    path: string
  },
) {
  const pathName = e.path.replace(/\/index_backup\.js$/, '/index.js')
  const data = convert(e.content, pathName)
  fs.writeFile(pathName, data, (err) => {
    if (err) {
      console.error(dirName + '写入失败', err)
    } else {
      console.log(dirName + '写入成功')
    }
  })
}

// function unlink(
//   dirName: string,
//   e: {
//     content: string
//     path: string
//   },
// ) {
//   fs.unlink(e.path, (err) => {
//     if (err) {
//       console.error(dirName + '删除失败', err)
//     } else {
//       console.log(dirName + '删除成功')
//     }
//   })
// }

;(async () => {
  const filsNames = ['index_backup'] //['index', 'index2']
  const result = await getContent(filsNames)
  console.log('一共' + result.length + '')
  // console.log(result)
  if (result.length === 0) {
    console.log('没找到文件， 请检查文件名称')
    return
  }
  result.forEach((e) => {
    if (!e) return
    const dirName = e.path.match(/\/([\w-]+)\/\w+\.js$/)?.[1] || ''
    writeFile(dirName, e)
    //  unlink(dirName, e)
  })
})()
