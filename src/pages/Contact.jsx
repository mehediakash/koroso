import React, { useState } from 'react';
import PageHeader from '../components/PageHeader/PageHeader';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  User, 
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Our Office",
      content: "1031 33rd Street, Denver, Colorado 80205",
      description: "Visit us during business hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Number",
      content: "(303) 772-2723",
      description: "Mon-Fri from 8am to 6pm"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      content: "info@ewb-usa.org",
      description: "We'll respond within 24 hours"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Monday - Friday: 8:00 AM - 6:00 PM",
      description: "Weekends: 9:00 AM - 2:00 PM"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate success/failure randomly for demo
    const isSuccess = Math.random() > 0.3;
    setSubmitStatus(isSuccess ? 'success' : 'error');
    setIsSubmitting(false);

    if (isSuccess) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <PageHeader 
        title="Contact Us"
        description="Get in touch with our team. We're here to help and answer any questions you might have."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <div className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Get in Touch
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                    
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200">
                          <div className="w-10 h-10 bg-gradient-to-r from-primery to-primery rounded-lg flex items-center justify-center text-white flex-shrink-0">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                            <p className="text-gray-700 dark:text-gray-300">{info.content}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{info.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Support */}
                  <div className="bg-gradient-to-br from-primery to-primery rounded-2xl p-6 text-white">
                    <h4 className="text-lg font-semibold mb-2">Need Immediate Help?</h4>
                    <p className="text-primery-100 mb-4">Contact our support team for urgent inquiries.</p>
                    <div className="space-y-2">
                      <a href="tel:3037722723" className="flex items-center gap-2 hover:underline">
                        <Phone className="w-4 h-4" />
                        Call Support: (303) 772-2723
                      </a>
                      <a href="mailto:support@example.com" className="flex items-center gap-2 hover:underline">
                        <Mail className="w-4 h-4" />
                        support@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="bg-gradient-to-r from-primery to-primery px-6 py-4">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Send us a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 lg:p-8">
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center gap-3 text-green-800 dark:text-green-400">
                          <CheckCircle className="w-5 h-5" />
                          <div>
                            <p className="font-semibold">Message Sent Successfully!</p>
                            <p className="text-sm">We'll get back to you within 24 hours.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <div className="flex items-center gap-3 text-red-800 dark:text-red-400">
                          <AlertCircle className="w-5 h-5" />
                          <div>
                            <p className="font-semibold">Something went wrong!</p>
                            <p className="text-sm">Please try again or contact us directly.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primery focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primery focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2 mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primery focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="volunteer">Volunteer Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2 mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primery focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-200"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primery to-primery hover:from-primery hover:to-primery text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Additional Info */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Emergency Contact</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      For urgent matters outside business hours, please call our emergency line.
                    </p>
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

export default Contact;