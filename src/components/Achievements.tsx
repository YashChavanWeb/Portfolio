import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, AlignCenterVertical as Certificate } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  type: 'award' | 'hackathon' | 'certificate';
}

const Achievements: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'First Place - State-level Hackathon',
      organization: 'TechFest 2023',
      date: 'October 2023',
      description: 'Developed an AI-powered solution for healthcare accessibility, winning the first place among 50+ teams.',
      type: 'hackathon',
    },
    {
      id: 2,
      title: 'AWS Solutions Architect Associate Certification',
      organization: 'Amazon Web Services',
      date: 'August 2023',
      description: 'Earned certification demonstrating expertise in designing distributed systems on AWS.',
      type: 'certificate',
    },
    {
      id: 3,
      title: 'Dean\'s List Award',
      organization: 'VCET, Vasai',
      date: 'May 2023',
      description: 'Recognized for academic excellence for maintaining a CGPA above 8.5.',
      type: 'award',
    },
    {
      id: 4,
      title: 'TensorFlow Developer Certification',
      organization: 'Google',
      date: 'February 2023',
      description: 'Validated skills in using TensorFlow to develop deep learning models for computer vision and NLP.',
      type: 'certificate',
    },
    {
      id: 5,
      title: 'Second Runner-up - College Innovation Challenge',
      organization: 'IEEE Student Branch',
      date: 'November 2022',
      description: 'Created an IoT-based smart water management system for campus sustainability.',
      type: 'hackathon',
    },
  ];

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

  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return <Award className="w-5 h-5 text-success-500" />;
      case 'hackathon':
        return <Trophy className="w-5 h-5 text-warning-500" />;
      case 'certificate':
        return <Certificate className="w-5 h-5 text-secondary-500" />;
      default:
        return <Award className="w-5 h-5 text-primary-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Achievements & Certifications</SectionTitle>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={item}
              className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {getIcon(achievement.type)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {achievement.organization}
                    </p>
                    <span className="text-slate-400 dark:text-slate-500">•</span>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {achievement.date}
                    </p>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;