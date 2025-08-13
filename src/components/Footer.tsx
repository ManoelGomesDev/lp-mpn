'use client';

import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const services = [
    'DPO as a Service',
    'Chief AI Officer as a Service',
    'Cybersecurity as a Service',
    'KYC/KYW as a Service',
    'Digital Compliance Implementation',
    'Technical & Legal Audits'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Partnership with MPUPPE',
    'Case Studies',
    'News & Insights'
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Compliance Statement',
    'Data Processing Agreement',
    'Security Practices'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">MPN</h1>
                <p className="text-xs text-gray-400">consulting</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium digital compliance consultancy serving global enterprises with 
              integrated legal, technical, and regulatory expertise from our Dubai headquarters.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-400" />
                <span>DIFC, Dubai, UAE</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary-400" />
                <span>hello@mpnconsulting.ae</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary-400" />
                <span>+971 4 XXX XXXX</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications & Compliance */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Certifications & Compliance</h4>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">ISO 27001</div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">SOC 2 Type II</div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">GDPR Compliant</div>
                <div className="bg-gray-800 px-4 py-2 rounded-lg text-sm">LGPD Certified</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Global Reach</h4>
              <p className="text-gray-300 text-sm">
                Serving clients across 15+ countries with local expertise and international standards
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 MPN Consulting. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Partnership with MPUPPE</span>
            <span>•</span>
            <span>Dubai, UAE</span>
            <span>•</span>
            <span>Global Operations</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <p className="text-xs text-gray-400 leading-relaxed">
            <strong>Disclaimer:</strong> MPN Consulting provides professional services in partnership with licensed legal practitioners. 
            This website does not constitute legal advice. Specific legal matters should be discussed with qualified legal counsel. 
            All services are subject to applicable local laws and regulations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
