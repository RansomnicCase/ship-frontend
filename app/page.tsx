"use client";
import {FlipWords} from "./home/components/ui/flip-words";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./home/components/ui/aurora-background";
import { useRouter } from "next/navigation";
import {LinkPreview} from "./home/components/ui/link-preview";

export default function LandingPage(): React.JSX.Element {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };
  const words = ["cool?", "cute?", "aesthetic?",];

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          You probably clicked on this because I seemed
          <FlipWords words={words} />
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Haha, NO.
        </div>
        <br />
        <br />
        
        
        <LinkPreview url="https://cannizzaro.vercel.app/home" className="font-bold lg:text-2xl text-gray-700">
          get to know me
        </LinkPreview>
          
          
        
      </motion.div>
    </AuroraBackground>
  );
}








