import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full h-[170px] flex justify-center'>
        <div className='w-[1000px] h-full flex flex-row justify-between items-center pr-5 pl-5 '>
            <Link href={'/'}>
              <Image src={'/assets/shared/desktop/logo-dark.png'} alt='logodark' height={200} width={200} priority className='cursor-pointer'/>
            </Link>
            <div className='flex text-dark mb-1 flex-row text-[14px] space-x-10'>
                <Link href={'/company'}>
                  <h2 className='cursor-pointer font-light hover:text-main transition
                  ease-in-out duration-200'>OUR COMPANY</h2>
                </Link>
                <Link href={'/locations'}>
                  <h2 className='cursor-pointer hover:text-main transition
                  ease-in-out duration-200 font-light'>LOCATIONS</h2>
                </Link>
                <Link href={'/contact'}>
                  <h2 className='cursor-pointer hover:text-main transition
                  ease-in-out duration-200 font-light'>CONTACT</h2>
                </Link>
            </div>
        </div>
    </div>
  )
}
