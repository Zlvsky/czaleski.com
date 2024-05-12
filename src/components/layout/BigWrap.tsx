import { IChildren } from '@/types/generalTypes'
import { memo } from 'react'

interface IProps extends IChildren {
  id?: string
}

const BigWrap = memo<IProps>(({ children, id }) => {
  return (
    <div id={id} className="mx-auto flex h-full w-full max-w-2xl flex-col">
      {children}
    </div>
  )
})

BigWrap.displayName = 'BigWrap'

export default BigWrap
