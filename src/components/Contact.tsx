'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@mpnconsulting.ae',
      subtitle: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+971 4 XXX XXXX',
      subtitle: 'Dubai office hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'DIFC, Dubai, UAE',
      subtitle: 'By appointment only'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Sun-Thu: 9AM-6PM GST',
      subtitle: '24/7 emergency support'
    }
  ];

  const services = [
    'DPO as a Service',
    'Chief AI Officer as a Service',
    'Cybersecurity as a Service',
    'KYC/KYW as a Service',
    'Digital Compliance Implementation',
    'Technical & Legal Audits',
    'Executive Training Programs',
    'Strategic Consulting',
    'Other'
  ];

  return (
    <section id="contact" className="pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Get In <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Ready to elevate your digital compliance? Let&apos;s discuss how we can help secure and optimize your operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mr-2 sm:mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Send us a message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your requirements, timeline, and any specific challenges you're facing..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We&apos;re here to help you navigate the complex world of digital compliance. 
                Reach out to discuss your specific requirements and learn how we can support your organization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                  <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.subtitle}</p>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h4>
              <p className="text-gray-700 mb-6">
                For urgent compliance matters or security incidents, our emergency response team is available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
                  Emergency Hotline
                </button>
                <button className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200">
                  Schedule Consultation
                </button>
              </div>
            </div>

            {/* Compliance Guarantee */}
            <div className="bg-white p-6 rounded-xl border-2 border-secondary-200">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Our Commitment</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Response within 24 hours
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  Confidential consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></div>
                  No obligation assessment
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
