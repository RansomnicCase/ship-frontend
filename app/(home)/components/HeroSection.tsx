import React from 'react'
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex items-center justify-between min-h-[50vh]">
        <div className="space-y-10">
            <h1 className="text-3xl lg:text-7xl font-bold">
                Rage, Rage 
                <br/> <span className="underline underline-offset-8">{"against the dying of light"}</span>
            </h1>
            <p className="text-lg text-gray-300">
            तुम जब आओगी तो खोया हुआ पाओगी मुझे,<br />
            मेरी तन्हाई में ख़्वाबों के सिवा कुछ भी नहीं<br />
            मेरे कमरे को सजाने की तमन्ना है तुम्हें,<br />
            मेरे कमरे में किताबों के सिवा कुछ भी नहीं<br />
            </p>
            <p className="text-lg text-gray-300">
            Football, Code, poetry.
            </p>

            
            <a href="mailto:ilovemyth9@gmail.com" className="inline-block text-3xl font-bold">
                <div>
                    <h1>Contact</h1>
                </div>
            </a>

        </div>
        <div className="rounded-full overflow-hidden border-2 border-gray-200">
        <Image
          src="/hero.jpg"
          alt="Your Photo"
          width={300}
          height={300}
          className="object-cover"
        />
        </div>
    </div>
  );
}
