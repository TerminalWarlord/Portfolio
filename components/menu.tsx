'use client';

import React from 'react'
import MenuItem from './menuItem'

const Menu = () => {
  // TODO: add state to determine active id
  return (
    <div className='w-3/5 flex flex-col justify-center items-start text-white space-y-6 my-4'>
        <MenuItem isActive={true} menuTitle='About' menuLink='/#about'/>
        {/* <MenuItem isActive={false} menuTitle='Experience'  menuLink='/#experience'/> */}
        <MenuItem isActive={false} menuTitle='Education'  menuLink='/#education'/>
        <MenuItem isActive={false} menuTitle='Projects' menuLink='/#projects'/>
        <MenuItem isActive={false} menuTitle='Contact' menuLink='/#contact'/>
        
    </div>
  )
}

export default Menu