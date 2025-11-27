import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      date: 'July 2025',
      description: 'Full-stack e-commerce platform with secure payment integration and comprehensive admin panel for managing products, orders, and tracking real-time transactions.',
      tech: ['React', 'Node.js', 'MySQL', 'PhonePe SDK'],
      features: ['Admin Panel', 'Real-time Tracking', 'Secure Payments', 'Product Management'],
      images: [
        '/assets/projects/ecommerce1.png',
        '/assets/projects/ecommerce2.png',
        '/assets/projects/ecommerce3.png'
      ],
      repoLink: 'https://github.com/swetha14cse/ecommerce',
      demoLink: '#'
    },
    {
      title: 'LegalAI – Case Prediction & Summarization',
      date: 'March 2025',
      description: 'AI-powered web tool for lawyers to predict and summarize court judgments with visual analytics and comprehensive case data storage.',
      tech: ['React', 'Flask', 'HuggingFace', 'MongoDB'],
      features: ['AI Predictions', 'Case Summarization', 'Visual Analytics', 'Data Storage'],
      images: [
        '/assets/projects/legalai1.png',
        '/assets/projects/legalai2.png',
        '/assets/projects/legalai3.png'
      ],
      repoLink: 'https://github.com/swetha14cse/legalai',
      demoLink: '#'
    },
    {
      title: 'Hackathon Activity Tracker',
      date: 'August 2025',
      description: 'Real-time tracking system enabling students to register for events, view deadlines, and track participation. Admins can monitor registrations and manage records efficiently.',
      tech: ['React', 'Flask', 'SQL'],
      features: ['Student Registration', 'Admin Dashboard', 'Deadline Tracking', 'Data Filtering'],
      images: [
        '/assets/projects/hackathon1.png',
        '/assets/projects/hackathon2.png',
        '/assets/projects/hackathon3.png'
      ],
      repoLink: 'https://github.com/swetha14cse/hackathon-tracker',
      demoLink: '#'
    },
    {
      title: 'Fitness Tracker App',
      date: '2025',
      description: 'Full-featured fitness tracking application allowing users to log workouts, monitor calorie intake, and visualize progress through interactive dynamic charts.',
      tech: ['React', 'Chart.js', 'Node.js'],
      features: ['Workout Logging', 'Calorie Tracking', 'Interactive Charts', 'Progress Visualization'],
      images: [
        '/assets/projects/fitness1.png',
        '/assets/projects/fitness2.png',
        '/assets/projects/fitness3.png'
      ],
      repoLink: 'https://github.com/swetha14cse/fitness-tracker',
      demoLink: '#'
    },
    {
      title: 'ETMS – Event Ticketing Management System',
      date: 'January 2025',
      description: 'Responsive ticketing system with event creation, ticket purchase, QR-code generation, and real-time booking updates for seamless event management.',
      tech: ['React', 'Django', 'PostgreSQL'],
      features: ['QR Code Generation', 'Real-time Updates', 'Event Creation', 'Secure Booking'],
      images: [
        '/assets/projects/etms1.png',
        '/assets/projects/etms2.png',
        '/assets/projects/etms3.png'
      ],
      repoLink: 'https://github.com/swetha14cse/etms',
      demoLink: '#'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projects[currentIndex].images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projects[currentIndex].images.length) % projects[currentIndex].images.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Showcasing innovative solutions across web development, AI, and enterprise platforms
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div
                        className="relative rounded-xl overflow-hidden bg-slate-700 aspect-video"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                          <div className="text-center">
                            <ExternalLink className="w-16 h-16 text-white/50 mx-auto mb-4" />
                            <p className="text-white/70">{project.title}</p>
                            <p className="text-white/50 text-sm">Image {currentImageIndex + 1} of {project.images.length}</p>
                          </div>
                        </div>

                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-5 h-5 text-white" />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-5 h-5 text-white" />
                            </button>
                          </>
                        )}
                      </motion.div>

                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                              <p className="text-purple-400 font-medium">{project.date}</p>
                            </div>
                          </div>

                          <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                            {project.description}
                          </p>

                          <div className="mb-6">
                            <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {project.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                  <span className="text-slate-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-slate-700 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="flex gap-3 pt-4 border-t border-slate-700">
                            <motion.a
                              href={project.repoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-2 px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-purple-600 transition-colors"
                            >
                              <Github className="w-5 h-5" />
                              View Repo
                            </motion.a>
                            <motion.a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                              View Project
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.button
            onClick={prevProject}
            whileHover={{ scale: 1.1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>

          <motion.button
            onClick={nextProject}
            whileHover={{ scale: 1.1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>

          <motion.div
            className="flex justify-center gap-2 mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setCurrentImageIndex(0);
                }}
                whileHover={{ scale: 1.2 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-purple-500' : 'w-2 bg-slate-600'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
