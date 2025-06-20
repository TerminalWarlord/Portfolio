import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col w-full md:w-3/5 items-center md:items-start my-12 md:my-0'>
            <h1 className='text-slate-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>Joy Biswas</h1>
            <h2 className='text-slate-200 text-base sm:text-md md:text-lg lg:text-xl my-2'>Software Engineer</h2>
            <p className="text-slate-400 my-2 text-xs md:text-sm lg:text-base px-2 break-words whitespace-normal text-center md:text-start md:px-0">
                Building efficient and accessible web applications.
            </p>
        </div>
    )
}

export default About