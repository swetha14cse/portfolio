// import { Download, Code, Mail } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//         <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//         <div className="absolute w-96 h-96 -bottom-48 left-1/2 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         <div className="mb-6">
//           <div className="inline-block p-3 bg-purple-500/10 rounded-full backdrop-blur-sm border border-purple-500/20 mb-4">
//             <Code className="w-8 h-8 text-purple-400" />
//           </div>
//         </div>

//        <h1 className="text-5xl font-bold">
//   Hi, I'm Swetha S
// </h1>

// <p className="text-xl mt-4 text-gray-300">
// Computer Science Engineering student passionate about software development,
// AI applications, and Building intelligent digital solutions, scalable enterprise platforms.
// </p>

//         {/* <div className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
//           Full-Stack Developer | ServiceNow Certified System Administrator
//         </div> */}

//         {/* <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
//           Building intelligent digital solutions, scalable enterprise platforms and AI-powered applications.
//         </p> */}

//         <div className="flex flex-wrap gap-4 justify-center">
//           <a
//             href="/swetharesumefin (1).pdf"
//             download
//             className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
//           >
//             <Download className="w-5 h-5" />
//             Download Resume
//           </a>

//           <a
//             href="#projects"
//             className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
//           >
//             View Projects
//           </a>

//           <a
//             href="#contact"
//             className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
//           >
//             <Mail className="w-5 h-5" />
//             Contact
//           </a>
//         </div>
//       </div>

//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
//           <div className="w-1 h-3 bg-white/50 rounded-full"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Download, Code, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6">

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 left-1/2 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left flex-1">

          <div className="inline-block p-3 bg-purple-500/10 rounded-full border border-purple-500/20 mb-4">
            <Code className="w-8 h-8 text-purple-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Hi, I'm <span className="text-purple-400">Swetha S</span>
          </h1>

          <p className="text-lg mt-4 text-gray-300 max-w-xl">
          Forward-thinking aspiring Software Engineer who is tech-savvy, adaptable, and a continuous learner. With a tech-agnostic mindset, I focus on building intuitive and efficient applications that solve real-world problems.
          </p>

          {/* Buttons */}
          {/* <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-8"> */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-8  ">
             {/* VIEW RESUME */}
  <a
    href="/swetharesumefin (1).pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition"
  >
    View Resume
  </a>
            <a
              href="/swetharesumefin (1).pdf"
              download
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 bg-white/10 text-white rounded-full border border-white/20 hover:bg-white/20 transition flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative">

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-purple-500/30 blur-2xl rounded-full"></div>

            {/* Profile Image */}
            <img
              src="/photo.jpg"   // 👈 put your image in public folder
              alt="Swetha"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/20 shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
