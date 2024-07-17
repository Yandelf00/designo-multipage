import React from 'react'

export default function UnitedKingdom() {
  return (
    <div className='w-full flex justify-center mt-[30px]'>
        <div className='w-[1000px] flex flex-row justify-between'>
            <div className='h-[300px] flex space-y-6 flex-col justify-center pl-20 w-[65%] bg-rose rounded-2xl'>
                <h1 className='text-[30px] text-maron font-bold'>United Kingdom</h1>
                <div className='flex flex-row w-full space-x-16 text-[13px]'>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='font-bold'>Designs Uk Office</h2>
                        <p>13 Colorado Way</p>
                        <p>Rhyd-y-fro SA8 9GA</p>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='font-bold'>Contact</h2>
                        <p>P : 078 3115 1400</p>
                        <p>M : contact@designo.uk</p>
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d19768.433161558663!2d-3.8619000000000003!3d51.732045!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721181106951!5m2!1sen!2sin"
                width="320"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                className='rounded-2xl'
            />
        </div>
    </div>

  )
}
