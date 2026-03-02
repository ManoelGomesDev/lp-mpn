'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Award, MapPin, Building, Zap } from 'lucide-react';
import Conjur from '../../public/conjur.png';
import CorreioBrasilience from '../../public/correiobrazilience.png';
import Poder360 from '../../public/poder360.png';
import Aeromot from '../../public/logos/Aeromot.png';
import inter from "../../public/logos/inter.png";
import bosch from '../../public/logos/bosch.png';
import criaai from '../../public/logos/criaai.webp';
import dg from '../../public/logos/dg.png';
import green from '../../public/logos/green.png';
import mercedes from '../../public/logos/mercedes.png';
import shell from '../../public/logos/shell.png';
import spotify from '../../public/logos/spotify.png';
import Image from 'next/image';


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

  const partners = [
    {
      partner: Aeromot,
    },
    {
      partner: inter,
    },
    {
      partner: bosch,
    },
    {
      partner: criaai,
    },
    {
      partner: dg,
    },
    {
      partner: green,
    },
    {
      partner: mercedes,
    },
    {
      partner: shell,
    },
    {
      partner: spotify,
    }
  ];

  const mediaRecognition = [
    {
      media: Conjur,
    },
    {
      media: CorreioBrasilience,
      
    },
    {
      media: Poder360,
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
    // {
    //   area: 'Cybersecurity Operations',
    //   description: 'SOC monitoring, incident response, digital forensics',
    //   icon: Zap
    // },
    // {
    //   area: 'Crypto Regulation',
    //   description: 'Blockchain analytics, KYC/KYW, structured operations',
    //   icon: Globe
    // }
  ];

  return (
    <section id="about" className="pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">MPuppe Consulting</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
          We are a premium consultancy that bridges the gap between legal expertise and technical execution, providing comprehensive digital compliance solutions for the modern global economy.
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
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Trusted by Industry Leaders */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <div className="overflow-hidden w-full">
              <div className="flex gap-12 py-4 animate-marquee items-center">
                {[...partners, ...partners].map((partner, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={partner.partner}
                      alt="Partner"
                      width={140}
                      height={140}
                      className="w-[140px] h-[140px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div> */}
        </div>

               {/* Media Recognition */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Media Recognition</h3>
          
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mediaRecognition.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Image src={item.media} alt="Media Recognition" width={320} height={320} className="w-full max-w-[320px] h-auto object-contain mx-auto" />
              </motion.div>
            ))}
          </div>
        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        {/* <div>
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
        </div> */}

        {/* Partnership */}
        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
