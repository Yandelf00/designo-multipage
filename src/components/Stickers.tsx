import React from 'react'
import LeafTwo from './LeafTwo'
import Image from 'next/image'

export default function Stickers() {
  return (
    <div className='w-full mt-[150px] relative flex justify-center'>
        <div className='h-[500px] z-50 w-[1010px] flex flex-row space-x-5'>
            <div className='w-1/3 flex flex-col items-center space-y-5'>
                <div className='w-[200px] h-[200px] bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")]'>
                    <Image src={'/assets/home/desktop/illustration-passionate.svg'} alt='pass' height={200} width={200}/>
                </div>
                    <h1 className='text-dark text-center text-[15px] font-bold'>Passionate</h1>
                    <p className='text-[13px] text-center'>
                        Each project starts with 
                        an in-depth brand research to ensure 
                        we only create products that serve a purpose. 
                        We merge art, design, and technology into exciting new solutions.
                    </p>
            </div>
            <div className='w-1/3 flex flex-col items-center space-y-5'>
                <div className='w-[200px] h-[200px] bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")]'>
                    <Image src={'/assets/home/desktop/illustration-resourceful.svg'} alt='pass' height={200} width={200}/>
                </div>
                    <h1 className='text-dark text-center text-[15px] font-bold'>Resourceful</h1>
                    <p className='text-[13px] text-center'>
                       Everything that we do has a strategic purpose. 
                       We use an agile approach in all of our projects and value 
                       customer collaboration. It guarantees superior results that fulfill 
                       our clients needs.
                    </p>
            </div>
            <div className='w-1/3 flex flex-col items-center space-y-5'>
                <div className='w-[200px] h-[200px] bg-[url("/assets/shared/desktop/bg-pattern-small-circle.svg")]'>
                    <Image src={'/assets/home/desktop/illustration-friendly.svg'} alt='pass' height={200} width={200}/>
                </div>
                    <h1 className='text-dark text-center text-[15px] font-bold'>Friendly</h1>
                    <p className='text-[13px] text-center'>
                        We are a group of enthusiastic folks
                        who know how to put people first. Our 
                        success depends on our customers, and 
                        we strive to give them the best experience a company can provide.
                    </p>
            </div>
        </div>
    </div>
  )
}

