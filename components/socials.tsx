import Image from 'next/image'
import React from 'react'

const Socials = () => {
  return (
    <div className='flex justify-center items-center z-10 space-x-4'>
      <div className="hover:brightness-0 hover:invert">
        <Image src={"github.svg"} alt='Github icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer'/>
      </div>
      <div className="hover:brightness-0 hover:invert">
        <Image src={"linkedin.svg"} alt='Linkedin icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer' />
      </div>
      <div className="hover:brightness-0 hover:invert">
        <Image src={"twitter.svg"} alt='Twitter icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer' />
      </div>
      <div className="hover:brightness-0 hover:invert">
        <Image src={"leetcode.svg"} alt='Leetcode icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer' />
      </div>
      <div className="hover:brightness-0 hover:invert">
        <Image src={"codeforces.svg"} alt='Codeforces icon' width={25} height={25} className='w-5 lg:w-7 aspect-square cursor-pointer' />
      </div>

    </div>
  )
}

export default Socials