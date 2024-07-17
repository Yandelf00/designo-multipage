import React from 'react'
import Canada from '@/components/Locations/Canada'
import Australia from '@/components/Locations/Australia'
import UnitedKingdom from '@/components/Locations/UnitedKingdom'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <main className='w-full'>
        <Canada/>
        <Australia/>
        <UnitedKingdom/>
        <div className='mt-[150px]'>
            <Footer/>
        </div>
    </main>
  )
}
