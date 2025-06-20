import React from 'react'
import About from '../about'
import Menu from '../menu'
import Socials from '../socials'

const LeftSideBar = () => {
  return (
    <div className='w-full md:w-4/5 z-10 flex flex-col justify-evenly items-center selection:bg-cyan-200 selection:text-black'>
      <About />
      <Menu/>
      <Socials/>
    </div>
  )
}

export default LeftSideBar