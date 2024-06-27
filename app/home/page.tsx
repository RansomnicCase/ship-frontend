"use client";
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { ThreeDCardDemo } from './components/ui/3d-card'
import { useRouter } from "next/navigation";
import { ThreeDCardDemo2 } from './components/ui/3d-card2'
import { ThreeDCardDemo3 } from './components/ui/3d-card3'


export default function Page(): React.JSX.Element {
  const router = useRouter();

  const handleClick = () => {
    router.push("/waitlist");
  };
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
      <h1 className="flex text-xl lg:text-2xl text-center justify-center lg:justify-start lg:text-left p-20 py-10 font-bold underline underline-offset-4 decoration-red-300">Some of what I write</h1>
      </div>
      
      </div>
      
      
      <div className="p-20 py-1 flex justify-evenly items-center flex-col-reverse gap-10 lg:gap-0 lg:flex-row  min-h-[50vh]">
      <ThreeDCardDemo/>
      <ThreeDCardDemo2/>
      <ThreeDCardDemo3/>
      
      </div>
      <br />
      <br />

      <div className="flex justify-center items-center">
      <button
          className="bg-black dark:bg-black rounded-full w-fit text-black dark:text-white px-4 py-2 size-15"
          onClick={handleClick}
        >
          Join the waitlist
      </button>
      </div>
      <br />

      
     
    </div>
  )
}