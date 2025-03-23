import React from 'react'
import MenuItem from './menuItem'

const Menu = () => {
  return (
    <div className='w-3/5 flex flex-col justify-center items-start text-white space-y-6 my-4 z-10'>
        <MenuItem isActive={false} menuTitle='About' menuLink='/about'/>
        <MenuItem isActive={false} menuTitle='Experience'  menuLink='/about'/>
        <MenuItem isActive={true} menuTitle='Projects' menuLink='/about'/>
        
    </div>
  )
}

export default Menu