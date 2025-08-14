'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Altura aproximada do header
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-secondary-50 overflow-hidden pt-16 sm:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-50 rounded-full text-primary-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                <span className="text-xs sm:text-sm">Based in Dubai • Global Reach</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
                <span className="block">Digital & Crypto</span>
                <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Regulatory Excellence
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
                Premium full-service consultancy integrating digital law, compliance, AI governance, 
                cybersecurity and crypto regulation for global enterprises.
              </p>
            </motion.div>

                      <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
            >
              <button 
                onClick={() => handleSmoothScroll('contact')}
                className="group w-full sm:w-auto bg-primary-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                Start Your Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => handleSmoothScroll('services')}
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:border-primary-600 hover:text-primary-600 transition-colors duration-200 cursor-pointer"
              >
                View Our Services
              </button>
            </motion.div>

                      {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4"
            >
              <div className="flex flex-col items-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">Compliance as a Service</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">DPO, AI Officer, KYC/KYW services with continuous monitoring</p>
              </div>

              <div className="flex flex-col items-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">Cybersecurity Excellence</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">SOC monitoring, pentests, incident response & forensics</p>
              </div>

              <div className="flex flex-col items-center p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 text-center">Global Expertise</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">LGPD, GDPR, UAE Data Protection Law compliance</p>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
