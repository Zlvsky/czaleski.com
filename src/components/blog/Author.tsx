import profile from '@/assets/images/profile.png'
import Image from 'next/image'
import { memo } from 'react'
import { SocialIcons } from '../header/_components/Socials'

export const Author = memo(() => {
  return (
    <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
      <Image
        width={160}
        height={160}
        className="h-32 w-32  rounded-xl border  bg-gradient-to-b from-[#D7D7D7] to-[#FEFEFE] drop-shadow-xl "
        src={profile.src}
        alt=""
      />

      <div className="flex flex-col">
        <h3 className={'text-lg'}>Written by Krzysztof Zaleski</h3>
        <p className={'mb-3 text-[#555] dark:text-[#a8a8a8]'}>
          Web & Frontend developer based in Poland. Passionate about creative solutions
          and building apps from scratch.
        </p>
        <SocialIcons />
      </div>
    </div>
  )
})

Author.displayName = 'Author'
