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

const Programs = () => {
  const programGroups = [
    {
      title: "Students & Early Career",
      icon: <GraduationCap className="w-6 h-6" />,
      programs: [
        {
          icon: <Users className="w-8 h-8" />,
          title: "Mentorship Network",
          description: "Pairing students with professionals for career navigation, internships, and grad-school prep.",
          gradient: "from-blue-500 to-cyan-500",
          features: ["1-on-1 Mentoring", "Internship Support", "Grad School Prep"]
        },
        {
          icon: <Trophy className="w-8 h-8" />,
          title: "Scholarships",
          description: "Seed funding for high-school & college students, FAFSA help, and application coaching.",
          gradient: "from-green-500 to-emerald-500",
          features: ["Financial Aid", "Application Coaching", "FAFSA Assistance"]
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: "Leadership Academy",
          description: "Public speaking, leadership, and entrepreneurship tracks for youth and early career.",
          gradient: "from-purple-500 to-pink-500",
          features: ["Public Speaking", "Entrepreneurship", "Leadership Skills"]
        }
      ]
    },
    {
      title: "Professionals & Employers",
      icon: <Briefcase className="w-6 h-6" />,
      programs: [
        {
          icon: <Users className="w-8 h-8" />,
          title: "Career Fair & Recruiting",
          description: "Company partners recruit Oromo students and professionals at OTIS events.",
          gradient: "from-orange-500 to-red-500",
          features: ["Networking Events", "Company Partnerships", "Job Opportunities"]
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: "Industry Nights",
          description: "Quarterly panels with leaders across tech, healthcare, business, and education.",
          gradient: "from-indigo-500 to-blue-500",
          features: ["Expert Panels", "Industry Insights", "Quarterly Events"]
        },
        {
          icon: <TrendingUp className="w-8 h-8" />,
          title: "Professional Development",
          description: "Workshops on interviewing, portfolio, leadership, and navigating promotion.",
          gradient: "from-amber-500 to-yellow-500",
          features: ["Interview Prep", "Career Growth", "Skill Building"]
        }
      ]
    },
    {
      title: "Community & Innovation",
      icon: <Sparkles className="w-6 h-6" />,
      programs: [
        {
          icon: <Cpu className="w-8 h-8" />,
          title: "AI & Technology Workshops",
          description: "Intro to AI, data, cloud, and cybersecurity — in plain English and Afaan Oromo.",
          gradient: "from-teal-500 to-cyan-500",
          features: ["AI Education", "Tech Skills", "Bilingual Content"]
        },
        {
          icon: <Code2 className="w-8 h-8" />,
          title: "Hack for Community",
          description: "Weekend hackathons building real tools for language, jobs, and services.",
          gradient: "from-violet-500 to-purple-500",
          features: ["Hackathons", "Community Tools", "Real Projects"]
        },
        {
          icon: <HeartPulse className="w-8 h-8" />,
          title: "Community Wellness",
          description: "Mental health awareness and culturally-competent care navigation resources.",
          gradient: "from-rose-500 to-pink-500",
          features: ["Mental Health", "Cultural Care", "Wellness Resources"]
        }
      ]
    }
  ];

  return (
    <section id="programs" className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl dark:bg-blue-900/20"></div>
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl dark:bg-purple-900/20"></div> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primery/10 text-primery dark:bg-primery/20 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Our Programs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Empowering Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-primery to-primery">Innovative Programs</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Comprehensive programs designed to support students, professionals, and community members 
            at every stage of their journey with cutting-edge technology and cultural relevance.
          </p>
        </div>

        {/* Program Groups */}
        <div className="space-y-16 lg:space-y-20">
          {programGroups.map((group, groupIndex) => (
            <div 
              key={groupIndex}
              className="group"
              data-aos="fade-up"
              data-aos-delay={groupIndex * 100}
            >
              {/* Group Header */}
              <div className="flex items-center gap-4 mb-8 lg:mb-12">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-primery to-primery text-white shadow-lg">
                  {group.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  {group.title}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primery/20 to-transparent ml-4"></div>
              </div>

              {/* Program Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {group.programs.map((program, programIndex) => (
                  <div
                    key={programIndex}
                    className="group relative"
                  >
                    {/* Animated Card */}
                    <div className="relative h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      {/* Animated Border */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                        <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-800"></div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${program.gradient} text-white shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                          {program.icon}
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primery group-hover:to-primery transition-all duration-300">
                          {program.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {program.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2 mb-6">
                          {program.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.gradient}`}></div>
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        {/* <button className="inline-flex items-center gap-2 text-sm font-medium text-primery hover:text-primery/80 transition-colors duration-200 group/btn">
                          Learn More
                          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </button> */}
                      </div>

                      {/* Hover Effect Elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primery/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-primery to-primery text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Explore All Programs
            </button>
            <button className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300">
              Download Program Guide
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Programs;