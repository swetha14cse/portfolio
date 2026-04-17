import { useState } from 'react';
import { Award, CheckCircle, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const certifications = [
    {
      title: 'ServiceNow ',
      issuer: 'ServiceNow',
      date: 'August 2025',
      featured: true,
      courses: [
        'Certified System Administrator (CSA)',
        'Certified Application Developer (CAD)'
      ],
      verificationLink: 'https://certificate-link1.com',
      certificateImage: '/assets/certifications/servicenow.png'
    },
    // {
    //   title: 'Google Cloud Platform',
    //   issuer: 'Google Cloud',
    //   date: '2024-2025',
    //   courses: [
    //     'Introduction to Gen AI',
    //     'Introduction to Large Language Models',
    //     'Introduction to Responsible AI'
    //   ],
    //   verificationLink: 'https://certificate-link2.com',
    //   certificateImage: '/assets/certifications/gcp.png'
    // },
    {
      title: 'NPTEL Swayam Certifications',
      issuer: 'NPTEL',
      date: '2024-2025',
      courses: [
        'Database Management System (January 2024)',
        'Cloud Computing (November 2024)',
        'Parallel Computer Architecture (April 2025)',
        'Ethical Hacking (November 2025)'
      ],
      verificationLink: 'https://certificate-link3.com',
      certificateImage: '/assets/certifications/nptel.png'
    },
    // {
    //   title: 'MongoDB Basics',
    //   issuer: 'MongoDB',
    //   date: 'June 2025',
    //   courses: ['MongoDB Basics for Students'],
    //   verificationLink: 'https://certificate-link4.com',
    //   certificateImage: '/assets/certifications/mongodb.png'
    // },
    {
      title: 'CISCO Certifications',
      issuer: 'Cisco',
      date: 'September - October 2023',
      courses: [
        'Introduction to Cybersecurity',
        'C Essentials'
      ],
      verificationLink: 'https://certificate-link5.com',
      certificateImage: '/assets/certifications/cisco.png'
    },
    {
      title: 'Hindi Pandit',
      issuer: 'Dakshina Bharat Hindi Prachar Sabha',
      date: '2021',
      courses: ['Completed all 8 levels'],
      verificationLink: 'https://certificate-link6.com',
      certificateImage: '/assets/certifications/hindi.png'
    }
  ];

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: { duration: 0.3 },
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
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Certifications & Courses</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Continuous learning and professional development across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => setSelectedCert(index)}
              className={`rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                cert.featured
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white border-purple-600 col-span-full md:col-span-1'
                  : 'bg-slate-50 border-slate-200 hover:border-purple-500'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl ${
                  cert.featured ? 'bg-white/20' : 'bg-purple-100'
                }`}>
                  <Award className={`w-8 h-8 ${
                    cert.featured ? 'text-white' : 'text-purple-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    cert.featured ? 'text-white' : 'text-slate-900'
                  }`}>
                    {cert.title}
                  </h3>
                  <div className={`flex items-center gap-2 text-sm ${
                    cert.featured ? 'text-purple-200' : 'text-slate-600'
                  }`}>
                    <span className="font-semibold">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {cert.courses.map((course, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      cert.featured ? 'text-purple-200' : 'text-purple-600'
                    }`} />
                    <span className={cert.featured ? 'text-white' : 'text-slate-700'}>
                      {course}
                    </span>
                  </div>
                ))}
              </div>

              <motion.div
                className={`pt-6 border-t ${cert.featured ? 'border-white/20' : 'border-slate-200'}`}
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.div>

              {cert.featured && (
                <div className="mt-4 inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-8 border-2 border-purple-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
              <div className="text-slate-600">Professional Certifications</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">5+</div>
              <div className="text-slate-600">Platform Providers</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-900 mb-2">Continuous</div>
              <div className="text-slate-600">Learning Journey</div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-slate-900">
                  {certifications[selectedCert].title}
                </h3>
                <motion.button
                  onClick={() => setSelectedCert(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </motion.button>
              </div>

              <div className="p-8">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl aspect-video flex items-center justify-center mb-8">
                  <div className="text-center">
                    <Award className="w-20 h-20 text-white/50 mx-auto mb-4" />
                    <p className="text-white text-lg">{certifications[selectedCert].title}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Certificate Details</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="text-sm text-slate-600">Issuer</p>
                        <p className="text-lg font-semibold text-slate-900">{certifications[selectedCert].issuer}</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <p className="text-sm text-slate-600">Date</p>
                        <p className="text-lg font-semibold text-slate-900">{certifications[selectedCert].date}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Courses Completed</h4>
                    <ul className="space-y-2">
                      {certifications[selectedCert].courses.map((course, idx) => (
                        <li key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                          <span className="text-slate-700">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.a
                    href={certifications[selectedCert].verificationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Verify Certificate
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
