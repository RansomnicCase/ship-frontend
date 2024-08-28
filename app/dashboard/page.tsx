"use client";
import React, { useState, ReactNode } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./components/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandDiscord,
  } from "@tabler/icons-react";
  import { Label } from "../userform/components/ui/label";
  import { Input } from "../userform/components/ui/input";
 
export default function SidebarDemo() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
      };
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className="flex h-screen w-screen overflow-hidden" // for your use case, use `h-screen` instead of `h-[60vh]`
      
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "galacstezia",
                href: "#",
                icon: (
                  <Image
                    src="/hero.jpg"
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <div className="w-3/5 p-4 bg-gray-100 dark:bg-gray-900 flex items-center justify-center"><div className="w-3/4 h-3/4 relative">
    <img
      src="https://via.placeholder.com/800x600"
      alt="Map Placeholder"
      className="absolute inset-0 w-full h-full object-contain"
    />
  </div>
  </div>

        {/* Right side for the form */}
        <div className="w-2/5 flex items-center justify-center bg-white dark:bg-black p-8">
          <div className="w-full max-w-md">
            <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-2">
              Welcome to Garuda
            </h2>
            <p className="text-neutral-600 text-sm mb-8 dark:text-neutral-300">
              Let&apos;s get you signed up; we hope you are no bot from a Bangladesh bot farm!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex space-x-4">
                <LabelInputContainer className="w-1/2">
                <select id="firstname" className="w-full">
                    <option value="">Select a ship</option>
                    <option value="ship1">ship1</option>
                    <option value="ship2">ship2</option>
                    <option value="ship3">ship3</option>
                </select>
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Agnihotri" type="text" />
                </LabelInputContainer>
              </div>
              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="wedetecbots@gmail.com" type="email" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="garudacredentials">Your Garuda ID</Label>
                <Input id="garudacredentials" placeholder="••••••••" type="password" />
              </LabelInputContainer>

              <button
                className="w-full bg-black text-white rounded-md py-2 font-medium hover:bg-gray-800 transition-colors"
                type="submit"
              >
                Sign up →
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="space-y-4">
                <SocialButton icon={<IconBrandGithub />} label="GitHub" />
                <SocialButton icon={<IconBrandGoogle />} label="Google" />
                <SocialButton icon={<IconBrandDiscord />} label="Discord" />
              </div>
            </form>
          </div>
        </div>
      </div>
    
  );
}
interface SocialButtonProps {
  icon: ReactNode;
  label: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({ icon, label }) => (
  <button
    className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
    type="button"
  >
    {icon}
    <span>{label}</span>
  </button>
);
export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
 



const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      </>
    );
  };
  
  const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2", className)}>
        {children}
      </div>
    );
  };
  
  const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };