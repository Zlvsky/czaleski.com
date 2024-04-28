'use client'
import { motion } from 'framer-motion'
import Logo from './_components/Logo'
import NavLinks from './_components/NavLinks'

function Header() {
  return (
    <motion.div
      initial="visible"
      transition={{ duration: 0.6, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 }
      }}
      className="top-4 z-20 mx-auto my-4 mb-20 flex w-full max-w-2xl items-center justify-between rounded-2xl py-1"
    >
      <Logo />
      <NavLinks />
      {/* <Connect /> */}
    </motion.div>
  )
}

export default Header
