import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Socials = () => {
  return (
    <div className='flex justify-center items-center z-10 space-x-4'>
      <div className="hover:brightness-0 hover:invert">
        <Link href={'https://github.com/TerminalWarlord'}>
          <Image src={"github.svg"} alt='Github icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer' />
        </Link>
      </div>
      <div className="hover:brightness-0 hover:invert">
        <Link href={'https://www.linkedin.com/in/joybiswas389/'}>
          <Image src={"linkedin.svg"} alt='Linkedin icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer' />
        </Link>
      </div>
      <div className="hover:brightness-0 hover:invert">
        <Link href={'https://x.com/JayBeeOP'}>
          <Image src={"twitter.svg"} alt='Twitter icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer' />
        </Link>
      </div>
      <div className="hover:brightness-0 hover:invert">
        <Link href={'https://leetcode.com/u/terminalwarlord/'}>
          <Image src={"leetcode.svg"} alt='Leetcode icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer' />
        </Link>
      </div>
      <div className="hover:brightness-0 hover:invert">
        <Link href={'https://codeforces.com/profile/TerminalWarlord'}>
          <Image src={"codeforces.svg"} alt='Codeforces icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer' />
        </Link>
      </div>

    </div>
  )
}

export default Socials