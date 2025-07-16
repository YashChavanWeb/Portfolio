import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github as GitHub, Linkedin, Download, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-slate-800 dark:text-white">
              Yash Chetan Chavan
            </h1>
            <div className="text-xl md:text-2xl font-medium text-primary-600 dark:text-primary-400 h-12">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'AI & ML Enthusiast',
                  1000,
                  'DevOps Explorer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium transition-colors duration-300"
            >
              <GitHub size={18} />
              <span>GitHub</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium transition-colors duration-300"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-medium transition-colors duration-300"
            >
              <ExternalLink size={18} />
              <span>LeetCode</span>
            </a>
            <a
              href="#"
              download
              className="inline-flex items-center gap-2 py-2.5 px-6 rounded-full bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors duration-300"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            className="relative max-w-4xl mx-auto p-8 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl"
          >
            <p className="text-lg md:text-xl text-center leading-relaxed">
              I'm a <span className="font-bold text-primary-600 dark:text-primary-400">passionate developer</span> and{' '}
              <span className="font-bold text-secondary-600 dark:text-secondary-400">problem solver</span> pursuing Computer Engineering at VCET, Vasai. With a focus on{' '}
              <span className="font-bold text-accent-600 dark:text-accent-400">full-stack development</span>, I love building{' '}
              <span className="font-bold text-primary-600 dark:text-primary-400">innovative solutions</span> that make a difference. My expertise spans{' '}
              <span className="font-bold text-secondary-600 dark:text-secondary-400">web technologies</span>,{' '}
              <span className="font-bold text-accent-600 dark:text-accent-400">AI/ML</span>, and{' '}
              <span className="font-bold text-primary-600 dark:text-primary-400">DevOps practices</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="animate-bounce-slow">
              <div className="w-5 h-10 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center items-start p-1">
                <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;