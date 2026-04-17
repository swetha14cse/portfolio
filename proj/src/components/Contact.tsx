import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
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
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200"
              >
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <a
                    href="mailto:swethas.cse2023@citchennai.net"
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    swethas.cse2023@citchennai.net
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200"
              >
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                  <a
                    href="tel:+918825468770"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    +91 8825468770
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200"
              >
                <div className="p-3 bg-green-100 rounded-lg">
                  <Linkedin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/swetha-s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    linkedin.com/in/swetha-s
                  </a>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200"
              >
                <div className="p-3 bg-slate-100 rounded-lg">
                  <Github className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">GitHub</h4>
                  <a
                    href="https://github.com/swetha14cse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-slate-700 transition-colors"
                  >
                    github.com/swetha14cse
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl text-white"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-bold text-xl mb-2">Available for Opportunities</h4>
              <p className="text-purple-100">
                Open to full-time positions, internships, and freelance projects 
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-slate-700 font-medium mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="subject" className="block text-slate-700 font-medium mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-slate-700 font-medium mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-purple-600 focus:outline-none transition-colors resize-none"
                    required
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
