import bgtile from '@/assets/images/texture.png'
import { IChildren } from '@/types/generalTypes'

interface IProps extends IChildren {
  id?: string
}

export default function ContentContainer({ children, id }: IProps) {
  return (
    <div
      id={id}
      className="mx-auto w-full max-w-[90rem] rounded-t-3xl bg-darkbg px-4 md:rounded-t-[2.25rem]"
      style={{
        backgroundImage: `url(${bgtile.src})`,
        backgroundSize: '70px',
        backgroundRepeat: 'repeat'
      }}
    >
      {children}
    </div>
  )
}
