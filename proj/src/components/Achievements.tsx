import { useState } from 'react';
import { Trophy, Users, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Achievements = () => {
  const [currentAchievementIndex, setCurrentAchievementIndex] = useState(0);

  const achievementCarousel = [
    {
      type: 'hackathon',
      title: "Women's Hackathon by Naukri",
      caption: 'National-level hackathon showcasing innovative solutions',
      image: '/assets/achievements/hackathon1.jpg',
      icon: Trophy
    },
    {
      type: 'hackathon',
      title: 'Idea Hackathon by E3L',
      caption: 'June 2025 - Participated in ideation competition',
      image: '/assets/achievements/hackathon2.jpg',
      icon: Trophy
    },
    {
      type: 'dance',
      title: 'Classical Dance Excellence',
      caption: '9 years of training with multiple competition wins',
      image: '/assets/achievements/dance1.jpg',
      icon: Music
    }
  ];

  const hackathons = [
    "Women's Hackathon by Naukri",
    "Idea Hackathon by E3L (June 2025)",
    "H@CIT Coding Hackathon (March 2025)",
    "Ideathon at ILP (January 2024)",
    "SIH Hackathon (September 2025)"
  ];

  const eventOrganizing = [
    "Paper Presentation (February 2024)",
    "Duo Coders Competition (February 2024)",
    "Hackerz Case Study (March 2025)"
  ];

  const danceAchievements = [
    "9 years of Classical Dance training",
    "1st place - Onam College Competition",
    "2nd Runner-up - Pongal College Competition",
    "Choreographed multiple performances"
  ];

  const nextAchievement = () => {
    setCurrentAchievementIndex((prev) => (prev + 1) % achievementCarousel.length);
  };

  const prevAchievement = () => {
    setCurrentAchievementIndex((prev) => (prev - 1 + achievementCarousel.length) % achievementCarousel.length);
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
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Achievements & Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Recognition for technical excellence, leadership, and creative performance
          </p>
        </motion.div>

        <motion.div
          className="mb-12 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="relative rounded-xl overflow-hidden bg-slate-200 aspect-square"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    <Trophy className="w-24 h-24 text-white/50 mx-auto mb-4" />
                    <p className="text-white/70 text-lg">{achievementCarousel[currentAchievementIndex].title}</p>
                  </div>
                </div>

                <button
                  onClick={prevAchievement}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextAchievement}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{achievementCarousel[currentAchievementIndex].title}</h3>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">{achievementCarousel[currentAchievementIndex].caption}</p>
                <div className="flex justify-center gap-2">
                  {achievementCarousel.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentAchievementIndex(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentAchievementIndex ? 'w-8 bg-purple-500' : 'w-2 bg-slate-300'
                      }`}
                      aria-label={`Go to achievement ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-purple-600 transform hover:-translate-y-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-purple-100 rounded-xl">
                <Trophy className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Hackathons</h3>
            </div>

            <p className="text-slate-600 mb-6">
              Participated in national-level hackathons demonstrating problem-solving and innovation:
            </p>

            <ul className="space-y-3">
              {hackathons.map((hackathon, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{hackathon}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-center gap-2 text-purple-600 font-bold text-xl">
                <Trophy className="w-6 h-6" />
                <span>5+ Hackathons</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-blue-600 transform hover:-translate-y-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-100 rounded-xl">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Event Organizing</h3>
            </div>

            <p className="text-slate-600 mb-6">
              Leadership experience organizing and managing technical events:
            </p>

            <ul className="space-y-3">
              {eventOrganizing.map((event, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{event}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-slate-700 font-semibold text-center">
                Coordinated multiple technical competitions and events
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-green-600 transform hover:-translate-y-2"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-green-100 rounded-xl">
                <Music className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Dance & Arts</h3>
            </div>

            <p className="text-slate-600 mb-6">
              Excellence in classical dance with competitive achievements:
            </p>

            <ul className="space-y-3">
              {danceAchievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-700">{achievement}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-xl">
                <Music className="w-6 h-6" />
                <span>9 Years Training</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
