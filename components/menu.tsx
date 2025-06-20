'use client';

import React, { useState } from 'react'
import MenuItem from './menuItem'


const MENUITEMS = [
  {
    id: 'about',
    menuTitle: 'About',
    menuLink: '/#about'
  },
  {
    id: 'education',
    menuTitle: 'Education',
    menuLink: '/#education'
  },
  {
    id: 'projects',
    menuTitle: 'Projects',
    menuLink: '/#projects'
  },
  {
    id: 'contact',
    menuTitle: 'Contact',
    menuLink: '/#contact'
  },
]

const Menu = () => {
  // TODO: add state to determine active id
  const [activeMenu, setActiveMenu] = useState(MENUITEMS[0].id);

  const changeMenu = (menuId: string) => {
    setActiveMenu(menuId);
  }
  return (
    <div className='w-3/5 hidden md:flex flex-col justify-center items-start text-white space-y-6 my-4 '>
      {MENUITEMS.map(menu => (
        <MenuItem
          key={menu.id}
          isActive={menu.id === activeMenu}
          {...menu}
          onClick={changeMenu}
        />
      ))}

    </div>
  )
}

export default Menu