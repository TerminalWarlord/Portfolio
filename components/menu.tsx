import React from 'react'
import MenuItem from './menuItem'

const Menu = () => {
  return (
    <div className='w-3/5 flex flex-col justify-center items-start text-white space-y-6 my-4'>
        <MenuItem isActive={false} menuTitle='About' menuLink='/#about'/>
        <MenuItem isActive={false} menuTitle='Experience'  menuLink='/#experience'/>
        <MenuItem isActive={true} menuTitle='Projects' menuLink='/#projects'/>
        
    </div>
  )
}

export default Menu