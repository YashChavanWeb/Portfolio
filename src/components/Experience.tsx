import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

const Experiences: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences: Experience[] = [
    {
      id: 1,
      company: 'Aspiring Solutions Pvt. Ltd.',
      role: 'Software Development Intern',
      duration: 'May 2023 - August 2023',
      responsibilities: [
        'Developed and maintained web applications using React.js and Node.js',
        'Collaborated with the design team to implement responsive UI components',
        'Optimized application performance by 25% through code refactoring',
        'Participated in daily stand-ups and sprint planning meetings',
        'Implemented unit tests using Jest to ensure code quality'
      ],
    },
    {
      id: 2,
      company: "Microsoft's MLSC",
      role: 'Technical Lead',
      duration: 'September 2022 - Present',
      responsibilities: [
        'Organized and conducted technical workshops on AI/ML technologies',
        'Led a team of 5 developers to create educational projects',
        'Mentored junior members in web development and machine learning concepts',
        'Coordinated with other technical clubs for collaborative events',
        'Created documentation and learning resources for community members'
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Work Experience</SectionTitle>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto mt-12 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-slate-700 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={item}
              className={`mb-12 md:mb-0 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2 relative">
                {/* Timeline dot */}
                <div className={`absolute top-0 ${
                  index % 2 === 0 ? 'md:-left-4' : 'md:-right-4'
                } left-0 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center z-10`}>
                  <Briefcase size={16} className="text-white" />
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:mr-8 ${
                  index % 2 === 0 ? 'md:ml-8 md:mr-0' : ''
                } p-6 bg-slate-50 dark:bg-slate-700 rounded-lg shadow-md`}>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    {exp.duration}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for timeline layout */}
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;