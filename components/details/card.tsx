"use client";

import { ArrowUpRight, Link as LinkIcon } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({
    duration,
    imagePath,
    role,
    description,
    stacks,
    links
}: {
    duration?: string,
    role: string,
    imagePath?: string,
    description: string,
    links?: { title: string, url: string }[]
    stacks?: string[]
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(prev => !prev);
    }

    return (
        <div
            className='flex w-full space-x-8 px-4 py-4 
        hover:bg-slate-700/20 rounded-md shadow my-2'
            onMouseOver={toggleHover}
            onMouseOut={toggleHover}
        >
            <div className='min-w-28'>
                {imagePath ? <Image src={imagePath} alt='Project Screenshot' width={600} height={600} className='w-60 h-auto rounded-md border-4 border-slate-300' /> : <span className='text-xs uppercase'>{duration}</span>}
            </div>
            <div className='flex flex-col flex-1 items-start'>
                <div className={`flex space-x-1 text-md lg:text-lg text-slate-50 justify-center items-center group`}>
                    <h4 className={`${isHovered ? 'text-[var(--link_hover)]' : ''}`}>{role}</h4>

                    <div className={`w-5 h-5 flex justify-start items-end transition-all ease-in-out duration-300 ${isHovered ? 'translate-x-1 -translate-y-1' : ''}`}>
                        <ArrowUpRight size={15} />
                    </div>
                </div>
                <span className='text-sm my-2 leading-6'>{description}</span>
                {links && links.length && <div className='flex flex-wrap my-2 space-x-2.5'>
                    {links.map(link => {
                        return <Link key={link.url} href={link.url} className='text-slate-200 hover:text-[var(--link_hover)]'><p className='flex space-x-2 text-sm  justify-center items-center my-1'><LinkIcon size={13} /><span>{link.title}</span></p></Link>
                    })}
                </div>}
                {stacks && stacks.length && <div className='flex flex-wrap text-center space-x-2 my-1'>
                    {stacks.map(stack => {
                        return <p key={stack} className='px-3 py-1.5 my-1.5 rounded-2xl bg-green-200/10 text-sm text-cyan-300'>{stack}</p>
                    })}
                </div>}
            </div>
        </div>
    )
}

export default Card