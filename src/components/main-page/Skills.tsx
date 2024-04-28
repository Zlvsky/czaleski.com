import Express from '@/assets/icons/stack/express.svg'
import Mongo from '@/assets/icons/stack/mongo.svg'
import NextSVG from '@/assets/icons/stack/nextjs.svg'
import Node from '@/assets/icons/stack/node.svg'
import ReactSVG from '@/assets/icons/stack/react.svg'
import TSSvg from '@/assets/icons/stack/typescript.svg'
import WordpressSVg from '@/assets/icons/stack/wordpress.svg'

import SingleTech from '../ui/SingleTech'

const data = {
  frontend: [
    {
      name: 'TypeScript',
      Icon: TSSvg,
      href: 'https://www.typescriptlang.org/'
    },
    {
      name: 'React',
      Icon: ReactSVG,
      href: 'https://react.dev/'
    },
    {
      name: 'Next.js',
      Icon: NextSVG,
      href: 'https://nextjs.org/'
    },
    {
      name: 'WordPress',
      Icon: WordpressSVg,
      href: 'https://wordpress.com/'
    }
  ],
  backend: [
    {
      name: 'Node.js',
      Icon: Node,
      href: 'https://nodejs.org/'
    },
    {
      name: 'Express.js',
      Icon: Express,
      href: 'https://expressjs.com/'
    },
    {
      name: 'MongoDB',
      Icon: Mongo,
      href: 'https://www.mongodb.com/'
    }
  ]
}

function Skills() {
  return (
    <div className="mt-10">
      <h1 className="text-sm font-medium text-[#545454]">Skills</h1>
      <div className="mb-4 flex flex-row">
        <div className="w-1/5">
          <span className="text-sm text-[#999]">frontend:</span>
        </div>
        <div className="flex w-4/5 flex-row items-center gap-2">
          {data.frontend.map((tech, index) => (
            <SingleTech key={index} {...tech} />
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-1/5">
          <span className="text-sm text-[#999]">backend:</span>
        </div>
        <div className="flex w-4/5 flex-row items-center gap-2">
          {data.backend.map((tech, index) => (
            <SingleTech key={index} {...tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
