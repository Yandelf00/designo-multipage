import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='w-full mt-[60px] flex justify-center pl-10 pr-10'>
        <div className='w-[1010px] relative h-[620px] bg-main rounded-lg'>
            <HeroPattern/>
            <div className='flex flex-row md:flex-col w-full h-full'>
                <div className='w-1/2 md:w-full flex flex-col space-y-10 md:justify-center md:items-center items-start justify-center pl-20 pr-1'>
                    <h1 className='text-white
                    font-bold text-[30px]'>Award-winning custom designs and digital branding solutions</h1>
                    <h2 className='text-white text-[20px]'>With over 10 years in the industry, we are experienced 
                        in creating fully responsive websites, app design, and 
                        engaging brand experiences. Find out more about our services.</h2>
                    <Link href={'/company'}>
                        <button className='text-black font-bold
                        bg-white h-[50px] w-[170px] rounded-lg
                        hover:bg-rose transition
                        ease-in-out duration-200'>Learn more</button>
                    </Link>
                </div>
                <div className='w-1/2 md:w-full h-full md:justify-center flex items-end'>
                    <div className='w-full md:w-[300px] md:h-[300px] bg-[url("/assets/home/desktop/image-hero-phone.png")]
                    bg-cover bg-no-repeat bg'></div>
                </div>
            </div>
        </div>
    </div>
  )
}


function HeroPattern(){
    return(
        <div className='absolute right-0'>
            <svg width="640" height="639" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%"/><stop stopColor="#5D0202" stopOpacity=".498" offset="100%"/></linearGradient></defs><circle fill="url(#a)" transform="matrix(0 -1 -1 0 640 640)" cx="320" cy="320" r="320" fillRule="evenodd" opacity=".309"/></svg>
        </div>
    )
}