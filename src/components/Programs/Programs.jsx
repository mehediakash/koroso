import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Trophy, 
  Briefcase, 
  Calendar, 
  TrendingUp, 
  Cpu, 
  Code2, 
  HeartPulse,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const Programs = () => {
  const programGroups = [
    {
      title: "Students & Early Career",
      icon: <GraduationCap className="w-6 h-6" />,
      programs: [
        { icon: <Users className="w-8 h-8" />, title: "Mentorship Network", gradient: "from-blue-500 to-cyan-500", features: ["1-on-1 Guidance", "Internship Prep", "Much More"] },
        { icon: <Trophy className="w-8 h-8" />, title: "Scholarships", gradient: "from-green-500 to-emerald-500", features: ["Seed Funding", "Application Coaching", "FAFSA Support"] },
        { icon: <TrendingUp className="w-8 h-8" />, title: "Leadership Academy", gradient: "from-purple-500 to-pink-500", features: ["Entrepreneurship", "Leadership Skills", "Public Speaking "] }
      ]
    },
    {
      title: "Professionals & Employers",
      icon: <Briefcase className="w-6 h-6" />,
      programs: [
        { icon: <Users className="w-8 h-8" />, title: "Career Fair & Recruiting", gradient: "from-orange-500 to-red-500", features: ["Networking Events", "Partnerships", "Job Opportunities"] },
        { icon: <Calendar className="w-8 h-8" />, title: "Industry Nights", gradient: "from-indigo-500 to-blue-500", features: ["Expert Panels", "Industry Insights", "Professional Networking"] },
        { icon: <TrendingUp className="w-8 h-8" />, title: "Professional Development", gradient: "from-amber-500 to-yellow-500", features: ["Interview Prep", "Career Growth", "Skill Building"] }
      ]
    },
    {
      title: "Community & Innovation",
      icon: <Sparkles className="w-6 h-6" />,
      programs: [
        { icon: <Cpu className="w-8 h-8" />, title: "AI & Technology Workshops", gradient: "from-teal-500 to-cyan-500", features: ["AI", " Data & Cloud", "Cybersecurity (English & Afaan Oromo)"] },
        { icon: <Code2 className="w-8 h-8" />, title: "Hack for Community", gradient: "from-violet-500 to-purple-500", features: ["Hackathons", "Innovation Challenges", "Tools that Make a Difference"] },
        { icon: <HeartPulse className="w-8 h-8" />, title: "Community Wellness", gradient: "from-rose-500 to-pink-500", features: ["Mental Health", "Cultural Care Navigation", "Awareness Resources"] }
      ]
    }
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <section id="Programs" className="relative pt-20 lg:py-28 bg-primery scroll-mt-24 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl dark:bg-blue-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green mb-4">
            <Sparkles className="w-4 h-4 text-white"  />
            <span className="text-sm font-medium text-white">Our Programs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white dark:text-white mb-4">
            Empowering Through <span className=" text-white bg-clip-text bg-gradient-to-r from-primery to-primery">Innovative Programs</span>
          </h2>
          <p className="text-lg text-white dark:text-gray-300 leading-relaxed">
            Comprehensive programs designed to support students, professionals, and community members 
            at every stage of their journey with cutting-edge technology and cultural relevance.
          </p>
        </motion.div>

        {/* Program Groups */}
        <div className="space-y-16 lg:space-y-20">
          {programGroups.map((group, groupIndex) => (
            <motion.div 
              key={groupIndex}
              className="group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={groupIndex}
              variants={container}
            >
              {/* Group Header */}
              <div className="flex items-center gap-4 mb-8 lg:mb-12">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green text-white shadow-lg">
                  {group.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white dark:text-white">
                  {group.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primery/20 to-transparent ml-4"></div>
              </div>

              {/* Program Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {group.programs.map((program, programIndex) => (
                  <motion.div
                    key={programIndex}
                    className="group relative"
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: programIndex * 0.15, duration: 0.6, ease: "easeOut" }}
                  >
                    {/* Existing card design remains unchanged */}
                    <div className="relative h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-800"></div>
                      </div>
                      <div className="relative z-10">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${program.gradient} text-white shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                          {program.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primery group-hover:to-primery transition-all duration-300">
                          {program.title}
                        </h4>
                        <div className="space-y-2 mb-6">
                          {program.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient}`}></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primery/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
