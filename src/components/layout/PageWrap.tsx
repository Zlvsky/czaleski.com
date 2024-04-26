import { IChildren } from '@/types/generalTypes'
import { memo } from 'react'

interface IProps extends IChildren {
  children: React.ReactNode
  isGradient?: boolean
}

const PageWrap = memo(({ children, isGradient }: IProps) => {
  return <div className={`flex min-h-screen flex-col py-8`}>{children}</div>
})

PageWrap.displayName = 'PageWrap'

export default PageWrap
