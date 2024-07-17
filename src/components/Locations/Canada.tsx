import React from 'react'

export default function Canada() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[1000px] flex flex-row justify-between'>
            <div className='h-[300px] flex space-y-6 flex-col justify-center pl-20 w-[65%] bg-rose rounded-2xl'>
                <h1 className='text-[30px] text-maron font-bold'>Canada</h1>
                <div className='flex flex-row w-full space-x-16 text-[13px]'>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='font-bold'>Designs Centra Office</h2>
                        <p>3886 Wellington Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <h2 className='font-bold'>Contact</h2>
                        <p>P : +1 253-863-8967</p>
                        <p>M : contact@designo.co</p>
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.199556247642!2d-79.39507996519605!3d43.64401632887108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d9a0737d9f%3A0xbc1ae74f23fabf4e!2sWellington%20St%20W%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sfr!2sma!4v1721179751008!5m2!1sfr!2sma"
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
