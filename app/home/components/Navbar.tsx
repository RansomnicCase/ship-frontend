import React from 'react';
import { SiInstagram, SiSpacemacs, SiSpotify, SiX } from 'react-icons/si';


export default function Navbar() {
    const socials = [
        {
            link: "https://x.com/Arnold_Shawrma",
            label : "X",
            Icon: SiX,
        },
        {
            link: "https://www.instagram.com/acheandallegory?igsh=MWo1emxncTQ1N2lqdg%3D%3D&utm_source=qr",
            label : "instagram",
            Icon: SiInstagram,
        },
        {
            link: "https://open.spotify.com/user/31ql2eolp7xp7wqezl7rhntnsdsu?si=2ff4WPfEQwKe6v9zEdQKEg",
            label : "spotify",
            Icon: SiSpotify,
        }
    ];

    return (
        <nav className="py-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-red-500">Garuda 🦅</h1>
            <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                    const Icon = social.Icon;
                    return (
                        <a href={social.link} key={index} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                            <Icon className="w-5 h-5 hover:scale-150 transition-all hover:text-red-300"/>
                        </a>
                    );
                })}
            </div>
        </nav>
    );
}
