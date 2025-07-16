import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiHtml5,
  SiCss3, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit,
  SiDocker, SiJenkins, SiAws, SiPython, SiTensorflow, SiPytorch,
  SiJava, SiCplusplus, SiC
} from 'react-icons/si';
import SectionTitle from './common/SectionTitle';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: <SiReact className="w-12 h-12" />, category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12" />, category: 'Frontend' },
    { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12" />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" />, category: 'Frontend' },
    { name: 'HTML/CSS', icon: <SiHtml5 className="w-12 h-12" />, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12" />, category: 'Backend' },
    { name: 'Express', icon: <SiExpress className="w-12 h-12" />, category: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" />, category: 'Backend' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12" />, category: 'Backend' },
    
    // DevOps
    { name: 'Git', icon: <SiGit className="w-12 h-12" />, category: 'DevOps' },
    { name: 'Docker', icon: <SiDocker className="w-12 h-12" />, category: 'DevOps' },
    { name: 'Jenkins', icon: <SiJenkins className="w-12 h-12" />, category: 'DevOps' },
    { name: 'AWS', icon: <SiAws className="w-12 h-12" />, category: 'DevOps' },
    
    // AI/ML
    { name: 'Python', icon: <SiPython className="w-12 h-12" />, category: 'AI/ML' },
    { name: 'TensorFlow', icon: <SiTensorflow className="w-12 h-12" />, category: 'AI/ML' },
    { name: 'PyTorch', icon: <SiPytorch className="w-12 h-12" />, category: 'AI/ML' },
    
    // Languages
    { name: 'Java', icon: <SiJava className="w-12 h-12" />, category: 'Languages' },
    { name: 'C++', icon: <SiCplusplus className="w-12 h-12" />, category: 'Languages' },
    { name: 'C', icon: <SiC className="w-12 h-12" />, category: 'Languages' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Technical Skills</SectionTitle>
        
        <div ref={ref} className="max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200">
                {category}
              </h3>
              
              <motion.div
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 dark:bg-slate-700 hover:shadow-lg transition-shadow"
                    >
                      <div className="text-primary-600 dark:text-primary-400 mb-3">
                        {skill.icon}
                      </div>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;