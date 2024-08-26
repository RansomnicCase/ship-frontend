import React from 'react'
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse gap-20 lg:gap-0 lg:flex-row items-center justify-between min-h-[50vh]">
        <div className="space-y-10 text-center lg:text-left">
            <h1 className="text-2xl lg:text-6xl font-bold">
                Generic, very Generic 
                <br/> <span className="underline underline-offset-8 decoration-red-400">{"shitass of a tagline"}</span>
            </h1>
            <p className="text-lg text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Sunt ab ullam distinctio dicta nam, pariatur placeat laudantium cum voluptates a sint, 
          maiores velit dolorem. Reiciendis officiis praesentium aut natus iusto?
            </p>
            <p className="text-lg text-gray-300">
            we detec, we protec.
            </p>

            
            <a href="mailto:ilovemyth9@gmail.com" className="inline-block text-3xl font-bold hover:text-red-300 hover:scale-105 transition-all">
                <div>
                    <h1>Contact Me ✉️</h1>
                </div>
                <div className="w-full h-1.5 bg-red-200 -rotate-2"></div>
                <div className="w-full h-1.5 bg-red-600 translate-x-2 -rotate-2"></div>
            </a>

        </div>
        <div className="rounded-full overflow-hidden border-2 border-red-200">
        <Image
          src="/hero.jpg"
          alt="Your Photo"
          width={400}
          height={400}
          className="object-cover"
        />
        </div>
    </div>
  );
}
