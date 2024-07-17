import React from 'react'

export default function About() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[1000px] flex flex-row h-[500px] rounded-2xl bg-main'>
            <div className='w-[55%] h-full 
            bg-[url("/assets/about/desktop/bg-pattern-hero-about-desktop.svg")]
            bg-cover bg-no-repeat space-y-9 flex text-white flex-col justify-center pl-20'>
                <h1 className='font-bold text-[40px]'>About Us</h1>
                <p>Founded in 2010, we are a creative agency that produces 
                    lasting results for our clients. We have partnered with many startups, 
                    corporations, and nonprofits alike to craft designs that make real impact. 
                    We are always looking forward to creating brands, 
                    products, and digital experiences that connect with our clients audiences.</p>
            </div>
            <div className='w-[45%] h-full bg-[url("/assets/about/desktop/image-about-hero.jpg")]
            bg-no-repeat bg-cover bg-center rounded-r-2xl'>

            </div>
        </div>
    </div>
  )
}
