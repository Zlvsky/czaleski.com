'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import SectionHeader from '../ui/SectionHeader'
import ProjectOverview from './ProjectOverview'

const data = [
  {
    name: 'BetterDevs',
    shortDescription:
      'Platform for developers to boost their skills by solving real-world problems.',
    year: 'Ongoing'
  },
  {
    name: 'Visity',
    shortDescription:
      'SaaS application for creating simple landing pages in minutes targeted to small businesses.',
    year: '2024'
  },
  {
    name: 'Feedback Widget',
    shortDescription:
      'Feedback widget that can be embedded on websites to collect feedback and send console logs.',
    year: '2024'
  },
  {
    name: 'Realm of Dungeons',
    shortDescription:
      'Web based, idle multiplayer retro game inspired by Shakes & Fidget.',
    year: '2023'
  },
  {
    name: 'One-place',
    shortDescription: `CRUD admin panel to manage business based on orders that don't need online shop. `,
    year: '2021'
  },
  {
    name: 'Oferia.pl Automation bot',
    shortDescription:
      'Custom-made bot that automates the insertion of offers on a portal',
    year: '2021'
  },
  {
    name: 'ZSEClicker',
    shortDescription: 'Simple idle game based on the school system in Poland.',
    year: '2018'
  }
]

const SingleProject = ({
  name,
  shortDescription,
  year,
  handleSelect
}: (typeof data)[0]) => {
  return (
    <motion.div
      layoutId={name}
      onClick={handleSelect}
      className="flex cursor-pointer flex-row rounded-xl border p-3 text-[#555] shadow-sm transition-shadow ease-linear hover:shadow-lg"
    >
      <div className="flex w-3/5 flex-col pr-4">
        <h4 className="font-medium">{name}</h4>
        <span className="text-sm text-[#777]">{year}</span>
        <p className="mt-4 text-sm">{shortDescription}</p>
      </div>
      <div className="mb-4 h-48 w-2/5 rounded-md border bg-accent dark:border-dark26 dark:bg-dark"></div>
    </motion.div>
  )
}

function Projects() {
  const [selected, setSelected] = useState<null | (typeof data)[0]>(null)

  return (
    <>
      <div className="mt-8">
        <SectionHeader>Projects</SectionHeader>
        <div className="flex w-4/5 flex-col gap-6">
          {data.map((el, index) => (
            <SingleProject
              {...el}
              handleSelect={() => setSelected(el)}
              key={'project_' + index}
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selected && <ProjectOverview {...selected} setSelected={setSelected} />}
      </AnimatePresence>
    </>
  )
}

export default Projects
