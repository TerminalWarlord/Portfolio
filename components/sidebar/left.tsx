import React from 'react'
import About from '../about'
import Menu from '../menu'
import Socials from '../socials'

const LeftSideBar = () => {
  return (
    <div className='w-4/5 bg-slate-900 flex flex-col justify-evenly items-center selection:bg-cyan-200 selection:text-black'>
      <About />
      <Menu/>
      <Socials/>
    </div>
  )
}

export default LeftSideBar