import CypressSvg from '@/assets/icons/stack/cypress.svg'
import DockerSvg from '@/assets/icons/stack/docker.svg'
import Express from '@/assets/icons/stack/express.svg'
import FirebaseSvg from '@/assets/icons/stack/firebase.svg'
import GitSvg from '@/assets/icons/stack/git.svg'
import JSSvg from '@/assets/icons/stack/javascript.svg'
import JestSvg from '@/assets/icons/stack/jest.svg'
import Mongo from '@/assets/icons/stack/mongo.svg'
import NextSVG from '@/assets/icons/stack/nextjs.svg'
import Node from '@/assets/icons/stack/node.svg'
import ReactSVG from '@/assets/icons/stack/react.svg'
import TSSvg from '@/assets/icons/stack/typescript.svg'
import WordpressSVg from '@/assets/icons/stack/wordpress.svg'

import SectionHeader from '../ui/SectionHeader'
import SingleTech from '../ui/SingleTech'

const data = {
  frontend: [
    {
      name: 'JavaScript',
      Icon: JSSvg,
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
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
    },
    {
      name: 'Firebase',
      Icon: FirebaseSvg,
      href: 'https://firebase.google.com/ '
    }
  ],
  tools: [
    {
      name: 'git',
      Icon: GitSvg,
      href: 'https://git-scm.com/'
    },
    {
      name: 'Docker',
      Icon: DockerSvg,
      href: 'https://www.docker.com/'
    },
    {
      name: 'Jest',
      Icon: JestSvg,
      href: 'https://jestjs.io/'
    },
    {
      name: 'Cypress',
      Icon: CypressSvg,
      href: 'https://www.cypress.io/'
    }
  ]
}

function Skills() {
  return (
    <div className="mt-8">
      <SectionHeader>Skills</SectionHeader>
      <div className="mb-2 flex flex-row ">
        {/* <div className="w-1/5">
          <span className="text-sm text-[#999]">frontend:</span>
        </div> */}
        <div className="flex flex-row flex-wrap items-center gap-2">
          {data.frontend.map((tech, index) => (
            <SingleTech key={index} {...tech} />
          ))}
        </div>
      </div>
      <div className="mb-2 flex flex-row ">
        {/* <div className="w-1/5">
          <span className="text-sm text-[#999]">backend:</span>
        </div> */}
        <div className="flex  flex-row flex-wrap items-center gap-2">
          {data.backend.map((tech, index) => (
            <SingleTech key={index} {...tech} />
          ))}
        </div>
      </div>
      <div className="mb-2 flex flex-row ">
        {/* <div className="w-1/5">
          <span className="text-sm text-[#999]">backend:</span>
        </div> */}
        <div className="flex flex-row flex-wrap items-center gap-2">
          {data.tools.map((tech, index) => (
            <SingleTech key={index} {...tech} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
