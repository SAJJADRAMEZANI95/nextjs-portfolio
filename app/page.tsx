import React from 'react'
import Hero from '@/components/Hero'

const Home = () => {
  return (
    <main className=' relative bg-black-100 mx-auto flex flex-col justify-center items-center overflow-hidden sm:px-10 px-5'>
      <div className=' max-w-7xl w-full'>
        <Hero/>
      </div>
    </main>
  )
}

export default Home
