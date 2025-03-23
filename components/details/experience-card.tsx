import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const ExperienceCard = ({
    from,
    to = 'present',
    role,
    description,
    stacks
}: {
    from: string,
    to?: string,
    role: string,
    description: string,
    stacks: string[]
}) => {
    return (
        <div className='flex w-full space-x-8 px-4 py-4 hover:bg-slate-700/20 rounded-md shadow my-2'>
            <div className='min-w-fit'>
                <span className='text-xs uppercase'>{from} - {to}</span>
            </div>
            <div className='flex flex-col flex-1 items-start'>
                <div className="flex space-x-1 text-md lg:text-lg text-slate-50 justify-center items-center group hover:text-[var(--link_hover)]">
                    <h4>{role}</h4>

                    <div className="w-5 h-5 flex justify-start items-end transition-all ease-in-out duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight size={15} />
                    </div>
                </div>
                <span className='text-sm my-2 leading-6'>{description}</span>
                <div className='flex flex-wrap text-center space-x-2 my-1'>
                    {stacks.map(stack => {
                        return <p key={stack} className='px-3 py-1.5 my-1.5 rounded-2xl bg-green-200/10 text-sm text-cyan-300'>{stack}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard