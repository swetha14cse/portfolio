import { Code, Database, Cloud, Boxes } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  // const skillCategories = [
  //   {
  //     title: 'Frontend Development',
  //     icon: Code,
  //     color: 'purple',
  //     skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap']
  //   },
  //   {
  //     title: 'Backend Development',
  //     icon: Database,
  //     color: 'blue',
  //     skills: ['Node.js', 'Flask', 'REST APIs', 'Python']
  //   },
  //   {
  //     title: 'Database & Storage',
  //     icon: Boxes,
  //     color: 'green',
  //     skills: ['MySQL', 'MongoDB',  'SQL']
  //   },
  //   {
  //     title: 'Cloud & Enterprise',
  //     icon: Cloud,
  //     color: 'orange',
  //     skills: ['ServiceNow', 'LLM & GenAI', 'Java', 'C++']
  //   }
  // ];

 const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    color: 'purple',
    skills: ['React.js', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Backend Development',
    icon: Database,
    color: 'blue',
    skills: ['Node.js', 'Flask', 'REST APIs']
  },
  {
    title: 'Programming Languages',
    icon: Boxes,
    color: 'green',
    skills: ['C','C++', 'Java', 'Python','JavaScript']
  },
  {
    title: 'Database & Tools',
    icon: Cloud,
    color: 'orange',
    skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'ServiceNow']
  }
];

  const skillIcons = [
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Flask', icon: '🚀' },
    { name: 'Django', icon: '🎯' },
    { name: 'ServiceNow', icon: '☁️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Google Cloud', icon: '☁️' },
    { name: 'GenAI', icon: '🤖' }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600', badge: 'bg-purple-100 text-purple-700' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700' },
      green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', badge: 'bg-green-100 text-green-700' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600', badge: 'bg-orange-100 text-orange-700' }
    };
    return colors[color];
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={`${colors.bg} border-2 ${colors.border} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-white rounded-xl shadow-md`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 ${colors.badge} rounded-full font-medium text-sm transition-colors duration-200 cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Technology Stack</h3>
          <motion.div
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillIcons.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="flex flex-col items-center p-4 bg-slate-50 rounded-xl border-2 border-slate-200 hover:border-purple-500 cursor-pointer transition-all duration-300"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-xs font-medium text-slate-600 text-center">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {/* <div className="text-center">
              <div className="text-4xl font-bold mb-2">ServiceNow</div>
              <div className="text-purple-200">Certified System Administrator</div>
            </div> */}
            <div className="hidden md:block w-px h-16 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-purple-200">Technical Skills</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-purple-200">Major Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
