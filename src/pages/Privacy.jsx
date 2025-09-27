import React, { useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import { Shield, Eye, FileText, Mail, Calendar, Users } from 'lucide-react';

const Privacy = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const privacySections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FileText className="w-5 h-5" />,
      content: `Welcome to our Privacy Policy. Your privacy is critically important to us. This privacy policy document outlines the types of personal information that is received and collected by our organization and how it is used.`
    },
    {
      id: 'data-collection',
      title: 'Information We Collect',
      icon: <Eye className="w-5 h-5" />,
      content: `We collect information you provide directly to us, including when you create an account, subscribe to our newsletter, or contact us for support. This may include:
      - Personal identification information (Name, email address, phone number)
      - Demographic information (age, gender, location)
      - Technical data (IP address, browser type, device information)
      - Usage data (pages visited, features used)`
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Information',
      icon: <Users className="w-5 h-5" />,
      content: `We use the information we collect to:
      - Provide, maintain, and improve our services
      - Send you technical notices and support messages
      - Respond to your comments and questions
      - Send you informational communications
      - Monitor and analyze trends and usage
      - Personalize your experience`
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing',
      icon: <Shield className="w-5 h-5" />,
      content: `We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.`
    },
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: <Shield className="w-5 h-5" />,
      content: `We implement appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.`
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: <Eye className="w-5 h-5" />,
      content: `Our website uses "cookies" to enhance User experience. Users may choose to set their web browser to refuse cookies or to alert you when cookies are being sent.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      icon: <Users className="w-5 h-5" />,
      content: `You have the right to:
      - Access your personal data
      - Correct inaccurate data
      - Request deletion of your data
      - Object to processing of your data
      - Data portability
      - Withdraw consent at any time`
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      icon: <Calendar className="w-5 h-5" />,
      content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.`
    },
    {
      id: 'contact',
      title: 'Contact Us',
      icon: <Mail className="w-5 h-5" />,
      content: `If you have any questions about this Privacy Policy, please contact us at privacy@example.com.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageHeader 
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your personal information. Your privacy is our priority."
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Sidebar Navigation */}
              <div className="lg:w-1/4">
                <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">On This Page</h3>
                  <nav className="space-y-2">
                    {privacySections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                          activeSection === section.id
                            ? 'bg-primery/10 text-primery border-l-4 border-primery'
                            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {section.icon}
                        <span className="font-medium">{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                  
                  {/* Last Updated */}
                  <div className="bg-gradient-to-r from-primery to-primery px-6 py-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">Last Updated: January 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span className="text-sm font-medium">GDPR Compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Privacy Content */}
                  <div className="p-6 lg:p-8">
                    {privacySections.map((section, index) => (
                      <section
                        key={section.id}
                        id={section.id}
                        className={`mb-8 last:mb-0 scroll-mt-24 ${
                          activeSection === section.id ? 'animate-fade-in-up' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-primery to-primery rounded-lg flex items-center justify-center text-white">
                            {section.icon}
                          </div>
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {section.title}
                          </h2>
                        </div>
                        
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>

                        {index < privacySections.length - 1 && (
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-8"></div>
                        )}
                      </section>
                    ))}
                  </div>

                  {/* CTA Section */}
                  <div className="bg-gray-50 dark:bg-gray-700/50 px-6 py-8 border-t border-gray-200 dark:border-gray-600">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Still Have Questions?
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Contact our privacy team for any concerns or inquiries about your data.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="mailto:privacy@example.com"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primery text-white rounded-lg hover:bg-primery/90 transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4" />
                          Email Privacy Team
                        </a>
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-200"
                        >
                          Contact Support
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;