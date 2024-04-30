import { IChildren } from '@/types/generalTypes'

export default function Container({ children }: IChildren) {
  return <main className="mx-auto mt-28 flex h-full w-full flex-col">{children}</main>
}
