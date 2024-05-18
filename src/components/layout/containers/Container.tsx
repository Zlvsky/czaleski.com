import { IChildren } from '@/types/generalTypes'
import { memo } from 'react'

const Container = memo<IChildren>(({ children }) => {
  return <main className="mx-auto mt-28 flex h-full w-full flex-col">{children}</main>
})

Container.displayName = 'Container'

export default Container
