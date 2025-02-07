import { ArrowRight, Briefcase, Code2, FolderGit2, GraduationCap, Mail, Menu, User, X } from "lucide-react";
import { useState } from "react";


const navItems = [
  { name: "About", icon: User },
  { name: "Skills", icon: Code2 },
  { name: "Experience", icon: Briefcase },
  { name: "Projects", icon: FolderGit2 },
  { name: "Contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full p-6 z-50 backdrop-blur-lg bg-black/20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            <a href={`#`}>
            #Learner
            </a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 
              transition-all duration-300 ${isOpen ? "rotate-45 scale-90" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <Menu className={`w-6 h-6 text-white transition-all duration-300 ${isOpen ? "scale-0" : "scale-100"}`} />
            {/* <div className={`w-6 h-1 bg-white mt-1 transition-all duration-300 ${isOpen ? "rotate-90 -mt-1" : ""}`} /> */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full-Screen Popup) */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center z-[60] min-h-screen px-6 transform transition-all duration-500 
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 -translate-y-10 pointer-events-none"}`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl animate-pulse delay-300" />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col items-center w-full px-6 gap-5 z-10">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className={`group flex items-center justify-between w-72 h-14 px-4 rounded-lg bg-white/10 backdrop-blur-lg shadow-md 
                  transition-all duration-700 ease-in-out transform 
                  ${isOpen ? `opacity-100 scale-100 rotate-0 translate-y-0 delay-[${index * 150}ms]` : "opacity-0 scale-50 rotate-12 translate-y-10"}
                  hover:rotate-3 hover:scale-105 hover:bg-white/20`}
                onClick={() => setIsOpen(false)}
              >
                {/* Icon */}
                <div className="p-3 rounded-lg bg-white/5 transition-all duration-300 group-hover:scale-125 group-hover:rotate-[10deg]">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Rotating Arrow */}
                <ArrowRight className="w-6 h-6 text-white opacity-60 transition-all duration-300 
                  group-hover:text-primary group-hover:translate-x-1 animate-spinSlow" />

                {/* Text */}
                <span className="text-white text-lg font-semibold transition-all 
                  group-hover:text-primary group-hover:scale-110">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Close Button */}
        <button
          className="absolute top-6 right-6 p-3 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all 
            duration-300 hover:rotate-180 hover:scale-125 animate-spinSlow"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8 text-white transition-all" />
        </button>

        {/* Footer */}
        <div className="absolute bottom-6 text-center text-white/60 text-sm transition-all duration-500 ease-in-out animate-pulse">
          <p className="tracking-wide">© 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
