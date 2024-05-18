import { IChildren } from '@/types/generalTypes'
import { memo } from 'react'

interface IProps extends IChildren {
  id?: string
}

const SmallWrap = memo<IProps>(({ children, id }) => {
  return (
    <div id={id} className="mx-auto flex h-full w-full max-w-[35rem] flex-col">
      {children}
    </div>
  )
})

SmallWrap.displayName = 'SmallWrap'

export default SmallWrap
