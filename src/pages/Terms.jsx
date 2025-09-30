import React, { useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import { FileText, Scale, AlertTriangle, BookOpen, UserCheck, Ban, Globe, Clock } from 'lucide-react';

const Terms = () => {
  const [activeSection, setActiveSection] = useState('agreement');

  const termsSections = [
    {
      id: 'agreement',
      title: 'Agreement to Terms',
      icon: <FileText className="w-5 h-5" />,
      content: `By accessing and using our website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.`
    },
    {
      id: 'services',
      title: 'Description of Services',
      icon: <Globe className="w-5 h-5" />,
      content: `We provide various services including but not limited to educational resources, community programs, and professional development opportunities. All services are subject to these terms and conditions.`
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <UserCheck className="w-5 h-5" />,
      content: `As a user of our services, you agree to:
      - Provide accurate and complete information
      - Maintain the security of your account
      - Not engage in illegal activities
      - Respect other users' rights
      - Comply with all applicable laws`
    },
    {
      id: 'prohibited-activities',
      title: 'Prohibited Activities',
      icon: <Ban className="w-5 h-5" />,
      content: `You may not access or use the services for any purpose other than that for which we make them available. Prohibited activities include:
      - Criminal or illegal activities
      - Harassment of any kind
      - Data mining or scraping
      - Spamming or phishing
      - Copyright infringement`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <BookOpen className="w-5 h-5" />,
      content: `The service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.`
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <Clock className="w-5 h-5" />,
      content: `We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.`
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: <Scale className="w-5 h-5" />,
      content: `In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our services.`
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      icon: <AlertTriangle className="w-5 h-5" />,
      content: `Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.`
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      icon: <FileText className="w-5 h-5" />,
      content: `We reserve the right to modify these terms at any time. We will provide notice of significant changes. Continued use of our services after changes constitutes acceptance of the new terms.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: <Scale className="w-5 h-5" />,
      content: `These terms shall be governed by and construed in accordance with the laws of the State of Colorado, without regard to its conflict of law provisions.`
    }
  ];

  return (
    <div className="min-h-screen bg-primery">
      <PageHeader 
        title="Terms of Service"
        description="Please read these terms carefully before using our services. By accessing our platform, you agree to be bound by these terms."
        breadcrumbs={[{ label: 'Terms of Service' }]}
      />

      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Important Notice */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                    Important Legal Notice
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-400">
                    These terms constitute a legally binding agreement between you and our organization. 
                    Please read them carefully and consider consulting with legal counsel if you have any questions.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Sidebar Navigation */}
              <div className="lg:w-1/4">
                <div className="sticky top-24 bg-primery dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Terms Overview</h3>
                  <nav className="space-y-2">
                    {termsSections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                          activeSection === section.id
                            ? 'bg-white text-primery border-l-4 border-primery'
                            : 'text-white dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
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
                <div className="bg-primery border border-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                  
                  {/* Effective Date */}
                  <div className="bg-primery px-6 py-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">Effective Date: January 15, 2024</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Scale className="w-4 h-4" />
                        <span className="text-sm font-medium">Legally Binding</span>
                      </div>
                    </div>
                  </div>

                  {/* Terms Content */}
                  <div className="p-6 lg:p-8">
                    {termsSections.map((section, index) => (
                      <section
                        key={section.id}
                        id={section.id}
                        className={`mb-8 last:mb-0 scroll-mt-24 ${
                          activeSection === section.id ? 'animate-fade-in-up' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-green rounded-lg flex items-center justify-center text-white">
                            {section.icon}
                          </div>
                          <h2 className="text-2xl font-bold text-red">
                            {section.title}
                          </h2>
                        </div>
                        
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                          <p className="text-white leading-relaxed whitespace-pre-line">
                            {section.content}
                          </p>
                        </div>

                        {index < termsSections.length - 1 && (
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-8"></div>
                        )}
                      </section>
                    ))}
                  </div>

                  {/* Acceptance Section */}
                  <div className="bg-primery dark:bg-gray-700/50 px-6 py-8 border-t border-gray-200 dark:border-gray-600">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white dark:text-white mb-2">
                        Acceptance of Terms
                      </h3>
                      <p className="text-white dark:text-gray-300 mb-4">
                        By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                      </p>
                      <div className="flex items-center justify-center gap-4 text-sm text-white dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>Last Updated: January 15, 2024</span>
                        </div>
                        <div className="w-px h-4 bg-gray-300 dark:bg-white"></div>
                        <div className="flex items-center gap-2">
                          <Scale className="w-4 h-4" />
                          <span>Version 2.1</span>
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
    </div>
  );
};

export default Terms;