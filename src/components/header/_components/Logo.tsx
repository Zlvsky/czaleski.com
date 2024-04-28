import profile from '@/assets/images/profile.png'
import Image from 'next/image'

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image
        width={200}
        height={200}
        className="h-20 w-20  rounded-full drop-shadow-xl "
        src={profile.src}
        alt=""
      />
      <div className="flex flex-col space-y-1 text-sm leading-none">
        <span className="text-lg font-bold dark:text-white">Krzysztof Zaleski</span>
        <span>frontend developer</span>
      </div>
    </div>
  )
}

export default Logo
