import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-[600px] relative flex justify-center'>
        <div className='w-full h-[400px] bg-dark absolute bottom-0'></div>
        <div className='w-[1000px] bg-main z-50 flex flex-row h-[320px] rounded-2xl'>
            <div className='flex h-full w-3/4 space-y-10 px-20 justify-center text-white flex-col'>
                <h1 className='text-[30px] font-bold'>Lets talk about your project</h1>
                <p>Ready to take it to the next level? 
                    Contact us today and find out how 
                    our expertise can help your business grow.</p>
            </div>
            <div className='h-full w-1/4 flex justify-center items-center'>
                <button className='w-[170px] h-[60px] bg-white text-dark
                hover:bg-monalisa hover:text-white transition ease-in-out duration-200
                text-[15px] rounded-lg font-bold'>Get in Touch</button>
            </div>
        </div>
    </div>
  )
}
