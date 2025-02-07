import gsap from 'gsap';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import nextCart from "../assets/cart.png";
import EvntMngmnt from "../assets/databhd.png";
import TalkMate from "../assets/image4.png";
import SwasthySetu from "../assets/WhatsApp Image 2025-02-07 at 5.34.35 PM.jpeg";
import AetherAi from "../assets/WhatsApp Image 2025-02-07 at 5.37.44 PM.jpeg";
import SkyCast from "../assets/WhatsApp Image 2025-02-07 at 5.57.19 PM.jpeg";

const projects = [
  {
    title: "Swasthya Setu – AI-Driven Healthcare & Emergency Response Platform 🏥🚑",
    description: "Developed a comprehensive platform integrating AI-driven emergency response, blood donation services, and real-time accident tracking on a map using the shortest path algorithm (Hexagon Tech).",
    image: SwasthySetu,
    tags: ["React", "Node.js", "MongoDb", "Leaflet Api", "Gemini Api"],
    github: "#",
    live: "#"
  },
  {
    title: "Aether AI – Your Intelligent Digital Assistant 🤖✨",
    description: "Developed an AI-driven platform integrating Google Gemini API for advanced ML functionalities.",
    image: AetherAi,
    tags: ["Node.js", "React", "ML Model", "Gemeni Api"],
    github: "#",
    live: "#"
  },
  {
    title: "TalkMate - Secure Real-Time Chat Application 💬🔒",
    description: " Built a real-time chat application with seamless messaging, user authentication, and end-to-end encryption, ensuring secure and instant communication.",
    image: TalkMate,
    tags: ["React", "Node.js", "Express.js", "MongoDb", "Socket.io", "gsap"],
    github: "#",
    live: "#"
  },
  {
    title: "NextCart - Seamless Shopping Experience 🛒🚀",
    description: "NextCart is a modern e-commerce platform built for a fast, secure, and user-friendly shopping experience. With real-time product updates, seamless checkout, and AI-driven recommendations, NextCart enhances online shopping for both customers and businesses.",
    image: nextCart,
    tags: ["Next.js", "Express.js", "Node.js", "MongoDb", "TailWind.css"],
    github: "#",
    live: "#"
  },
  {
    title: "GoBus - Real-Time Bus Tracking & Booking App 🚌📍",
    description: "Developed a real-time bus tracking and ticket booking application, allowing users to track buses on a live map, book tickets seamlessly, and receive real-time updates for a hassle-free travel experience.",
    image: "https://ticketsmm.com/images/24_7/02.jpg",
    tags: ["Next.js", "Tailwind.css", "Express.js", "MongoDb", "Socket.io", "gsap"],
    github: "#",
    live: "#"
  },
  {
    title: "Online Event Management – Streamline & Elevate Your Events 🎉📅",
    description: "Built a comprehensive event management platform enabling users to create, manage, and book events seamlessly. Integrated real-time notifications, ticketing system, and user authentication for a smooth experience.",
    image: EvntMngmnt,
    tags: ["React", "FireBase", "css"],
    github: "#",
    live: "#"
  },
  {
    title: "SkyCast – Your Smart Weather Companion ☁️🌦️🌍",
    description: "SkyCast is an intelligent weather application designed to provide real-time forecasts, precise climate insights, and interactive weather tracking. Whether you're planning your day or tracking severe weather conditions . ",
    image: SkyCast,
    tags: ["React", "Express.js", "Node.js"],
    github: "#",
    live: "#"
  },
];

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
      });
    }
  }, [inView]);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-900 text-white">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projects.map((project, index) => (
            <div key={index} className="project-card group flex justify-center">
              <div className="relative overflow-hidden rounded-lg shadow-lg w-full sm:w-[350px] h-[450px] bg-white/5 dark:bg-gray-800/50 backdrop-blur-md">

                {/* Image with hover & click effect */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-active:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col justify-between h-[calc(450px-192px)]">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Overlay for Links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a href={project.github} className="text-white hover:text-primary mx-2">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href={project.live} className="text-white hover:text-primary mx-2">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Button for More Projects */}
        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary/80 transition duration-300"
          >
            <Github className="w-6 h-6" />
            For More, Click
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
