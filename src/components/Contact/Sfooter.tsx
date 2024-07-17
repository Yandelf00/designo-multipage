import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import Link from 'next/link';

export default function Sfooter() {
  return (
    <div className='w-full h-[400px] relative flex justify-center'>
        <div className='w-full h-[400px] bg-dark absolute flex justify-center items-end bottom-0'>
            <div className='w-[1000px] flex flex-col space-y-5 h-[350px] '>
                <div className='w-full h-[70px] flex flex-row justify-between
                border border-x-0 border-t-0 border-b-1 border-white items-center pr-5 pl-5 '>
                    <Image src={'/assets/shared/desktop/logo-light.png'} alt='logodark' height={200} width={200} priority/>
                    <div className='flex text-white mb-1 flex-row text-[14px] space-x-10'>
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
                <div className='flex flex-row w-full justify-between h-[130px]'>
                    <div className='flex flex-col w-[30%] text-white h-full '>
                        <h1 className='font-bold'>Designs Central Office</h1>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className='flex flex-col text-white w-[30%] h-full'>
                        <h1 className='font-bold'>Designs Central Office</h1>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className='flex flex-row items-end space-x-5 justify-end h-full w-[30%] '>
                        <FaFacebook className='w-7 h-7 fill-main cursor-pointer' />         
                        <FaYoutube className='w-7 h-7 fill-main cursor-pointer'/>
                        <FaTwitter className='w-7 h-7 fill-main cursor-pointer'/>
                        <FaPinterest className='w-7 h-7 fill-main cursor-pointer'/>
                        <FaInstagram className='w-7 h-7 fill-main cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
