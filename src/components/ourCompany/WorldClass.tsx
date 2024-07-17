import React from 'react'

export default function WorldClass() {
  return (
    <div className='w-full mt-[150px] flex justify-center '>
        <div className='w-[1000px] h-[570px] bg-rose rounded-2xl flex flex-row'>
            <div className='h-full w-[45%] 
            bg-[url("/assets/about/desktop/image-world-class-talent.jpg")]
            bg-no-repeat bg-cover rounded-l-2xl'></div>
            <div className='h-full w-[55%] space-y-5 px-20 flex flex-col justify-center'>
                <h1 className='text-maron font-bold text-[30px]'>World-class talent</h1>
                <p className='text-dark'>We are a crew of strategists, problem-solvers, 
                    and technologists. Every design is thoughtfully
                     crafted from concept to launch, ensuring success in its given market. 
                     We are constantly updating our skills in a myriad of platforms.</p>
                <p className='text-dark'>
                    Our team is multi-disciplinary and we are not 
                    merely interested in form — content and meaning 
                    are just as important. We give great importance to 
                    craftsmanship, service, and prompt delivery. Clients have 
                    always been impressed with our high-quality outcomes 
                    that encapsulates their brands story and mission.
                </p>
            </div>
        </div>
    </div>
  )
}
