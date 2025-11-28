import { motion, useScroll, useTransform } from 'framer-motion';
import { Braces, Code2, Globe, Laptop } from 'lucide-react';
import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Profile from "../assets/WhatsApp Image 2025-02-07 at 6.32.32 PM.jpeg";

// Dynamic data for description cards
const heroData = {
  name: "Om Prakash Lenka",
  subtitleSequence: [
    "Full Stack Developer",
    2000,
    "Problem Solver",
    2000,
    "Tech Enthusiast",
    2000,
  ],
  cards: [
    { value: "1+", label: "Years Experience" },
    { value: "50+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
  ],
  email: "lenkaom.personal@gmail.com",
};

function Hero() {
  const containerRef = useRef(null);
  const profileRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  // Parallax effect for background
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Enhanced background gradients with parallax */}
      <motion.div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full filter blur-[120px] animate-pulse"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full filter blur-[120px] animate-pulse delay-1000"
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-full filter blur-[80px] animate-pulse"
          style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]) }}
        />
      </motion.div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        {/* Profile Section */}
        <motion.div
          ref={profileRef}
          className="relative mb-12 md:mb-16"
          style={{ marginTop: "50px" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 opacity-40" />
            <div className="relative rounded-full p-2 bg-gradient-to-r from-primary to-secondary">
              <div className="relative rounded-full overflow-hidden w-44 h-44 md:w-52 md:h-52 bg-gray-900">
                <motion.img
                  src={Profile}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Floating Icons with Dynamic Animation */}
          {[
            { Icon: Code2, position: "-top-6 -right-6", color: "text-primary" },
            { Icon: Laptop, position: "-bottom-4 -left-6", color: "text-secondary" },
            { Icon: Braces, position: "top-0 -left-8", color: "text-primary" },
            { Icon: Globe, position: "-bottom-8 right-0", color: "text-secondary" },
          ].map(({ Icon, position, color }, index) => (
            <motion.div
              key={index}
              className={`floating-icon absolute ${position} p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20`}
              animate={floatAnimation}
              transition={{ ...floatAnimation.transition, delay: index * 0.2 }}
            >
              <Icon className={`w-6 h-6 ${color}`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Content Section */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <motion.h1
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%] animate-gradient"
            variants={fadeInUp}
          >
            {heroData.name}
          </motion.h1>
          <motion.p
            ref={subtitleRef}
            className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-10"
            variants={fadeInUp}
          >
            <TypeAnimation
              sequence={heroData.subtitleSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.p>

          {/* Dynamic Description Cards */}
          <motion.div
            ref={descriptionRef}
            className="flex flex-wrap justify-center gap-6 mb-8"
            variants={fadeInUp}
          >
            {heroData.cards.map((card, index) => (
              <motion.div
                key={index}
                className="group px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 cursor-default"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-primary font-bold text-lg group-hover:text-secondary transition-colors duration-300">
                  {card.value}
                </span>
                <span className="ml-2 text-base">{card.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex justify-center gap-6 mt-6"
            variants={fadeInUp}
          >
            <a
              href={`mailto:${heroData.email}`}
              className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/80 transition-all"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-transparent border border-primary text-primary rounded-xl hover:bg-primary/10 transition-all"
            >
              View Projects
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;