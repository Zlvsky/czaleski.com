import { motion } from 'framer-motion'

interface IProps {
  name: string
  shortDescription: string
  year: string
  setSelected: any
}

function ProjectOverview({ name, shortDescription, year, setSelected }: IProps) {
  const handleClose = () => {
    setSelected(null)
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 transition-colors"
      onClick={handleClose}
    >
      <motion.div
        layoutId={name}
        className="mx-auto flex w-full max-w-[40rem] cursor-pointer flex-col rounded-xl border bg-white p-3 text-[#555] shadow-sm transition-shadow ease-linear hover:shadow-lg"
      >
        <div className="mb-4 h-48 w-full rounded-md bg-accent"></div>
        <div className="flex flex-row items-center">
          <span className="font-medium">{name}</span>
          <span className="ml-1 text-sm text-[#777]">({year})</span>
        </div>
        <span className="text-sm">{shortDescription}</span>
      </motion.div>
    </div>
  )
}

export default ProjectOverview
