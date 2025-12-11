"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BackgroundLines } from "@/components/ui/background-lines";

// DESKTOP NAV (Aceternity)
import NavbarMenu from "@/components/ui/navbar-menu";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden font-poppins"
    >
      {/* BG IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center h-200 w-full z-0"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* BACKGROUND LINES */}
      <div className="absolute inset-0 z-10 opacity-[0.35] pointer-events-none">
        <BackgroundLines />
      </div>

      {/* BOTTOM GRADIENT ONLY */}
      <div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20" />

      {/* TOP NAVBAR AREA */}
      <header className="fixed top-0 left-0 w-full z-[60] px-4 md:px-6 py-4 flex items-center justify-between mt-5">

        {/* LOGO */}
        <div className="text-white text-2xl font-medium tracking-wide">
          METRIQUAL
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex justify-center flex-1">
          <NavbarMenu />
        </div>

      
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 border border-white/30 rounded-lg text-white/90 hover:bg-white/10 transition">
            Login
          </button>
          <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition">
            Sign Up
          </button>
        </div>

        
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

      </header>

    
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed md:hidden top-[72px] left-0 w-full bg-black/90 backdrop-blur-xl text-white z-[50] border-b border-white/10 py-6"
          >
            <div className="flex flex-col items-center gap-6 text-lg">
              <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#features" onClick={() => setMobileOpen(false)}>Features</a>
              <a href="#how" onClick={() => setMobileOpen(false)}>How It Works</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>

              <button className="px-4 py-2 border border-white/30 rounded-md w-[80%]">
                Login
              </button>
              <button className="px-4 py-2 bg-orange-600 rounded-md w-[80%]">
                Sign Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

     
      <div className="relative z-30 flex flex-col items-center text-center px-6 mt-44 md:mt-48">

        <h1 className="text-4xl md:text-7xl font-medium max-w-5xl leading-tight text-white">
          The Intelligent <span className="text-orange-500">AI Proxy</span> Platform
        </h1>

        <p className="text-gray-300 text-base md:text-xl max-w-xl md:max-w-2xl mt-4 font-normal">
          Monitor, optimize, and control all your LLM API requests with a unified
          infrastructure layer built for speed and scale.
        </p>

        <button className="mt-6 px-10 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-lg hover:bg-white/20 transition font-medium">
          Read Documentation
        </button>

    
        <div className="w-full flex justify-center mt-6">
          <div className="neon-border rounded-2xl w-[92%] sm:w-[80%] md:w-[55%]">
            <img
              src="/heroimg.png"
              alt="Dashboard"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
