import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  coursework: string[];
}

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const education: Education[] = [
    {
      id: 1,
      institution: 'Vidyavardhini College of Engineering and Technology, Vasai',
      degree: 'B.E. Computer Engineering',
      duration: 'August 2022 - Expected June 2026',
      grade: 'CGPA: 8.5/10',
      coursework: [
        'Data Structures and Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Web Development',
        'Machine Learning',
        'Computer Networks',
        'Operating Systems'
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
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Education</SectionTitle>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto mt-12"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={item}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex justify-center">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-1">
                    {edu.institution}
                  </h4>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-6">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {edu.duration}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {edu.grade}
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="text-md font-semibold text-slate-800 dark:text-slate-200 mb-3">
                      Relevant Coursework:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, index) => (
                        <span 
                          key={index} 
                          className="text-sm bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300 px-3 py-1 rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;