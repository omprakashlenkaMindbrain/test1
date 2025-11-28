import gsap from 'gsap';
import { Briefcase, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: "React & React Native Developer / Full Stack Lead",
    company: "Mindbrain",
    period: "Nov 2025 - Present",
    description:
      "Currently working as a Full Stack Developer where I lead a team and manage the complete development lifecycle of a large-scale project. Following Agile methodology, I oversee frontend, backend, database, and deployment workflows. Developed a fully functional e-commerce mobile application using React Native, managing global states efficiently with Jotai/Signal. Built complete dashboards for LMS and HMS systems using React and Tailwind, implementing clean architecture and state management through useContext and Reducer. Ensuring high code quality, smooth team coordination, and production-ready delivery across all modules.",
    skills: ["React", "React Native", "Node.js", "Express", "MongoDB", "JWT", "Team Leadership", "API Architecture", "Deployment-Hostinger"]
  },
  {
    title: "Junior Full Stack Developer",
    company: "StudentsBoat Pvt. Ltd",
    period: "Jul 2024 - Feb 2025",
    description:
      "Developed full-stack components, improved performance, and contributed to scalable application architecture while collaborating with cross-functional teams.",
    skills: ["React", "Node.js", "AWS", "Socket.io"]
  },
  {
    title: "Frontend Developer Intern",
    company: "MotionCut",
    period: "Jan 2024 - Aug 2024",
    description:
      "Developed responsive web applications using React and TypeScript; improved UI performance by 40%.",
    skills: ["React", "Tailwind.css", "useContext", "GSAP"]
  }
];

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      gsap.from(".experience-item", {
        opacity: 0,
        duration: 1.2,
        stagger: 0.25,
        ease: "power3.out",
        y: 80
      });

      gsap.from(".experience-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power3.out"
      });
    }
  }, [inView]);

  return (
    <section id="experience" className="min-h-screen py-24 px-4 relative">
      <div ref={ref} className="max-w-6xl mx-auto relative">

        <h2 className="section-title text-center mb-20">Professional Experience</h2>

        {/* Timeline vertical line */}
        <div className="experience-line absolute left-1/2 top-36 bottom-12 w-[3px] bg-gradient-to-b from-primary to-secondary opacity-30 hidden md:block" />

        <div className="space-y-20 relative">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-item flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-10 items-center relative`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30" />
              </div>

              {/* Experience Card */}
              <div className={`w-full md:w-1/2`}>
                <div className={`
                    card group rounded-2xl p-6 backdrop-blur-xl 
                    bg-white/10 dark:bg-gray-800/40 
                    hover:bg-white/20 dark:hover:bg-gray-800/60 
                    transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.15)]
                    border border-white/10
                  `}
                >
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:opacity-90">
                    {exp.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 text-lg opacity-90">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4 text-sm opacity-80">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-base opacity-90 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty side space to keep alternate layout balanced */}
              <div className="w-full md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
