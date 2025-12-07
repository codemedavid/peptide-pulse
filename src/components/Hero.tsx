import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-theme-bg pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-28 lg:pb-32">
      {/* Abstract Background Shape */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-theme-accent/5 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-theme-secondary/5 blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm mb-6 md:mb-8 animate-fadeIn">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-secondary"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-gray-600 tracking-wide">
              Quality-tested products. Reliable performance. Trusted by our community.
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-theme-text mb-6 md:mb-8 tracking-tight leading-tight">
            Premium Peptides & Essentials —<br className="hidden md:block" />
            <span className="text-theme-accent">Trusted Quality</span> for Your Journey.
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore our carefully curated selection of high-quality peptides, peptide pens, cartridges, pen needles, and insulin syringes. Each product is personally tested and trusted for purity, safety, and performance — so you can pin with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
            <button className="btn-primary w-full sm:w-auto group flex items-center justify-center gap-2">
              Shop All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 rounded-lg font-medium text-theme-text hover:text-theme-accent transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              View Lab Tests & Quality Assurance
              <ShieldCheck className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-3 md:gap-8 border-t border-gray-100 pt-6 md:pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2 group">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-theme-accent/30 transition-colors">
                <ShieldCheck className="w-6 h-6 text-theme-accent" />
              </div>
              <p className="font-semibold text-theme-text">Lab Verified</p>
              <p className="text-sm text-gray-400">99% Purity Guaranteed</p>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-theme-secondary/30 transition-colors">
                <Sparkles className="w-6 h-6 text-theme-secondary" />
              </div>
              <p className="font-semibold text-theme-text">Premium Quality</p>
              <p className="text-sm text-gray-400">Sourced for Excellence</p>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:border-theme-accent/30 transition-colors">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-theme-accent to-theme-secondary opacity-75" />
              </div>
              <p className="font-semibold text-theme-text">Real-World Tested</p>
              <p className="text-sm text-gray-400 text-center">Verified by our team & community</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
