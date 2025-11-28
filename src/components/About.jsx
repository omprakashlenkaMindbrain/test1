import gsap from "gsap";
import { Briefcase, Calendar, Coffee, Globe, Mail, MapPin, Phone, User } from "lucide-react";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import AboutImage from "../assets/WhatsApp Image 2025-02-07 at 6.41.38 PM.jpeg"; // Replace with your image
import Seminar from "../assets/hac.jpg"; // Replace with your seminar image
import Coding from "../assets/iservue.jpeg"; // Replace with your competition image

const personalInfo = [
  { icon: User, label: "Name", value: "Om Prakash Lenka" },
  { icon: Mail, label: "Email", value: "lenkaom.personal@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9178330413" },
  { icon: MapPin, label: "Location", value: "Bhubaneswar" },
  { icon: Globe, label: "Languages", value: "English, Hindi" },
  { icon: Calendar, label: "Birthday", value: "5 May 2005" },
  { icon: Briefcase, label: "Experience", value: "1+ Years" },
  { icon: Coffee, label: "Freelance", value: "Available" }
];

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const tl = gsap.timeline();

      tl.from(titleRef.current, { y: 50, opacity: 0, duration: 1, ease: "power3.out" })
        .from(imageRef.current, { scale: 0.8, opacity: 0, duration: 1.2, ease: "power4.out" }, "-=0.5")
        .from(textRef.current, { x: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .from(".info-item", { y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" }, "-=0.5");

      gsap.to(imageRef.current, {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, [inView]);

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      {/* Background Gradient Effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl font-bold mb-4">Discover My Story</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions and delivering exceptional user experiences.
          </p>
        </div>

        {/* Profile & Bio Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Profile Image */}
          <div ref={imageRef} className="lg:col-span-4 relative group mx-auto max-w-xs sm:max-w-sm md:max-w-md">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <img
              src={AboutImage}
              alt="Profile"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[260px] sm:h-[300px] md:h-[320px] object-cover transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
            />
            {/* Experience Badge */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 sm:px-6 py-2 rounded-full shadow-lg border border-gray-300 dark:border-gray-600 min-w-[140px] sm:min-w-[180px] text-center transition-all duration-300 group-hover:scale-105">
              <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                1+ Years Experience
              </p>
            </div>
          </div>

          {/* Bio & Skills */}
          <div ref={textRef} className="lg:col-span-8 space-y-6">
            <h3 className="text-3xl font-bold leading-tight">
              Building Innovative Software Solutions with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Precision & Passion</span>
            </h3>
            <p className="text-base opacity-80 leading-relaxed">
              I'm a passionate Full Stack Developer with a deep love for creating seamless digital experiences.
              My journey in tech has been driven by curiosity and a relentless pursuit of excellence.
            </p>
            <p>
              I secured the Second Runner-up position in a State-Level Hackathon and also received recognition for the
              "Most Interesting Software Project" among 150 projects at the BPUT Project Mela.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary">Frontend</h4>
                <p className="opacity-80 text-sm">React, Next.js, Angular</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Backend</h4>
                <p className="opacity-80 text-sm">Node.js, Express.js, Nest.js, Java</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Database</h4>
                <p className="opacity-80 text-sm">MongoDB, PostgreSQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary">DevOps</h4>
                <p className="opacity-80 text-sm">AWS, Docker, CI/CD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seminar Project Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Bio & Text */}
          <div ref={textRef} className="lg:col-span-8 space-y-6 order-2 lg:order-1">
            <h3 className="text-3xl font-bold leading-tight">
              Built Innovative Software Solutions For My College To Handle 150 Students{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">over a day</span>
            </h3>
            <p className="text-base opacity-80 leading-relaxed">
              I built a dedicated website for my college to manage seminar topic submissions for over 150 students.
              The platform allowed students to find and submit seminar topics along with their and their partner’s names.
              I compiled and organized the data, then shared it with our Head of Department, who appreciated the effort.
              This platform is now actively used by juniors for streamlined seminar management.
            </p>
          </div>

          {/* Image */}
          <div ref={imageRef} className="lg:col-span-4 relative group mx-auto max-w-xs sm:max-w-sm md:max-w-md order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <img
              src={Seminar}
              alt="Seminar Project"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[260px] sm:h-[300px] md:h-[320px] object-cover transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
            />
            {/* Badge */}
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 sm:px-6 py-2 rounded-full shadow-lg border border-gray-300 dark:border-gray-600 min-w-[140px] sm:min-w-[180px] text-center transition-all duration-300 group-hover:scale-105">
              <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Problem Solver
              </p>
            </div>
          </div>
        </div>

        {/* ISERVUE Coding Competition Section */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Image on the left */}
          <div ref={imageRef} className="lg:col-span-4 relative group mx-auto max-w-xs sm:max-w-sm md:max-w-md order-1 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-30 rounded-2xl transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <img
              src={Coding}
              alt="Coding Competition"
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[260px] sm:h-[300px] md:h-[320px] object-cover transform group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-4 sm:px-6 py-2 rounded-full shadow-lg border border-gray-300 dark:border-gray-600 min-w-[140px] sm:min-w-[180px] text-center transition-all duration-300 group-hover:scale-105">
              <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Finalist – Algorithmic Coding
              </p>
            </div>
          </div>

          {/* Text on the right */}
          <div ref={textRef} className="lg:col-span-8 space-y-6 order-2 lg:order-2">
            <h3 className="text-3xl font-bold leading-tight">
              Selected as a Finalist in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ISERVUE Coding Competition
              </span>
            </h3>

            <p className="text-base opacity-80 leading-relaxed">
              I was selected as a Finalist in the ISERVUE Coding Competition, a challenging algorithm-based contest. I built an optimized solution using{" "}
              <span className="font-semibold text-primary">MQTT-based message flow</span>
              and implemented a <span className="font-semibold text-primary">Priority Queue</span>
              to manage real-time event ordering.
            </p>

            <p className="text-base opacity-80 leading-relaxed">
              The problem required deep understanding of algorithms, message sequencing, queue optimization, and time-based dispatching. My solution was recognized for its clarity, performance, and architectural depth.
            </p>
          </div>
        </div>


        {/* Personal Info Grid */}
        <div ref={infoRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-4">
          {personalInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="info-item group">
                <div className="relative overflow-hidden rounded-xl p-4 bg-white/5 dark:bg-gray-800/50 border border-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium opacity-60 mb-0.5">{item.label}</h4>
                      <p className="font-semibold text-sm">{item.value}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
