import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Strong academic foundation in computer science and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Bachelor of Engineering</h3>
                <p className="text-purple-200">Computer Science and Engineering</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-purple-100">Institution:</span>
                <span className="font-semibold">Chennai Institute of Technology</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-100">Location:</span>
                <span className="font-semibold">Chennai</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-purple-100">Duration:</span>
                <span className="font-semibold">2023 - 2027</span>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">9.2 / 10</div>
                <div className="text-purple-200">Current CGPA</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Data Structures</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Algorithms</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Web Development</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Database Systems</span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Cloud Computing</span>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border-2 border-slate-700 hover:border-purple-500 shadow-xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-purple-100 rounded-xl">
                <BookOpen className="w-10 h-10 text-purple-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Higher Secondary Certificate</h3>
                <p className="text-purple-400">Computer Science Stream</p>
              </div>
            </div>

            <div className="space-y-4 mb-6 text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Institution:</span>
                <span className="font-semibold">PND Adarsh Vidyalaya</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="font-semibold">Chennai</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Year:</span>
                <span className="font-semibold">2023</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 border border-purple-500/30">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">91.5 %</div>
                <div className="text-purple-200">Overall Score</div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Computer Science Specialization</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Mathematics & Programming</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Strong Academic Foundation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-slate-800 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Consistent Excellence</h4>
              <p className="text-slate-400 text-sm">Maintaining high CGPA throughout academic journey</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">💻</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Technical Focus</h4>
              <p className="text-slate-400 text-sm">Specialized in Computer Science and Engineering</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                <span className="text-3xl">📚</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Continuous Learning</h4>
              <p className="text-slate-400 text-sm">Complemented with multiple certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
