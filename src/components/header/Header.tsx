'use client'
import { motion } from 'framer-motion'
import Logo from './_components/Logo'
import ModeToggle from './_components/ModeToggle'
import NavLinks from './_components/NavLinks'
import Socials from './_components/Socials'

function Header() {
  return (
    <motion.div
      initial="visible"
      transition={{ duration: 0.6, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 }
      }}
      className="fixed left-0 right-0 top-4  z-20 mx-auto flex w-[96%] max-w-2xl items-center justify-between rounded-2xl border border-grayE8 bg-white/40 px-2 py-3 shadow-sm backdrop-blur-md dark:border-dark26 dark:bg-black/40 sm:px-5 sm:py-4 md:w-full"
    >
      <div className="flex flex-row items-center justify-between gap-4">
        <Logo />
        <NavLinks />
      </div>

      <div className="flex flex-row items-center gap-1 sm:gap-3">
        {/* <NavLinks /> */}
        <Socials />
        <ModeToggle />
      </div>
    </motion.div>
  )
}

export default Header
