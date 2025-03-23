"use client";

import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const ProjectCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(prev => !prev);
    }
    return (
        <div
            className="flex w-full space-x-8 px-4 py-4 
            hover:bg-slate-700/20 rounded-md shadow my-2 items-center"
            onMouseOver={toggleHover}
            onMouseOut={toggleHover}
        >

            <div className='min-w-fit'>
                <Image src={'/images/contest-tracker.png'} alt="Screenshot" width={600} height={600} className="w-60 h-auto rounded-md border-4 border-slate-300" />
            </div>
            <div className='flex flex-col flex-1 items-start'>
                <div className={`flex space-x-1 text-md lg:text-lg text-slate-50 justify-center items-center group`}>
                    <h4 className={`${isHovered ? 'text-[var(--link_hover)]' : ''}`}>Contest Tracker</h4>

                    <div className={`w-5 h-5 flex justify-start items-end transition-all ease-in-out duration-300 ${isHovered?'translate-x-1 -translate-y-1':''}`}>
                        <ArrowUpRight size={15} />
                    </div>
                </div>
                <span className='text-sm my-2 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi dolore est nulla ullam veritatis quisquam blanditiis laborum quibusdam accusantium nam quod, reprehenderit recusandae ad repellendus vero possimus cum id animi? Quidem eum voluptatibus quo ipsa ex excepturi laboriosam! Voluptates impedit nulla harum esse enim est sint natus. Illum, hic?</span>

            </div>
        </div>
    )
}

export default ProjectCard