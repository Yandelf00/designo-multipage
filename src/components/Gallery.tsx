import React from 'react'

export default function Gallery() {
  return (
    <div className='w-full mt-[150px] flex justify-center'>
        <div className='w-[1010px] ml:h-[500px] ml:w-[800px] h-[620px] space-x-5 flex flex-row mb-1'>
            <div className='h-full w-[500px] rounded-md
            bg-[url("/assets/home/desktop/image-web-design-large.jpg")]'></div>
            <div className='w-[500px] h-full flex flex-col space-y-5'>
                <div className='w-full h-[305px] rounded-md bg-[url("/assets/home/desktop/image-app-design.jpg")]'></div>
                <div className='w-full h-[305px] rounded-md bg-[url("/assets/home/desktop/image-graphic-design.jpg")]'></div>
            </div>
        </div>
    </div>
  )
}
