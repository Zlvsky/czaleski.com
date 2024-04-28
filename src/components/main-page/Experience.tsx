import SectionHeader from '../ui/SectionHeader'

const data = [
  {
    role: 'Frontend Developer',
    company: 'GoodSoft',
    date: '2022 — Now'
  },
  {
    role: 'Web Developer',
    company: 'Freelancer',
    date: '2022 — Now'
  },
  {
    role: 'Web Developer',
    company: 'Seomi',
    date: '2021 — 2022'
  }
]

const SingleExperience = ({ role, company, date }: (typeof data)[0]) => {
  return (
    <div className="flex flex-row items-center py-2 text-sm text-[#555]">
      <span className="w-1/4 text-left">{date}</span>
      <span className="font-medium">{role} </span>
      <span className="ml-1">@ {company}</span>
    </div>
  )
}

function Experience() {
  return (
    <div className="mt-8">
      <SectionHeader>Experience</SectionHeader>
      <div className="flex flex-col ">
        {data.map((el, index) => (
          <SingleExperience {...el} key={'exp_' + index} />
        ))}
      </div>
    </div>
  )
}

export default Experience
