"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { IconBrandTabler } from "@tabler/icons-react";

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-3 items-center text-xl"
    >
      <IconBrandTabler />
      <span>RahGuzar</span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link href="#" className="flex justify-center">
      <IconBrandTabler />
    </Link>
  );
};

export interface SocialButtonProps {
  icon: ReactNode;
  label: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ icon, label }) => (
  <button
    className="w-full flex items-center justify-center space-x-2 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
    type="button"
  >
    {icon}
    <span>{label}</span>
  </button>
);

export const LabelInputContainer: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="space-y-1">{children}</div>
); 