import React from 'react'
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse gap-20 lg:gap-0 lg:flex-row items-center justify-between min-h-[50vh]">
        <div className="space-y-10 text-center lg:text-left">
            <h1 className="text-2xl lg:text-6xl font-bold">
                Rage, Rage 
                <br/> <span className="underline underline-offset-8 decoration-red-400">{"against the dying of light"}</span>
            </h1>
            <p className="text-lg text-gray-300">
            तुम जब आओगी तो खोया हुआ पाओगी मुझे,<br />
            मेरी तन्हाई में ख़्वाबों के सिवा कुछ भी नहीं<br />
            मेरे कमरे को सजाने की तमन्ना है तुम्हें,<br />
            मेरे कमरे में किताबों के सिवा कुछ भी नहीं<br />
            </p>
            <p className="text-lg text-gray-300">
            Football, Code, Poetry.
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
