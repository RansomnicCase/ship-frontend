"use client";
import React, { useState, ReactNode, ChangeEvent } from "react";
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

  const [formData, setFormData] = useState({
    wd_min: '',
    wwl: '',
    lwl: '',
    wvpi: '',
    ukc: '',
    dx_min: '',
    blend: '',
    nl_c: '',
    nl_m: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const links = [
    {
      label: "Information",
      href: "/dashboard/information",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
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
    <div className="flex h-screen w-screen overflow-hidden">
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
                label: "GANG",
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
      <div className="w-3/5 p-4 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="w-3/4 h-3/4 relative">
        <Image 
                    src="/images/maproute.jpeg" 
                    alt="Beautiful landscape" 
                    width={800} 
                    height={600} 
                    className="rounded-lg"
                />
        </div>
      </div>

      {/* Right side for the form */}
      <div className="w-2/5 flex items-center justify-center bg-white dark:bg-black p-8">
        <div className="w-full max-w-md">
          <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-2">
            Welcome to Rahguzar
          </h2>
          <p className="text-neutral-600 text-sm mb-8 dark:text-neutral-300">
            Enter the specifications of your ship & let us handle the rest.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex space-x-4">
              {/* <LabelInputContainer className="w-1/2">
                <select id="ship" className="w-full">
                  <option value="">Select a ship</option>
                  <option value="ship1">ship1</option>
                  <option value="ship2">ship2</option>
                  <option value="ship3">ship3</option>
                </select>
              </LabelInputContainer> */}
              
            </div>
            <Link href="/dashboard/information">
              <button
              className="w-full bg-black text-white rounded-md py-2 font-medium hover:bg-gray-800 transition-colors"
              type="button">
  
              Get Information about parameters
              </button>
            </Link>

            <LabelInputContainer>
              <Label htmlFor="WD_min">WD_min</Label>
              <Input id="WD_min" name="wd_min" placeholder="Draft of the vessel [lowLoad, highLoad] " type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="WVPI">WVPI</Label>
              <Input id="WVPI" name="wvpi" placeholder="Weight of the vessel [withLoad, withoutLoad]" type="text" onChange={handleChange}/>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="WWL">WWL</Label>
              <Input id="WWL" name="wwl" placeholder="Width over water line (in meters)" type="text"  onChange={handleChange}/>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="LWL">LWL</Label>
              <Input id="LWL" name="lwl" placeholder="Length over water line (in meters)" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="ukc">UKC</Label>
              <Input id="ukc" name="ukc" placeholder="Under keel clearance (in meters)" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="dx_min">dx_min</Label>
              <Input id="dx_min" name="dx_min" placeholder="Minimal spatial resolution" type="text"  onChange={handleChange}/>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="blend">Blend Factor</Label>
              <Input id="blend" name="blend" placeholder="Blend factor" type="text" onChange={handleChange}/>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="nl_c">Non-linearity Factor (nl_c, nl_m)</Label>
              <Input id="nl_c"  name = "nl_c" placeholder="nl_c" type="text" onChange={handleChange} />
              <Input id="nl_m" name="nl_m" placeholder="nl_m" type="text" onChange={handleChange}/>
            </LabelInputContainer>

            <button
              className="w-full bg-black text-white rounded-md py-2 font-medium hover:bg-gray-800 transition-colors"
              type="submit"
            >
              Submit →
            </button>
            
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
        A350
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
        "text-black dark:text-neutral-200 font-semibold",
        className
      )}
    >
      {children}
    </span>
  );
};