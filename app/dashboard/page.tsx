//@ts-nocheck
/* eslint-disable */
//@ts-ignore
"use client";
import React, { useState, ReactNode, useEffect } from "react";
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
import { Label } from "../userform/components/ui/label";
import { Input } from "../userform/components/ui/input";
import axios from "axios";
import { Meteors } from "./information/components/meteors";
import { Logo, LogoIcon, SocialButton, LabelInputContainer } from "./components/Logo";

export default function DashboardPage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/plotimage/", {
          responseType: 'blob'
        });
        const imageUrl = URL.createObjectURL(response.data);
        setImageUrl(imageUrl);
      } catch (error) {
        console.error('Error fetching image', error);
      }
    };
    fetchImageUrl();
  }, []);

  const [open, setOpen] = useState(false);

  

  const [formData, setFormData] = useState({
    start: '',
    stop: '',
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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
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
                label: "Athree50",
                href: "#",
                icon: (
                  <Image
                    src="/images/shipicon.png"
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
{/*         <p>"Patience, our team is working round the clock to make this work!"</p>
 */}          <Image
            src={imageUrl}
            alt="Patience, our team is working round the clock to make this work!"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex items-middle justify-center min-h-screen">
        <div className="relative w-full max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
            <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-2 w-2 text-gray-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </div>

            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Confused by the terms?
            </h1>

            <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
              Dive into the information page and get all the info you need!
            </p>

            <Link
  href="/dashboard/information"
  className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300"
>
  Explore
</Link>

            <Meteors number={20} />
          </div>
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
            <LabelInputContainer>
              <Label htmlFor="start">Start</Label>
              <Input id="start" name="start" placeholder="Your Starting Location [,]" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="stop">Stop</Label>
              <Input id="stop" name="stop" placeholder="Your Destination" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="wd_min">WD_min</Label>
              <Input id="wd_min" name="wd_min" placeholder="Draft of the vessel [lowLoad, highLoad]" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="wvpi">WVPI</Label>
              <Input id="wvpi" name="wvpi" placeholder="Weight of the vessel [withLoad, withoutLoad]" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="wwl">WWL</Label>
              <Input id="wwl" name="wwl" placeholder="Width over water line (in meters)" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="lwl">LWL</Label>
              <Input id="lwl" name="lwl" placeholder="Length over water line (in meters)" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="ukc">UKC</Label>
              <Input id="ukc" name="ukc" placeholder="Under keel clearance (in meters)" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="dx_min">dx_min</Label>
              <Input id="dx_min" name="dx_min" placeholder="Minimal spatial resolution" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="blend">Blend Factor</Label>
              <Input id="blend" name="blend" placeholder="Blend factor" type="text" onChange={handleChange} />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="nl_c">Non-linearity Factor (nl_c, nl_m)</Label>
              <Input id="nl_c" name="nl_c" placeholder="nl_c" type="text" onChange={handleChange} />
              <Input id="nl_m" name="nl_m" placeholder="nl_m" type="text" onChange={handleChange} />
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
