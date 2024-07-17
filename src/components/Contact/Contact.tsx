import React from 'react'
import { BiColor } from 'react-icons/bi'

export default function Contact() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[1000px] h-[500px] bg-main rounded-2xl
        bg-[url("/assets/contact/desktop/bg-pattern-hero-desktop.svg")]
        bg-no-repeat bg-contain flex flex-row justify-between'>
            <div className='w-[50%] text-white space-y-7 flex flex-col h-full justify-center pl-20'>
                <h1 className='text-[40px] font-bold'>Contact Us</h1>
                <p>
                    Ready to take it to the next level? Lets talk about 
                    your project or idea and find out how we can help your 
                    business grow. If you are looking for unique digital experiences thats
                    relatable to your users, drop us a line.
                </p>
            </div>
        <div className='flex flex-col items-start space-y-10 h-full w-[40%] justify-center'>
                <input type="text" placeholder='Name' className='bg-main text-white
                placeholder-white border border-x-0 border-t-0 border-b-1 border-white w-[80%]
                pl-4 pb-2'/>
                <input type="text" placeholder='Email Address' className='bg-main text-white
                placeholder-white border border-x-0 border-t-0 border-b-1 border-white w-[80%]
                pl-4 pb-2'/>
                <input type="text" placeholder='Phone' className='bg-main text-white
                placeholder-white border border-x-0 border-t-0 border-b-1 border-white w-[80%]
                pl-4 pb-2'/>
                <input type="text" placeholder='Your Message' className='bg-main text-white
                placeholder-white border border-x-0 border-t-0 border-b-1 border-white w-[80%]
                pl-4 pb-2'/>
                <div className='w-[90%] h-[50px] flex justify-end'>
                    <button className='h-full w-[150px] bg-white text-dark
                    hover:bg-monalisa hover:text-white rounded-xl
                    transition ease-in-out duration-200'>SUBMIT</button> 
                </div>
            </div>
        </div>
    </div>
  )
}
