import React from 'react'
import Image from 'next/image'

export default function Locations() {
  return (
    <div className='w-full mt-[150px] flex justify-center'>
        <div className='h-[500px] z-50 w-[1010px] flex flex-row space-x-5'>
            <div className='w-1/3 flex flex-col items-center space-y-5'>
                <div className='w-[200px] h-[200px] bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")]'>
                    <Image src={'/assets/shared/desktop/illustration-canada.svg'} alt='pass' height={200} width={200}/>
                </div>
                    <h1 className='text-dark text-center text-[15px] font-bold'>Canada</h1>
                    <button className='bg-maron text-white h-[60px] w-[170px] font-bold rounded-lg text-[14px]
                    hover:bg-main transition ease-in-out duration-200'>
                        See Location
                    </button>
            </div>
            <div className='w-1/3 flex flex-col items-center space-y-5'>
                <div className='w-[200px] h-[200px] bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")]'>
                    <Image src={'/assets/shared/desktop/illustration-australia.svg'} alt='pass' height={200} width={200}/>
                </div>
                    <h1 className='text-dark text-center text-[15px] font-bold'>Australia</h1>
                    <button className='bg-maron text-white h-[60px] w-[170px] font-bold rounded-lg text-[14px]
                    hover:bg-main transition ease-in-out duration-200'>
                        See Location
                    </button>
            </div>
            <div className='w-1/3 flex flex-col items-center space-y-5'>
                <div className='w-[200px] h-[200px] bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")]'>
                    <Image src={'/assets/shared/desktop/illustration-united-kingdom.svg'} alt='pass' height={200} width={200}/>
                </div>
                    <h1 className='text-dark text-center text-[15px] font-bold'>United Kingdom</h1>
                    <button className='bg-maron text-white h-[60px] w-[170px] font-bold rounded-lg text-[14px]
                    hover:bg-main transition ease-in-out duration-200'>
                        See Location
                    </button>
            </div>
        </div>
    </div>
  )
}
