'use client';

import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: 'Essential Compliance',
      description: 'Perfect for growing companies needing core compliance coverage',
      features: [
        'DPO as a Service (LGPD/GDPR)',
        'Monthly compliance reports',
        'Basic cybersecurity monitoring',
        'Email support',
        'Quarterly policy reviews'
      ],
      popular: false
    },
    {
      name: 'Premium Full-Service',
      description: 'Comprehensive solution for enterprises with complex requirements',
      features: [
        'All Essential features',
        'Chief AI Officer as a Service',
        'Advanced cybersecurity (SOC + pentests)',
        'KYC/KYW as a Service',
        'Priority support & dedicated account manager',
        'Semi-annual on-site audits',
        'Custom policy development'
      ],
      popular: true
    },
    {
      name: 'Enterprise Global',
      description: 'Bespoke solutions for multinational corporations',
      features: [
        'All Premium features',
        'Multi-jurisdiction compliance',
        'Custom integration development',
        '24/7 incident response',
        'Executive training programs',
        'Regulatory liaison services',
        'Strategic compliance consulting'
      ],
      popular: false
    }
  ];

  const projectPricing = [
    {
      service: 'Digital Compliance Implementation',
      timeline: '3-6 months',
      description: 'Complete setup of policies, processes, and technical controls'
    },
    {
      service: 'Technical & Legal Audits',
      timeline: '4-8 weeks',
      description: 'Comprehensive due diligence for M&A and investments'
    },
    {
      service: 'Executive Training Programs',
      timeline: '1-2 weeks',
      description: 'Customized C-Level governance and compliance education'
    }
  ];

  return (
    <section id="pricing" className="pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Plans</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Choose the right level of support for your organization. All plans include our premium service standards.
          </p>
        </motion.div>

        {/* Recurring Service Pricing */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Plans</h3>
            <p className="text-lg text-gray-600">Flexible subscription plans with 24-month strategic retainers available</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl border-2 p-8 ${
                  tier.popular 
                    ? 'border-primary-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:shadow-lg'
                } transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                    tier.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.name === 'Enterprise Global' ? 'Contact Sales' : 'Get Started'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project-Based Pricing */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Project-Based Services</h3>
            <p className="text-lg text-gray-600">One-time implementations and strategic consulting engagements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectPricing.map((project, index) => (
              <motion.div
                key={project.service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">{project.service}</h4>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Timeline:</span>
                    <span className="text-gray-900 font-semibold">{project.timeline}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-secondary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-secondary-700 transition-colors duration-200 flex items-center justify-center">
                  Request Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-primary-50 rounded-2xl p-8"
        >
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Strategic Retainer Agreements</h4>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Partner with us through our 24-month strategic retainer agreements. 
            Includes priority access to new services and dedicated account management.
          </p>
          <button className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
            Discuss Partnership Options
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
