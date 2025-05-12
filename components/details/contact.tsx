import React from 'react'

const Contact = () => {
    return (
        <div className='w-full my-6'>
            <form action="" method="post" className='border-2 py-4 rounded-lg border-gray-600/60 flex flex-col space-y-3 px-6'>
                <div>
                    <h2 className='text-center text-xl text-gray-100'>Contact Me</h2>
                </div>
                <div className='grid grid-cols-[100px_1fr] items-center gap-4'>
                    <label className='text-lg text-gray-300'>Name</label>
                    <input
                        type="text"
                        className='bg-blue-500/25 rounded-lg px-4 py-1 text-white border border-transparent focus:border-gray-400/50 focus:outline-none'
                        placeholder='John Doe'
                    />

                    <label className='text-lg text-gray-300'>Email</label>
                    <input
                        type="text"
                        className='bg-blue-500/25 rounded-lg px-4 py-1 text-white border border-transparent focus:border-gray-400/50 focus:outline-none'
                        placeholder='johndoe@gmail.com'
                    />

                    <label className='text-lg text-gray-300'>Message</label>
                    <textarea
                        className='bg-blue-500/25 rounded-lg px-4 py-1 text-white border border-transparent focus:border-gray-400/50 focus:outline-none'
                        placeholder='message'
                    />
                </div>
                <div className='flex w-full items-center justify-end'>
                    <button className='px-4 py-1 bg-blue-500/25 text-gray-50/60 w-fit rounded-lg hover:text-gray-50/80 cursor-pointer'>Submit</button>
                </div>
                <div>
                    <p className='text-center text-sm text-gray-300/60'>or just simple send me a mail at <a href="mailto:contact@joybiswas.com" className='text-gray-200'>contact@joybiswas.com</a></p>
                </div>
            </form>
        </div>
    )
}

export default Contact