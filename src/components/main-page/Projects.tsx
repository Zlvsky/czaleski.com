'use client'

import LinkSvg from '@/assets/icons/common/link.svg'
import GithubSvg from '@/assets/icons/social/github.svg'
import work1 from '@/assets/images/works/work1.png'
import work2 from '@/assets/images/works/work2.png'
import work3 from '@/assets/images/works/work3.png'
import work4 from '@/assets/images/works/work4.png'
import work5 from '@/assets/images/works/work5.png'
import work6 from '@/assets/images/works/work6.png'
import work7 from '@/assets/images/works/work7.png'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/button/Button'
import ProjectOverview from './ProjectOverview'

const data = [
  {
    name: 'BetterDevs',
    shortDescription:
      'Platform for developers to boost their coding skills by solving real-world problems and daily practices.',
    year: 'Ongoing',
    image: work1,
    live: 'https://betterdevs.net',
    github: 'https://github.com/Zlvsky/betterDevs/'
  },
  {
    name: 'Visity',
    shortDescription:
      'SaaS application for creating simple landing pages in minutes targeted to small businesses.',
    year: '2024',
    image: work2,
    live: 'https://visity.pl'
  },
  {
    name: 'Feedback Widget',
    shortDescription:
      'Feedback widget that can be embedded on websites to collect feedback and send console logs with page screenshots.',
    year: '2024',
    image: work3
  },
  {
    name: 'Realm of Dungeons',
    shortDescription:
      'Web multiplayer game in retro style, based on idle mechanics inspired by Shakes & Fidget.',
    year: '2023',
    image: work4,
    live: 'https://realmofdungeons.pages.dev',
    github: 'https://github.com/Zlvsky/realm-of-dungeons'
  },
  {
    name: 'Konva Moodboard',
    shortDescription: `Web app to create and export canvas moodboards with custom images.`,
    year: '2022',
    image: work5,
    github: 'https://github.com/Zlvsky/React-Konva-moodboard'
  },
  {
    name: 'One-place',
    shortDescription: `CRUD admin panel to manage business based on orders, that don't need online shop.`,
    year: '2021',
    image: work6,
    github: 'https://github.com/Zlvsky/one-place'
  },
  {
    name: 'Oferia.pl Automation bot',
    shortDescription:
      'Custom-made bot that automates the insertion of offers on a IT freelancing portal',
    year: '2021',
    image: work7
  },
  {
    name: 'ZSEClicker',
    shortDescription: 'Game based on idle mechanics, inspired by Cookie Clicker.',
    year: '2018'
  }
]

const SingleProject = ({
  name,
  shortDescription,
  year,
  image,
  live,
  github
}: (typeof data)[0]) => {
  return (
    <motion.div layoutId={name} className="flex flex-col gap-8">
      <div className="group relative min-h-40 w-full cursor-pointer overflow-hidden rounded-xl p-1 shadow-project">
        <Button className="absolute left-1/2 z-10 -translate-x-1/2 -translate-y-10 border bg-black text-white transition-transform group-hover:-translate-y-2">
          Read more
        </Button>
        {image && (
          <Image
            src={image}
            width={672}
            height={380}
            alt=""
            className="scale h-full rounded-md transition-transform group-hover:translate-y-10"
          />
        )}
      </div>
      <div className="flex flex-col justify-between pr-4 md:flex-row">
        <p className="text-[#555] md:w-3/5">{shortDescription}</p>
        <div className="items-end text-right md:w-2/5">
          <div className="flex flex-col justify-end">
            <span className="text-sm text-[#777]">{year}</span>
            <h4 className="text-lg font-semibold tracking-tighter">{name}</h4>
            <div className="flex flex-row items-center justify-end gap-1">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  <LinkSvg className="h-4 w-4" />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1"
                >
                  <GithubSvg className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const [selected, setSelected] = useState<null | (typeof data)[0]>(null)

  return (
    <>
      <div className="mt-8">
        {/* <SectionHeader>Projects</SectionHeader> */}
        <div className="flex flex-col gap-14">
          {data.map((el, index) => (
            <SingleProject {...el} key={'project_' + index} />
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
