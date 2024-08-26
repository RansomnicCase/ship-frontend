"use client";
import {FlipWords} from "./home/components/ui/flip-words";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./home/components/ui/aurora-background";
import { useRouter } from "next/navigation";
import {LinkPreview} from "./home/components/ui/link-preview";
import { Cover } from "./home/components/ui/cover";
import { SparklesCore } from "./home/components/ui/sparkles";

export default function LandingPage(): React.JSX.Element {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };
  const words = ["cool", "cute", "aesthetic",];

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
    <div>
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Meet Garuda<br/>
        
      </h1>
      <h2 className="text-4xl md:text-2xl lg:text-4xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>Soar</Cover> beyond Captchas
      </h2>
    </div>
        <br />
        <br />
        
        
        
        <LinkPreview url="https://cannizzaro.vercel.app/home" className="font-bold lg:text-2xl text-gray-700">
          Explore more
        </LinkPreview>
        <div onClick={handleClick}>home</div>
        
          
          
        
      </motion.div>
    </AuroraBackground>
  );
}








