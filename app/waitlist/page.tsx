"use client";

import React, { useState, FormEvent } from 'react';
import { BackgroundBeams } from "./components/ui/background-beams";

export default function Waitlist() {

const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/join-waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };
  return (
    
    <div className="h-[60rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <BackgroundBeams />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <br />
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          I assure you something huge is coming, do you want to get notified? 
          Join the waitlist today.
        </p>
        <br />
        <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="JohnDoe@gmail.com"
          className="px-4 py-2 rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <div className="flex justify-center items-center">
        
        </div>
      </form>
      {message && <p className="flex justify-center items-center">{message}</p>}
    </div>
        

      <br />
      <br />
      <br />
      </div>
      

      
    </div>
  );
}
