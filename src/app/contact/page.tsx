import React from 'react'
import Contact from '@/components/Contact/Contact'
import Locations from '@/components/ourCompany/Locations'
import Sfooter from '@/components/Contact/Sfooter'

export default function page() {
  return (
    <main className='w-full'>
        <Contact/>
        <Locations/>
        <Sfooter/>
    </main>
  )
}
