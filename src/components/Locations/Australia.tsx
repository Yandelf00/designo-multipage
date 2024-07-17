import React from 'react'

export default function Australia() {
  return (
    <div className='w-full mt-[30px] flex justify-center'>
        <div className='w-[1000px] flex flex-row justify-between'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6887.514143898611!2d149.788196!3d-30.329427000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ba73450a680702d%3A0x44a309bd6607346e!2s19%20Balonne%20St%2C%20Narrabri%20NSW%202390%2C%20Australia!5e0!3m2!1sen!2sin!4v1721180713674!5m2!1sen!2sin"
                width="320"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                className='rounded-2xl'
            />
            <div className='h-[300px] flex space-y-6 flex-col justify-center pl-20 w-[65%] bg-rose rounded-2xl'>
                <h1 className='text-[30px] text-maron font-bold'>Australia</h1>
                <div className='flex flex-row w-full space-x-16 text-[13px]'>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='font-bold'>Designs Au Office</h2>
                        <p>19 Balonne Street</p>
                        <p>New South Wales 2443</p>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='font-bold'>Contact</h2>
                        <p>P : 02 6720 9092</p>
                        <p>M : contact@designo.au</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
