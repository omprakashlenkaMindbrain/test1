import gsap from 'gsap';
import { Code2, Database, Globe, Layout, Server, Terminal } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with modern frameworks",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    color: "from-[#FF6B6B] to-[#FF8E8E]"
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust and scalable server-side applications",
    skills: ["Node.js", "Python", "Nest.js", "Express.js"],
    color: "from-[#4ECDC4] to-[#6EE7DE]"
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    color: "from-[#45B7D1] to-[#6BC9DE]"
  },
  {
    icon: Globe,
    title: "DevOps",
    description: "Implementing CI/CD pipelines and cloud infrastructure",
    skills: ["Docker", "AWS", "Kubernetes", "Jenkins"],
    color: "from-[#9B5DE5] to-[#B07EFF]"
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Designing and optimizing database architectures",
    skills: ["MongoDB", "PostgreSQL"],
    color: "from-[#F15BB5] to-[#F587C3]"
  },
  {
    icon: Terminal,
    title: "System Architecture",
    description: "Designing scalable and maintainable system architectures",
    skills: ["Microservices", "API Design", "System Design", "Cloud Architecture"],
    color: "from-[#FF9F1C] to-[#FFB347]"
  },
  // {
  //   icon: Smartphone,
  //   title: "Mobile Development",
  //   description: "Developing cross-platform mobile applications",
  //   skills: ["React Native", "Flutter", "iOS", "Android"],
  //   color: "from-[#96C93D] to-[#AAD65C]"
  // },
  // {
  //   icon: Cpu,
  //   title: "Testing & QA",
  //   description: "Ensuring software quality through comprehensive testing",
  //   skills: ["Jest", "Cypress", "TDD", "E2E Testing"],
  //   color: "from-[#2EC4B6] to-[#3FDECF]"
  // }
];

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const titleRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(".skill-card", {
        scale: 0.8,
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)"
      });
    }
  }, [inView]);

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      {/* Enhanced background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full filter blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 rounded-full filter blur-[120px] animate-pulse delay-1000"></div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <div ref={titleRef} className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            My Skills
          </span>
          <h2 className="section-title mb-4">Technical Expertise</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={index} 
                className="skill-card group"
              >
                <div className="relative overflow-hidden rounded-2xl h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative p-6 backdrop-blur-lg bg-white/5 dark:bg-gray-800/50 border border-white/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-2.5 mb-6`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                    <p className="text-sm opacity-80 mb-6 flex-grow">{skill.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((item, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${skill.color} bg-opacity-10 text-white/90`}
                        >
                          {item}
                        </span>
                      ))}
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

export default Skills;
