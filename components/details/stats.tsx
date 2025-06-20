import React from 'react'


const STATS = [
    {
        platform: "Leetcode",
        maxRating: 1627,
        solved: 646,
        url: 'https://leetcode.com/u/terminalwarlord/'
    },
    {
        platform: "CodeForces",
        maxRating: 1160,
        solved: 975,
        url: 'https://codeforces.com/profile/TerminalWarlord'
    },
    {
        platform: "CodeChef",
        maxRating: 1516,
        solved: 170,
        url: 'https://www.codechef.com/users/jaybeeop'
    },
    {
        platform: "Atcoder",
        maxRating: 294,
        solved: 50,
        url: 'https://atcoder.jp/users/TerminalWarlord'
    },
    {
        platform: "CSES",
        maxRating: 0,
        solved: 20,
        url: 'https://cses.fi/user/112416'
    },
    
]

const Stats = () => {
    return (
        <div className='my-8'>
            <h4 className='text-xl text-center my-4 text-slate-50'>Problem Solving Stats</h4>
            <div className='flex flex-wrap space-x-3 items-center text-center justify-center'>
                {STATS.map(stat=>{
                    return <div key={stat.platform}>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-50'>{stat.solved}+</p>
                    <a href={stat.url} className='text-gray-300 hover:text-gray-400'>{stat.platform}</a>
                </div>
                })}
            </div>
        </div>
    )
}

export default Stats