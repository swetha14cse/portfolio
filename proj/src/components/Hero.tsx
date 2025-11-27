import { Download, Code, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 -bottom-48 left-1/2 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <div className="inline-block p-3 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4">
            <Code className="w-8 h-8 text-purple-400" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Swetha S
        </h1>

        <div className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
          Full-Stack Developer | ServiceNow Certified System Administrator
        </div>

        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Building intelligent digital solutions, scalable enterprise platforms and AI-powered applications.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/swetharesumefin (1).pdf"
            download
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Contact
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
