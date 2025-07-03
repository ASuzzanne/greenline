import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  TrendingDown, 
  DollarSign, 
  Zap, 
  Code, 
  BarChart3, 
  Shield, 
  Target,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Gauge
} from 'lucide-react';

const HomePage = () => {
  const problemStats = [
    { icon: TrendingDown, value: '30%', label: 'Higher Energy Costs', color: 'text-red-600' },
    { icon: DollarSign, value: '$7.5M', label: 'Annual Waste', color: 'text-orange-600' },
    { icon: Zap, value: '26%', label: 'Data Center Energy', color: 'text-yellow-600' },
  ];

  const solutionFeatures = [
    {
      icon: Code,
      title: 'Smart Code Analysis',
      description: 'Java, COBOL, Shell script parsing with ML-powered optimization suggestions',
      color: 'bg-blue-500'
    },
    {
      icon: Gauge,
      title: 'Infrastructure-Aware Modeling',
      description: 'Energy mapping for Cloud, Mainframe, and On-Premise environments',
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Green Score & Feedback',
      description: 'Real-time scoring integrated into IDEs, CI/CD, and dashboards',
      color: 'bg-green-500'
    },
    {
      icon: Target,
      title: 'ML-Based Optimization',
      description: 'Learns from repository patterns and community best practices',
      color: 'bg-indigo-500'
    }
  ];

  const impactMetrics = [
    { value: '50%', label: 'Energy Reduction', icon: Leaf },
    { value: '500K', label: 'Cars Off Road Equivalent', icon: TrendingDown },
    { value: '2030', label: 'Net Zero Ready', icon: Target },
    { value: '100%', label: 'Workflow Compatible', icon: CheckCircle },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full"
              >
                <Leaf className="w-16 h-16 text-white" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Greenline
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
              Save Millions, Cut Carbon, Without Changing Workflows
            </p>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto">
              An intelligent energy-focused linter for Java-based and mainframe-connected banking systems. 
              Transform your code into a sustainability powerhouse.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center"
                >
                  Try the Demo <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/roi-calculator">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 transition-all duration-200"
                >
                  Calculate ROI
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Greenline?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inefficient code is costing banks millions while contributing to unnecessary carbon emissions. 
              Existing tools lack hardware awareness and ML-based optimizations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {problemStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className={`inline-flex p-4 rounded-full bg-white mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border-l-4 border-red-500"
          >
            <div className="flex items-start">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Hidden Cost of Inefficient Code</h3>
                <p className="text-gray-700 mb-4">
                  Data centers consume 26% of HSBC's total energy. Performance doesn't equal energy efficiency. 
                  HSBC aims to cut IT energy use by 50% by 2030 — Greenline can accelerate that goal.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><X className="w-4 h-4 text-red-500 mr-2" />30% Higher Cloud Energy Consumption</li>
                  <li className="flex items-center"><X className="w-4 h-4 text-red-500 mr-2" />Millions in Wasted Infrastructure Costs</li>
                  <li className="flex items-center"><X className="w-4 h-4 text-red-500 mr-2" />Unnecessary Scope 2 Emissions</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Greenline Does</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Greenline cuts cloud compute carbon without changing workflows. 
              Our intelligent system analyzes, scores, and optimizes your code for maximum energy efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`inline-flex p-4 rounded-xl ${feature.color} mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">The Greenline Advantage</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              "Greenline cuts cloud compute carbon—no need to change workflows. 
              Our system integrates seamlessly with your existing development pipeline while delivering measurable sustainability impact."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Measurable Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For 1000 developers, Greenline delivers $7.5M in annual savings — 
              equivalent to taking 500,000 cars off the road.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <metric.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</h3>
                <p className="text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Code?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join the sustainable coding revolution. Start reducing your carbon footprint 
              and saving costs with Greenline today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
                >
                  Try Demo Now
                </motion.button>
              </Link>
              <Link to="/roi-calculator">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  Calculate Your Savings
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default HomePage;