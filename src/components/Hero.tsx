'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

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
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-white to-secondary-50 overflow-hidden pt-20 sm:pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center flex-1 py-16 sm:py-20">
        <div className="text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8 sm:gap-12"
          >
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-primary-50 rounded-full text-primary-700 text-xs sm:text-sm font-medium">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span className="text-xs sm:text-sm">Based in Dubai • Global Reach</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight px-2">
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Digital Regulatory Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
              Premium full-service consultancy integrating digital law, compliance and AI governance for global enterprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-12 sm:mt-16"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
