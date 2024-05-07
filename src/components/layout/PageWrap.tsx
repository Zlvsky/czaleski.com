import { IChildren } from '@/types/generalTypes'
import { memo } from 'react'

interface IProps extends IChildren {
  children: React.ReactNode
  isGradient?: boolean
}

const PageWrap = memo(({ children, isGradient }: IProps) => {
  return <div className={`flex min-h-screen flex-col px-3 py-8 md:px-0`}>{children}</div>
})

PageWrap.displayName = 'PageWrap'

export default PageWrap
