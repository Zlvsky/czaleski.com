'use client'

import Moon from '@/assets/icons/ui/moon.svg'
import Sun from '@/assets/icons/ui/sun.svg'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button/Button'

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const handleToggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else setTheme('light')
  }

  return (
    <Button variant="icon" size="icon" onClick={handleToggleTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
