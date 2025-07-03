import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  Heart, 
  Globe,
  Leaf,
  Code,
  TrendingUp,
  Shield,
  Zap,
  Building
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Lead Developer & Co-Founder",
      bio: "Former HSBC Senior Software Engineer with 8+ years in banking systems. Passionate about sustainable technology.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Marcus Rodriguez",
      role: "ML Engineer & Co-Founder",
      bio: "PhD in Computer Science, specializing in code optimization algorithms and energy-efficient computing.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Emily Watson",
      role: "Sustainability Advisor",
      bio: "Environmental scientist and ESG consultant, helping organizations achieve net-zero goals through technology.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "James Park",
      role: "Banking Systems Architect",
      bio: "20+ years in financial services technology, expert in mainframe and modern banking infrastructure.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Greenline Concept",
      description: "Initial idea born during HSBC's green transformation initiative",
      icon: Lightbulb
    },
    {
      year: "2024",
      title: "Prototype Development",
      description: "Built first working prototype with Java and COBOL analysis",
      icon: Code
    },
    {
      year: "2024",
      title: "Hackathon Launch",
      description: "Presenting Greenline at major fintech hackathon",
      icon: Award
    },
    {
      year: "2025",
      title: "Production Ready",
      description: "Full platform launch with enterprise features",
      icon: TrendingUp
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability First",
      description: "Every line of code should contribute to a greener future"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Banking-grade security with full regulatory compliance"
    },
    {
      icon: Users,
      title: "Developer Experience",
      description: "Tools that enhance productivity without disrupting workflows"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Scaling sustainable coding practices across the financial industry"
    }
  ];

  const stats = [
    { value: "30%", label: "Energy Reduction", icon: Zap },
    { value: "500K+", label: "Lines Analyzed", icon: Code },
    { value: "50+", label: "Banking Patterns", icon: Building },
    { value: "24/7", label: "Monitoring", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Greenline</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make banking technology more sustainable, one line of code at a time.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-12 text-white text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white bg-opacity-20 rounded-full">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "We believe that sustainable software development is not just an environmental imperative, 
            but a competitive advantage. Greenline empowers developers to write code that's not only 
            efficient and maintainable, but also contributes to a more sustainable future for our planet."
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <div className="p-3 bg-green-100 rounded-lg inline-block mb-4">
                <stat.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Origin Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Greenline was born during HSBC's ambitious green transformation initiative in 2023. 
              As software engineers working on critical banking systems, we witnessed firsthand how 
              inefficient code was contributing to unnecessary energy consumption and carbon emissions.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Traditional code analysis tools focused on performance and security, but none addressed 
              the environmental impact of our software. We realized that with banks like HSBC aiming 
              to cut IT energy use by 50% by 2030, there was a critical need for tools that could 
              help developers write more sustainable code.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-6 italic text-xl text-gray-700 mb-6">
              "We wanted a tool that helps engineers code responsibly, not just efficiently. 
              Greenline represents our commitment to making sustainability a core part of the 
              software development process."
            </blockquote>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, Greenline is more than just a linting tool—it's a comprehensive platform that 
              helps organizations understand, measure, and reduce the environmental impact of their 
              software while maintaining the highest standards of performance and security.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-green-100 rounded-lg mr-4">
                    <value.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 to-blue-600 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center mb-3">
                        <div className={`p-2 bg-green-100 rounded-lg ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                          <milestone.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <span className={`text-sm font-bold text-green-600 ${index % 2 === 0 ? 'mr-3' : 'ml-3'}`}>
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Join the Sustainable Coding Revolution</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to make your code more sustainable? Get in touch with our team to learn how 
            Greenline can help your organization reduce its environmental impact while improving efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
            >
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              Schedule Demo
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;