import { IChildren } from '@/types/generalTypes'

function SectionHeader({ children }: IChildren) {
  return (
    <h2 className="mb-2 text-base font-medium text-[#111] dark:text-white">{children}</h2>
  )
}

export default SectionHeader
