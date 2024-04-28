import SectionHeader from '../ui/SectionHeader'

function Hero() {
  return (
    <div className="flex flex-col  md:flex-row">
      <div className="w-4/5">
        <SectionHeader>Some words about me 👋</SectionHeader>
        <p className="mb-4 text-[#555] dark:text-white">
          I&apos;m a web & frontend developer, proficient in React ecosystem. Seamlessly
          transitioning from crafting websites to developing web applications.
        </p>
        <p className="mb-4 text-[#555] dark:text-white">
          Passionate about creative solutions and building apps from scratch, perfecting
          both backend and frontend.
        </p>
        <p className="text-[#555] dark:text-white">
          Currently working as a sole frontend developer, freelancing from time-to-time
          and building my own products.
        </p>
      </div>
    </div>
  )
}

export default Hero
