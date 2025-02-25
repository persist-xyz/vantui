import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
export interface IndexBarProps extends StandardProps {
  sticky?: boolean
  zIndex?: number
  highlightColor?: string
  stickyOffsetTop?: number
  indexList?: string[] | number[]
  onSelect?: (event: { detail: string | number }) => void
  children?: ReactNode
  widthPopup?: boolean
  popupClassName?: string
  popupStyle?: React.CSSProperties
  show?: boolean
  onClose?: () => void
}
declare const IndexBar: ComponentClass<IndexBarProps>
export { IndexBar }
