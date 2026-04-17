import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    
    {
      company: 'Veerel Enterprises',
      role: 'Web Development',
      period: 'November 2024 - June 2025',
      description: 'Created a billing website for admin purposes and an event management system for both client and admin using React (frontend) and Django (backend).',
      tech: ['React', 'Admin Panel']
    },
    {
      company: 'Lux & Decibels',
      role: 'FullStack Development',
      period: 'June 2025 - August 2025',
      description: 'Worked on MySQL, React and Flask based projects, delivering full-stack solutions for client requirements.',
      tech: ['MySQL', 'React', 'Flask']
    },
    {
      company: 'Techie Nutpam',
      role: 'Frontend Development',
      period: 'May 2025 - June 2025',
      description: 'Utilized React and Bootstrap for creating a static company website with animations and modern UI/UX design.',
      tech: ['React',  'Animations']
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hands-on experience delivering real-world solutions across multiple organizations
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-600 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-purple-500 hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center gap-3 mb-4 md:justify-end">
                      <div className="p-3 bg-purple-100 rounded-lg">
                        <Briefcase className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                        <p className="text-purple-600 font-semibold">{exp.role}</p>
                      </div>
                    </div>

                    <p className="text-slate-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 justify-end">
                      {exp.tech.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="relative flex items-center justify-center w-full md:w-2/12"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                    <p className="text-slate-700 font-semibold text-lg">{exp.period}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
