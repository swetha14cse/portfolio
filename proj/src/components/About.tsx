import { Briefcase, Award, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm a passionate Full-Stack Developer and ServiceNow Certified System Administrator with a strong foundation in building scalable enterprise platforms and AI-powered applications.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              With hands-on experience in modern web technologies, cloud platforms, and AI integration, I specialize in creating intelligent digital solutions that solve real-world problems. My approach combines technical expertise with creative problem-solving to deliver impactful results.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Through multiple internships and project executions, I've developed a keen ability to adapt to new technologies quickly and work collaboratively in dynamic environments.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/swetha14cse"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-300 font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/swetha-s-5a4530291/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Code2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Technical Excellence</h3>
              </div>
              <p className="text-slate-600">
                Proficient in full-stack development with expertise in React, Node.js, Flask, Django, and ServiceNow platform development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Professional Experience</h3>
              </div>
              <p className="text-slate-600">
                Completed 3 internships with real-world project delivery in web development, frontend engineering, and full-stack development.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Achievement Driven</h3>
              </div>
              <p className="text-slate-600">
                Active participant in national-level hackathons and tech event organizer with a proven track record of delivering innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
