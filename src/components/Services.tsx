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
      description: 'Complete setup of policies, processes and controls',
      price: 'USD 30,000 - 150,000'
    },
    {
      icon: Shield,
      title: 'Technical & Legal Audits',
      description: 'Due diligence for M&A, investments and partnerships',
      price: 'USD 30,000 - 150,000'
    },
    {
      icon: Users,
      title: 'Executive Training Programs',
      description: 'Customized C-Level governance and compliance training',
      price: 'USD 5,000 - 20,000'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital compliance solutions designed for modern enterprises operating in the global digital economy.
          </p>
        </motion.div>

        {/* Recurring Services */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Recurring Services</h3>
            <p className="text-lg text-gray-600">Premium &quot;as a Service&quot; solutions with continuous monitoring and support</p>
            <div className="inline-flex items-center mt-4 px-4 py-2 bg-primary-50 rounded-full">
              <span className="text-primary-700 font-semibold">Starting at USD 5,000/month</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recurringServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-primary-200 transition-colors">
                    <service.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
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
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Project-Based Services</h3>
            <p className="text-lg text-gray-600">Specialized implementations and strategic consulting engagements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary-200 transition-colors">
                  <service.icon className="w-6 h-6 text-secondary-600" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary-600">{service.price}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
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
          className="text-center mt-16"
        >
          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 inline-flex items-center">
            Discuss Your Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
