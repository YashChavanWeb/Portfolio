import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, ExternalLink } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './common/SectionTitle';

interface Project {
  id: number;
  title: string;
  description: string[];
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  certificateUrl?: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Legal Mitra',
      description: [
        'Developed a comprehensive legal services platform connecting users with lawyers',
        'Implemented secure user authentication and role-based access',
        'Created an intuitive appointment scheduling system',
        'Built document management with secure storage and sharing capabilities'
      ],
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'Scorezy (PEAMT)',
      description: [
        'Created an AI-powered educational assessment platform',
        'Implemented automatic grading for programming assignments',
        'Developed real-time analytics dashboard for instructors',
        'Built plagiarism detection using advanced NLP techniques'
      ],
      techStack: ['Python', 'React', 'TensorFlow', 'FastAPI', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/4050330/pexels-photo-4050330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      githubUrl: '#',
      liveUrl: '#',
      certificateUrl: '#'
    },
    {
      id: 3,
      title: 'DocuLens',
      description: [
        'Built a document analysis system with OCR capabilities',
        'Implemented summarization using transformer models',
        'Created intelligent search functionality across documents',
        'Developed visualization tools for document insights'
      ],
      techStack: ['Next.js', 'PyTorch', 'Express', 'AWS', 'Docker'],
      image: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      githubUrl: '#',
      liveUrl: '#'
    }
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
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle>Featured Projects</SectionTitle>
        
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="h-full w-full bg-black/30 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="list-disc pl-5 mb-6 space-y-1 text-slate-700 dark:text-slate-300">
                  {project.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white font-medium transition-colors text-sm"
                    >
                      <GitHub size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                  
                  {project.certificateUrl && (
                    <a
                      href={project.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 py-2 px-4 rounded-lg bg-secondary-500 hover:bg-secondary-600 text-white font-medium transition-colors text-sm"
                    >
                      <span>Certificate</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;