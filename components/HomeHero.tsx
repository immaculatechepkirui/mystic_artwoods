"use client";
import { useState } from "react";

// YOU CAN USE CSS MODULE FOR FONT WEIGHTS IF NEEDED (not required for demo).
// You can also include the font links in your document head as previously described.

export default function HomeHero() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bed.jpg" // CHANGE TO YOUR BG
          alt="Mystic ArtWoods Hero"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-14 py-8">
        <a href="#home" className="flex items-end gap-1 text-3xl text-white font-serif font-extrabold tracking-widest">
          Mystic Woodwork
          <span className="text-blue-400 text-5xl" style={{lineHeight:0}}>.</span>
        </a>
        <div className="hidden md:flex gap-12 text-sm uppercase text-white tracking-wider font-light">
          <a href="#home" className="hover:text-blue-300 transition">Home</a>
          <a href="#about" className="hover:text-blue-300 transition">About</a>
          <a href="#services" className="hover:text-blue-300 transition">Services</a>
          <a href="#gallery" className="hover:text-blue-300 transition">Work</a>
        </div>
        <a href="#contact" className="hidden md:inline px-6 py-2 border border-blue-200 text-blue-200 hover:bg-blue-200 hover:text-black transition rounded tracking-widest uppercase font-bold text-xs" style={{letterSpacing:"0.1em"}}>
          Contact Us
        </a>
        {/* Mobile menu button (optional, can add dropdown logic) */}
      </nav>

      {/* Hero Content */}
      <div className="relative flex flex-1 flex-col items-center justify-center z-10 mt-12 md:mt-0 text-center">
        <p className="uppercase text-sm tracking-widest text-blue-200 font-medium mb-4" style={{letterSpacing: "0.15em"}}>
          Crafting Nature’s Elegance into Artful Living
        </p>
        <h1 className="text-white font-serif font-bold text-[3rem] sm:text-[5rem] md:text-[7rem] leading-none mb-2 drop-shadow-lg">
          Build <span className="text-blue-400 italic font-bold">Artful</span><br />
          <span className="">Living Spaces</span>
        </h1>
        <p className="text-white/90 text-lg sm:text-xl max-w-xl mx-auto mb-8 font-sans font-light drop-shadow">
          Transforming the Beauty of Nature into Inspired Living Spaces: Elevate Your Home Experience with Artful Design That Celebrates the Essence of the Outdoors.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#services"
            className="bg-white text-blue-900 font-semibold uppercase tracking-widest px-8 py-4 rounded shadow-lg text-base font-sans hover:bg-blue-100 transition-all"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="border border-blue-200 text-blue-200 px-8 py-4 rounded font-semibold uppercase tracking-widest text-base font-sans hover:bg-blue-200 hover:text-black bg-opacity-80 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}