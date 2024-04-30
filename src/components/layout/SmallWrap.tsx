import { IChildren } from '@/types/generalTypes'

interface IProps extends IChildren {
  id?: string
}

export default function SmallWrap({ children, id }: IProps) {
  return (
    <div id={id} className="mx-auto flex h-full w-full max-w-[35rem] flex-col">
      {children}
    </div>
  )
}
