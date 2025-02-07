import gsap from 'gsap';
import { Briefcase, Calendar } from 'lucide-react';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company: "StudentsBoat pvt.ltd",
    period: "2024 - Present",
    description: "Developed and contributed to multiple projects involving both front-end and back-end development. Built scalable and efficient applications while collaborating with cross-functional teams.",
    skills: ["React", "Node.js", "AWS", "Socket.io"]
  },
  {
    title: "Frontend Developer Intern",
    company: "MotionCut",
    period: "Jan(2024) - Aug(2024)",
    description: "Developed responsive web applications using React and TypeScript, improved performance by 40%.",
    skills: ["React", "Tailwind.css", "useContext", "GSAP"]
  },
  {
    title: "Joining Soon...",
    company: "Empty...",
    period: "******",
    description: "blank",
    skills: [""]
  }
];

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      gsap.from(".experience-item", {
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        x: (i) => i % 2 === 0 ? -100 : 100
      });

      gsap.from(".experience-line", {
        scaleY: 0,
        duration: 1.5,
        ease: "power3.out"
      });
    }
  }, [inView]);

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16">Professional Experience</h2>
        
        {/* Timeline line */}
        <div className="experience-line absolute left-1/2 top-[200px] bottom-32 w-1 bg-gradient-to-b from-primary to-secondary opacity-20 hidden md:block" />
        
        <div className="space-y-12 relative">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`experience-item flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary" />
              
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className="card backdrop-blur-lg bg-white/5 dark:bg-gray-800/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 mb-3 text-lg opacity-90">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4 text-sm opacity-80">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-base opacity-90 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Empty div for spacing on alternate sides */}
              <div className="w-full md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
