"use client";

import Link from 'next/link';
import React, { useState } from 'react'

const MenuItem = ({ isActive = false, menuTitle, menuLink }: { isActive: boolean, menuTitle: string, menuLink: string }) => {
    const [isHovered, setIsHovered] = useState(isActive);
    return (
        <div
            className='flex justify-center items-center space-x-4 uppercase text-xs cursor-pointer'
            onMouseOver={() => {
                console.log('hovered')
                setIsHovered(true);
            }}
            onMouseOut={() => {
                if(!isActive){
                    setIsHovered(false);
                }
            }}
        >
            <div className={`h-0.5 transition-all ease-in-out duration-500 ${isHovered ? 'w-16 bg-slate-50' : 'w-8 bg-slate-600'}`}></div>
            <p className={`${isHovered ? 'text-slate-50' : 'text-slate-600'}`}><Link href={menuLink}>{menuTitle}</Link></p>
        </div>
    )
}

export default MenuItem