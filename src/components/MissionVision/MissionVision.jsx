import React from 'react';
import { CheckCircle, ArrowRight, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Vision",
      description: "To empower Oromo students, professionals, and communities to learn, lead, and thrive in the modern world — advancing in emerging industries."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Values",
      description: "Leadership & Integrity, Entrepreneurship & Innovation, Collaboration & Networks, Service & Uplift, Generational Impact."
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id='Mission' className="relative scroll-mt-24 overflow-hidden py-16 lg:py-24 bg-gradient-to-br dark:from-gray-900 dark:to-dark">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primery/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-prito-primery/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Image Gallery Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left column images */}
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                  {[
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
                    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1129&q=80"
                  ].map((src, i) => (
                    <motion.div
                      key={i}
                      className="relative group"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-primery to-primery rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                      <img
                        src={src}
                        alt={`Gallery ${i+1}`}
                        className="relative rounded-xl shadow-lg w-full h-64 md:h-auto object-cover transform group-hover:scale-105 transition duration-300"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Right column image */}
                <motion.div
                  className="w-full md:w-1/2 flex items-start justify-center"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="relative group mt-8 md:mt-16">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primery to-primery rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <img
                      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
                      alt="Customer satisfaction"
                      className="relative rounded-xl shadow-lg w-full h-80 object-cover transform group-hover:scale-105 transition duration-300"
                    />
                    {/* Floating badge */}
                    <motion.div
                      className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-green dark:text-red">4.9/5 Top</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-lg">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm text-white font-medium bg-green dark:bg-green/20 mb-4">
                <CheckCircle className="w-4 h-4" />
                Mission & Vision
              </span>
              
              <h2 className="text-lg font-bold text-white dark:text-gray-300 mb-8 leading-relaxed">
                To empower Oromo students, professionals, and communities to learn, lead, and thrive in the modern world advancing in emerging industries, building strong networks, driving entrepreneurship, pursuing leadership in public service, and collectively uplifting one another through knowledge, opportunity, and service.
              </h2>
              
              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red dark:bg-primery/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white dark:text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-white dark:text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default MissionVision;
