import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { ThreeDCardDemo } from './components/ui/3d-card'

import { ThreeDCardDemo2 } from './components/ui/3d-card2'
import { ThreeDCardDemo3 } from './components/ui/3d-card3'


export default function page() {
  return (
    <div className="min-h-screen bg-black overflow-hidden dark:bg-black  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
      
      <div className=""> 
      <div className="max-w-7xl mx-auto p-5">
        <Navbar/>
        <HeroSection/>
      </div>
      </div>
      
      <div>
      <div>
      <h1 className="flex text-xl lg:text-2xl text-center lg:text-left p-20 py-10 font-bold underline underline-offset-4 decoration-red-300">Some of what I write</h1>
      </div>
      
      </div>
      
      
      <div className="p-20 py-1 flex justify-between items-center flex-col-reverse gap-20 lg:gap-0 lg:flex-row  min-h-[50vh]">
      <ThreeDCardDemo/>
      <ThreeDCardDemo2/>
      <ThreeDCardDemo3/>
      
      </div>

      
     
    </div>
  )
}
