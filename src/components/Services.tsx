'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Brain, 
  Lock, 
  Search, 
  FileText, 
  Users, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
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

  const recurringServices = [
    {
      icon: Shield,
      title: 'DPO as a Service',
      description: 'Complete Data Protection Officer function for global compliance',
      features: [
        'LGPD, GDPR, UAE Data Protection Law compliance',
        'Monthly reports & semi-annual audits',
        'Continuous monitoring & risk assessment',
        'Direct liaison with regulatory authorities'
      ]
    },
    {
      icon: Brain,
      title: 'Chief AI Officer as a Service',
      description: 'AI governance and compliance according to global standards',
      features: [
        'AI Act (EU), DIFC guidelines, NIST compliance',
        'Algorithm review & ethical AI implementation',
        'Internal AI policy development',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: Lock,
      title: 'Cybersecurity as a Service',
      description: 'Comprehensive security operations and incident response',
      features: [
        'SOC monitoring & vulnerability management',
        'Periodic penetration testing',
        'Digital forensics & incident response',
        'Business continuity planning'
      ]
    },
    {
      icon: Search,
      title: 'KYC/KYW as a Service',
      description: 'Identity verification and wallet screening outsourcing',
      features: [
        'Chainalysis & Elliptic integration',
        'Continuous due diligence monitoring',
        'Compliance reporting for exchanges',
        'API integration & automation'
      ]
    }
  ];

  const projectServices = [
    {
      icon: FileText,
      title: 'Digital Compliance Implementation',
      description: 'Complete setup of policies, processes and controls'
    },
    {
      icon: Shield,
      title: 'Technical & Legal Audits',
      description: 'Due diligence for M&A, investments and partnerships'
    },
    {
      icon: Users,
      title: 'Executive Training Programs',
      description: 'Customized C-Level governance and compliance training'
    }
  ];

  return (
    <section id="services" className="pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Comprehensive digital compliance solutions designed for modern enterprises operating in the global digital economy.
          </p>
        </motion.div>

        {/* Recurring Services */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Recurring Services</h3>
            <p className="text-base sm:text-lg text-gray-600 px-4">Premium &quot;as a Service&quot; solutions with continuous monitoring and support</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {recurringServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-primary-200 transition-colors flex-shrink-0">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{service.title}</h4>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Services */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">Project-Based Services</h3>
            <p className="text-base sm:text-lg text-gray-600 px-4">Specialized implementations and strategic consulting engagements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projectServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group flex flex-col"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-secondary-200 transition-colors">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600" />
                </div>
                
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">{service.title}</h4>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed flex-grow">{service.description}</p>
                
                <div className="flex items-center justify-end">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <button 
            onClick={() => handleSmoothScroll('contact')}
            className="w-full sm:w-auto bg-primary-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-700 transition-colors duration-200 inline-flex items-center justify-center cursor-pointer"
          >
            Discuss Your Requirements
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
