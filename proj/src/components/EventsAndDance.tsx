import { useState } from 'react';
import { ChevronLeft, ChevronRight, Music, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsAndDance = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Tech Conference 2025',
      caption: 'Leading tech event organizing and coordination',
      image: '/assets/events/event1.jpg',
      category: 'Events',
      icon: Calendar
    },
    {
      title: 'Community Event Management',
      caption: 'Organized multiple community and educational events',
      image: '/assets/events/event2.jpg',
      category: 'Events',
      icon: Calendar
    },
    {
      title: 'Classical Dance Performance',
      caption: 'Choreographed and performed at college events',
      image: '/assets/dance/dance1.jpg',
      category: 'Dance',
      icon: Music
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="events-dance" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Events & Creative Pursuits</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Showcasing leadership in event coordination and artistic excellence in classical dance
          </p>
        </motion.div>

        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-slate-900 rounded-2xl p-8 shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="relative rounded-xl overflow-hidden bg-slate-800 aspect-video"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <div className="text-center">
                    {slides[currentSlide].icon === Calendar ? (
                      <Calendar className="w-20 h-20 text-white/50 mx-auto mb-4" />
                    ) : (
                      <Music className="w-20 h-20 text-white/50 mx-auto mb-4" />
                    )}
                    <p className="text-white/70 text-xl">{slides[currentSlide].title}</p>
                    <p className="text-white/50 text-sm mt-2">{slides[currentSlide].category}</p>
                  </div>
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </motion.div>

              <motion.div
                className="text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 inline-block px-4 py-2 bg-purple-600 rounded-full">
                  <p className="text-sm font-semibold">{slides[currentSlide].category}</p>
                </div>

                <h3 className="text-3xl font-bold mb-3">{slides[currentSlide].title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {slides[currentSlide].caption}
                </p>

                <div className="space-y-4">
                  {slides[currentSlide].category === 'Events' ? (
                    <>
                      <p className="text-slate-300">
                        Successfully organized and coordinated multiple technical events and competitions, demonstrating strong leadership and organizational skills.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>Paper Presentation - February 2024</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>Duo Coders Competition - February 2024</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>Hackerz Case Study - March 2025</span>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <p className="text-slate-300">
                        Dedicated classical dancer with 9 years of rigorous training, bringing artistic excellence and cultural appreciation to every performance.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>1st Place - Onam College Competition</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>2nd Runner-up - Pongal College Competition</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span>Choreographed multiple college performances</span>
                        </li>
                      </ul>
                    </>
                  )}
                </div>

                <div className="flex justify-center gap-2 mt-8">
                  {slides.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      whileHover={{ scale: 1.2 }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide ? 'w-8 bg-purple-500' : 'w-2 bg-slate-600'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-purple-100 rounded-xl">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Event Organization</h3>
            </div>

            <p className="text-slate-700 mb-6 leading-relaxed">
              Demonstrated exceptional leadership and organizational abilities by successfully managing and coordinating technical events that brought together students and professionals.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Paper Presentation</p>
                  <p className="text-sm text-slate-600">Organized academic presentation event</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Duo Coders</p>
                  <p className="text-sm text-slate-600">Coordinated coding competition</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <Calendar className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Hackerz Case Study</p>
                  <p className="text-sm text-slate-600">Managed case study competition</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200 hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-green-100 rounded-xl">
                <Music className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Classical Dance</h3>
            </div>

            <p className="text-slate-700 mb-6 leading-relaxed">
              Accomplished classical dancer with 9 years of intensive training, bringing cultural artistry and technical excellence to every performance and competition.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <Music className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Competition Winner</p>
                  <p className="text-sm text-slate-600">1st place - Onam, 2nd Runner-up - Pongal</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <Music className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Choreographer</p>
                  <p className="text-sm text-slate-600">Created and performed choreographed pieces</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                <Music className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">Dedicated Practice</p>
                  <p className="text-sm text-slate-600">9 years of rigorous classical training</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsAndDance;
