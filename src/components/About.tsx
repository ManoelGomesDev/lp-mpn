'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Award, MapPin, Building, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Global Clients', icon: Users },
    { number: '15+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Compliance Rate', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  const locations = [
    {
      city: 'Dubai',
      country: 'UAE',
      role: 'Headquarters & Client Relations',
      description: 'Strategic hub for global operations and high-level client engagement'
    },
    {
      city: 'São Paulo',
      country: 'Brazil',
      role: 'Technical Operations Center',
      description: 'Legal expertise, technical execution, and analytical services'
    },
    {
      city: 'London',
      country: 'UK',
      role: 'European Operations',
      description: 'GDPR compliance and European market expansion'
    }
  ];

  const expertise = [
    {
      area: 'Digital Law & Compliance',
      description: 'International expertise in LGPD, GDPR, UAE Data Protection Law',
      icon: Building
    },
    {
      area: 'AI Governance',
      description: 'AI Act (EU), DIFC guidelines, NIST framework implementation',
      icon: Award
    },
    {
      area: 'Cybersecurity Operations',
      description: 'SOC monitoring, incident response, digital forensics',
      icon: Zap
    },
    {
      area: 'Crypto Regulation',
      description: 'Blockchain analytics, KYC/KYW, structured operations',
      icon: Globe
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">MPN Consulting</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a premium consultancy that bridges the gap between legal expertise and technical execution, 
            providing comprehensive digital compliance solutions for the modern global economy.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Our Approach */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Unique Approach</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine rare legal expertise with operational technical capabilities, 
              delivering both recurring services and high-value strategic projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-secondary-600" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">{item.area}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Global Presence</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategically positioned across key markets to serve our global clientele with local expertise and international standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={`${location.city}-${location.country}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-600 mr-3" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{location.city}</h4>
                    <p className="text-gray-600">{location.country}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {location.role}
                  </span>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{location.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Strategic Partnership</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Our high-value projects are delivered in partnership with MPUPPE, a leading legal firm, 
            ensuring the highest standards of legal expertise and professional service delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
              Learn About Our Partnership
            </button>
            <button className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200">
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
