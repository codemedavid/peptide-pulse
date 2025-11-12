import React from 'react';
import { Shield, Beaker, Sparkles, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Decorative Elements - Cute & Playful */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge - Cute & Aesthetic */}
          <div className="inline-flex items-center gap-2 md:gap-2.5 bg-white/90 backdrop-blur-md px-5 py-2.5 md:px-7 md:py-3.5 rounded-full shadow-cute mb-4 md:mb-6 lg:mb-8 border-2 border-sky-200 hover:border-sky-300 transition-all">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
            <span className="text-sm md:text-base lg:text-lg font-bold bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              ✨ Premium Quality Guaranteed ✨
            </span>
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 animate-pulse" />
          </div>

          {/* Main Heading - Cute & Playful */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 lg:mb-10 drop-shadow-lg">
            <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-pulse-slow">
              Premium Peptides
            </span>
            <br />
            <span className="text-gray-700">for Your Wellness</span>
            <Heart className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-pink-400 ml-2 md:ml-3 mb-1 md:mb-2 animate-pulse" />
          </h1>
          
          {/* Trust Badges - Cute & Aesthetic */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mb-6 md:mb-8">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl md:rounded-[2rem] p-5 sm:p-6 md:p-7 lg:p-9 shadow-cute hover:shadow-glow transition-all duration-300 transform hover:-translate-y-3 border-2 border-sky-100 hover:border-sky-200">
              <div className="bg-gradient-to-br from-sky-400 to-blue-500 p-3 md:p-3.5 lg:p-5 rounded-2xl md:rounded-3xl mb-3 md:mb-4 inline-block shadow-lg">
                <Shield className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-1">✓ Lab Tested</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium">Third-party verified</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-3xl md:rounded-[2rem] p-5 sm:p-6 md:p-7 lg:p-9 shadow-cute hover:shadow-glow transition-all duration-300 transform hover:-translate-y-3 border-2 border-sky-100 hover:border-sky-200">
              <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-3 md:p-3.5 lg:p-5 rounded-2xl md:rounded-3xl mb-3 md:mb-4 inline-block shadow-lg">
                <Beaker className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-1">✓ 99%+ Purity</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-500 font-medium">Research grade</p>
            </div>
          </div>
          
          {/* Disclaimer - Cute & Aesthetic */}
          <div className="bg-gradient-to-r from-sky-50 to-blue-50 backdrop-blur-md rounded-3xl border-2 border-sky-200 p-4 md:p-5 shadow-cute max-w-3xl mx-auto hover:border-sky-300 transition-all">
            <p className="text-xs sm:text-sm md:text-base text-center text-gray-700 leading-relaxed font-medium">
              <span className="inline-flex items-center gap-1.5 md:gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-sky-500" />
                <strong className="text-sky-600">RESEARCH USE ONLY:</strong>
              </span>
              {' '}ALWAYS CONSULT A LICENSED HEALTHCARE PROFESSIONAL FOR PERSONALISED MEDICAL GUIDANCE
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;
