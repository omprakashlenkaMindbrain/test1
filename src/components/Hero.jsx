import { Braces, Code2, Globe, Laptop } from 'lucide-react';
import React, { useRef } from 'react';
import Profile from "../assets/WhatsApp Image 2025-02-07 at 6.32.32 PM.jpeg";

function Hero() {
  const containerRef = useRef(null);
  const profileRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Enhanced background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full filter blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-full filter blur-[80px] animate-pulse" />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        {/* Profile Section */}
        <div ref={profileRef} className="relative mb-12 md:mb-16" style={{ marginTop: "50px" }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-40" />
            <div className="relative rounded-full p-2 bg-gradient-to-r from-primary to-secondary">
              <div className="relative rounded-full overflow-hidden w-44 h-44 md:w-52 md:h-52 bg-gray-900">
                <img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="floating-icon absolute -top-6 -right-6 p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <div className="floating-icon absolute -bottom-4 -left-6 p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
            <Laptop className="w-6 h-6 text-secondary" />
          </div>
          <div className="floating-icon absolute top-0 -left-8 p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
            <Braces className="w-6 h-6 text-primary" />
          </div>
          <div className="floating-icon absolute -bottom-8 right-0 p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
            <Globe className="w-6 h-6 text-secondary" />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 ref={titleRef} className="text-6xl md:text-7xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%] animate-gradient">
            Om Prakash Lenka
          </h1>
          <p ref={subtitleRef} className="text-2xl md:text-2.5xl font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-10">
            Full Stack Developer & Problem Solver
          </p>

          {/* Enhanced Description Cards */}
          <div ref={descriptionRef} className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="group px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 cursor-default">
              <span className="text-primary font-bold text-lg group-hover:text-secondary transition-colors duration-300">1+ Years</span>
              <span className="ml-2 text-base">Experience</span>
            </div>
            <div className="group px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 cursor-default">
              <span className="text-primary font-bold text-lg group-hover:text-secondary transition-colors duration-300">50+</span>
              <span className="ml-2 text-base">Projects Completed</span>
            </div>
            <div className="group px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 cursor-default">
              <span className="text-primary font-bold text-lg group-hover:text-secondary transition-colors duration-300">100%</span>
              <span className="ml-2 text-base">Client Satisfaction</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-6">
            {/* Hire Me Button */}
            <a href="mailto:your-lenkaom.personal@gmail.com" className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/80 transition-all">
              Hire Me
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
