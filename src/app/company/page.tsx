import React from 'react'
import About from '@/components/ourCompany/About'
import WorldClass from '@/components/ourCompany/WorldClass'
import Locations from '@/components/ourCompany/Locations'
import RealDeal from '@/components/ourCompany/RealDeal'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <main className='w-full'>
        <About/>
        <WorldClass/>
        <Locations/>
        <RealDeal/>
        <div className='mt-[150px]'>
          <Footer/>
        </div>
    </main>
  )
}
