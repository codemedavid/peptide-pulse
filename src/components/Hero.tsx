import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { useSiteSettings } from '../hooks/useSiteSettings';

interface HeroProps {
  onShopAll: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopAll }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { siteSettings } = useSiteSettings();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Use settings or fallbacks if loading/missing
  const badgeText = siteSettings?.hero_badge_text || 'Premium Peptide Solutions';
  const titlePrefix = siteSettings?.hero_title_prefix || 'One-Stop Shop for';
  const titleHighlight = siteSettings?.hero_title_highlight || 'Peptides';
  const titleSuffix = siteSettings?.hero_title_suffix || '& Essentials';
  const subtext = siteSettings?.hero_subtext || '— Trusted Quality for Your Journey.';
  const tagline = siteSettings?.hero_tagline || 'Quality-tested products. Reliable performance. Trusted by our community.';
  const description = siteSettings?.hero_description || 'SlimDose Peptides is your all-in-one destination for high-quality peptides, peptide pens, and the essential accessories you need for a smooth and confident wellness routine.';

  return (
    <div className="relative bg-[#FAFAFA] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-100/50 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-theme-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Text Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mx-auto">
              <span className="w-2 h-2 rounded-full bg-theme-accent animate-pulse" />
              <span className="text-xs font-bold tracking-wide uppercase text-gray-600">
                {badgeText}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-theme-text leading-[1.1] tracking-tight">
                {titlePrefix} <span className="text-theme-secondary relative inline-block">
                  {titleHighlight}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-theme-secondary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                  </svg>
                </span>
                <br className="hidden md:block" /> {titleSuffix}
              </h1>

              <p className="text-lg md:text-xl font-medium text-gray-500 italic max-w-2xl mx-auto">
                {subtext}
              </p>
            </div>

            {/* Sub-headline/Tagline */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-soft border border-gray-100 max-w-xl mx-auto text-left">
              <div className="p-2 bg-theme-accent/10 rounded-lg shrink-0">
                <ShieldCheck className="w-6 h-6 text-theme-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-1">
                  Verified Excellence
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tagline}
                </p>
              </div>
            </div>

            {/* Main Description */}
            <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
              <button
                onClick={onShopAll}
                className="group relative px-8 py-4 bg-navy-900 text-white rounded-xl font-bold shadow-lg shadow-navy-900/20 hover:shadow-xl hover:shadow-navy-900/30 hover:-translate-y-0.5 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  Shop All Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>


            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <Truck className="w-4 h-4 text-green-500" />
                <span>Fast Shipping</span>
              </div>
              <div className="hidden sm:flex text-sm font-medium text-gray-500">
                <span className="w-1 h-4 bg-gray-200 mx-4 rounded-full" />
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>24/7 Support</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
