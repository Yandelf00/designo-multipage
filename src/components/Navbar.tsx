import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='w-full h-[170px] flex justify-center'>
        <div className='w-[1000px] h-full flex flex-row justify-between items-center pr-5 pl-5 '>
            <Image src={'/assets/shared/desktop/logo-dark.png'} alt='logodark' height={200} width={200} priority/>
            <div className='flex text-dark mb-1 flex-row text-[14px] space-x-10'>
                <h2 className='cursor-pointer font-light hover:text-main transition
                ease-in-out duration-200'>OUR COMPANY</h2>
                <h2 className='cursor-pointer hover:text-main transition
                ease-in-out duration-200 font-light'>LOCATIONS</h2>
                <h2 className='cursor-pointer hover:text-main transition
                ease-in-out duration-200 font-light'>CONTACT</h2>
            </div>
        </div>
    </div>
  )
}
