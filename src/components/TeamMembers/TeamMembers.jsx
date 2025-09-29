import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Twitter, 
  ExternalLink,
  GraduationCap,
  Award,
  MapPin,

} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamMembers = () => {
  const [showBio, setShowBio] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: "HAWWANI BENTI",
      position: "President",
      image: "https://static.wixstatic.com/media/ebdd51_71215aea28b9452796e74c9c099830fe~mv2.jpg/v1/fill/w_301,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sides-153_edited.jpg",
      bio: "Hawwani Benti is a senior majoring in business and marketing. Her favorite song Ajaba Bontu by Umar Alii Faarah.",
      major: "Business & Marketing",
      year: "Senior",
      socialLinks: {
        email: "hawwani@example.com",
        linkedin: "#",
        twitter: "#"
      },
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "AMANE ETEFA",
      position: "Vice-President",
      image: "https://static.wixstatic.com/media/ebdd51_5808d717ba1e46dfa72dcdbb96efbac1~mv2.jpg/v1/fill/w_301,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sides-158_edited.jpg",
      bio: "Amane Etefa is a junior majoring in global studies and art history. Her favorite song Kana Jedhiin by Gadaa Hamda.",
      major: "Global Studies & Art History",
      year: "Junior",
      socialLinks: {
        email: "amane@example.com",
        linkedin: "#",
        twitter: "#"
      },
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "FAAYA ADEM",
      position: "Secretary",
      image: "https://static.wixstatic.com/media/ebdd51_abaf24b7ef93486b9ad6c99c1bbe9fcc~mv2.jpg/v1/fill/w_301,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/sides-129_edited.jpg",
      bio: "Faaya Adem is a junior majoring in journalism and geography. Her favorite song is Barreedduu Oromo by Ali Birra.",
      major: "Journalism & Geography",
      year: "Junior",
      socialLinks: {
        email: "faaya@example.com",
        linkedin: "#",
        twitter: "#"
      },
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const SocialIcon = ({ href, icon: Icon, label }) => (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:bg-white/20"
      aria-label={label}
    >
      <Icon className="w-4 h-4" />
    </a>
  );

  // Framer Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotate: -2, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" }
    })
  };

  return (
    <section id='Team' className="scroll-mt-24 relative py-20 lg:py-28 bg-primery from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl dark:bg-blue-900/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green mb-4">
            <Award className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Meet Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red to-red">Leadership</span>
          </h2>
          <p className="text-lg text-white leading-relaxed">
            Dedicated students leading with passion and vision. Get to know the talented individuals 
            driving our organization forward.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200/50 dark:border-gray-700/50">
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-square relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Social Links */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                      <SocialIcon 
                        href={`mailto:${member.socialLinks.email}`} 
                        icon={Mail} 
                        label="Email" 
                      />
                      <SocialIcon 
                        href={member.socialLinks.linkedin} 
                        icon={Linkedin} 
                        label="LinkedIn" 
                      />
                      <SocialIcon 
                        href={member.socialLinks.twitter} 
                        icon={Twitter} 
                        label="Twitter" 
                      />
                    </div>

                    {/* Position Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white">
                        {member.position}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 relative z-10">
                  {/* Name and Title */}
                  <div className="mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primery group-hover:to-primery transition-all duration-300">
                      {member.name}
                    </h3>
                    
                    {/* Education Info */}
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-4 h-4" />
                        <span>{member.major}</span>
                      </div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{member.year}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  {showBio && (
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 line-clamp-3">
                      {member.bio}
                    </p>
                  )}

                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primery/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => setShowBio(!showBio)}
              className="px-8 py-4 bg-gradient-to-r from-primery to-primery text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
              {showBio ? 'Hide Team Bios' : 'Meet Full Team'}
              <ExternalLink className="w-4 h-4" />
            </button>
           
            <button className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300">
               <Link target='_blank' to={"https://docs.google.com/forms/d/e/1FAIpQLSdH3MdgvtnuJB5pbhGJmQS2AgfsybaZeLh6g-3OhYjHACAeww/viewform"}>
              Join Our Team
              </Link>
            </button>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
