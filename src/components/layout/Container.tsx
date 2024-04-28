import { IChildren } from '@/types/generalTypes'

interface IProps extends IChildren {
  id?: string
}

export default function Container({ children, id }: IProps) {
  return (
    <main id={id} className="mx-auto flex h-full w-full max-w-[40rem] flex-col">
      {children}
    </main>
  )
}
