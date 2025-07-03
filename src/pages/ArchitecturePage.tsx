import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Brain, 
  Zap, 
  Database, 
  GitBranch, 
  Code, 
  BarChart3, 
  Cloud, 
  Server, 
  Activity, 
  Shield, 
  Settings,
  Cpu,
  HardDrive,
  Network,
  Gauge,
  Leaf,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  Target
} from 'lucide-react';

const LayerCard = ({ title, description, components, color, icon: Icon, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className={`relative bg-white rounded-2xl shadow-lg border border-gray-200 p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center mb-6">
        <motion.div 
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
          className={`p-4 rounded-xl mr-4 ${color}`}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {components.map((component, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.02 }}
            className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
          >
            <component.icon className="w-5 h-5 text-gray-600 mr-3 flex-shrink-0" />
            <div>
              <span className="font-semibold text-gray-800 block">{component.name}</span>
              <span className="text-sm text-gray-600">{component.description}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ConnectorLine = () => (
  <div className="flex justify-center my-8">
    <div className="w-1 h-16 bg-gradient-to-b from-green-400 to-green-600 rounded-full relative">
      <motion.div 
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white shadow-lg"
      />
    </div>
  </div>
);

const ArchitecturePage = () => {
  const layers = [
    {
      title: "Application Layer",
      description: "Greenline Integrations & User Interfaces",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      icon: Monitor,
      components: [
        { name: "CI/CD Pipelines", description: "Jenkins, GitLab, GitHub Actions", icon: GitBranch },
        { name: "Developer IDEs", description: "IntelliJ, Eclipse, VS Code", icon: Code },
        { name: "Green Dashboards", description: "Score visualizations & metrics", icon: BarChart3 },
        { name: "Code Repositories", description: "Git, Bitbucket, Azure DevOps", icon: Database },
        { name: "ESG Reporting", description: "Compliance & sustainability tools", icon: TrendingUp },
        { name: "Policy Enforcement", description: "PR blockers & threshold alerts", icon: Shield }
      ]
    },
    {
      title: "Analytics & Decision Layer",
      description: "Greenline Intelligence Core",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: Brain,
      components: [
        { name: "Static Code Analysis", description: "Java, COBOL, SQL, Shell parsing", icon: Code },
        { name: "Heuristic Analysis", description: "Context-aware inefficiency detection", icon: Target },
        { name: "Infra-Aware Modeling", description: "Cloud, Mainframe, On-Prem costs", icon: Cloud },
        { name: "Energy Estimator", description: "kWh & CO₂ impact calculations", icon: Leaf },
        { name: "Ranking Engine", description: "Issue prioritization by energy impact", icon: TrendingUp },
        { name: "Green Score Engine", description: "0-100 efficiency scoring system", icon: Gauge }
      ]
    },
    {
      title: "Communication & Processing Layer",
      description: "Data Flow & Integration Hub",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      icon: Network,
      components: [
        { name: "Data Collectors", description: "Git hooks, commits, build logs", icon: Database },
        { name: "Feedback Distribution", description: "IDE plugins, CI/CD notifications", icon: Activity },
        { name: "API Gateway", description: "RESTful services & webhooks", icon: Network },
        { name: "Message Queue", description: "Async processing & job management", icon: Settings },
        { name: "Policy Engine", description: "Rule evaluation & enforcement", icon: CheckCircle },
        { name: "Alert System", description: "Threshold monitoring & notifications", icon: AlertTriangle }
      ]
    },
    {
      title: "Runtime & Monitoring Layer",
      description: "Execution Context & Environment Intelligence",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      icon: Server,
      components: [
        { name: "Cloud Environments", description: "AWS, GCP, Azure workloads", icon: Cloud },
        { name: "Mainframe Systems", description: "z/OS, MIPS consumption tracking", icon: Server },
        { name: "On-Premise Servers", description: "Physical infrastructure monitoring", icon: HardDrive },
        { name: "Profiling Metadata", description: "CPU, Memory, I/O, Latency data", icon: Cpu },
        { name: "Historical Database", description: "Green patterns & refactoring history", icon: Database },
        { name: "Scope 2 Tracker", description: "Electricity to emissions mapping", icon: Zap }
      ]
    }
  ];

  const techStack = [
    { category: "Frontend", technologies: "React.js, TypeScript, Tailwind CSS" },
    { category: "Backend", technologies: "Node.js, Python Flask, Express" },
    { category: "Code Analysis", technologies: "Custom Java/COBOL Parsers, AST Analysis" },
    { category: "Machine Learning", technologies: "TensorFlow, Scikit-learn, Pattern Recognition" },
    { category: "Database", technologies: "PostgreSQL, Redis, InfluxDB" },
    { category: "Infrastructure", technologies: "Docker, Kubernetes, AWS/GCP" },
    { category: "Integration", technologies: "REST APIs, GraphQL, Webhooks" },
    { category: "Monitoring", technologies: "Prometheus, Grafana, ELK Stack" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mr-4"
            >
              <Leaf className="w-12 h-12 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-2">Greenline Architecture</h1>
              <p className="text-xl text-gray-600">Sustainable Code Intelligence Platform</p>
            </div>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">System Overview</h2>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto mb-8">
            Greenline's layered architecture provides comprehensive code analysis, energy optimization, 
            and sustainability reporting across diverse banking technology stacks. Each layer serves a 
            specific purpose in the intelligent code optimization pipeline.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Monitor className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Integration</h3>
              <p className="text-sm text-gray-600">Seamless workflow integration</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Intelligence</h3>
              <p className="text-sm text-gray-600">AI-powered analysis</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Network className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Processing</h3>
              <p className="text-sm text-gray-600">Data flow management</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Server className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800">Runtime</h3>
              <p className="text-sm text-gray-600">Environment monitoring</p>
            </div>
          </div>
        </motion.div>

        {/* Architecture Layers */}
        <div className="space-y-8 mb-16">
          {layers.map((layer, index) => (
            <div key={index}>
              <LayerCard 
                {...layer} 
                delay={index}
              />
              {index < layers.length - 1 && <ConnectorLine />}
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="font-bold text-gray-800 mb-3">{stack.category}</h3>
                <p className="text-sm text-gray-600">{stack.technologies}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="p-3 bg-green-100 rounded-lg inline-block mb-3">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Carbon Aware</h3>
            <p className="text-gray-600">ESG Compliance Ready</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="p-3 bg-blue-100 rounded-lg inline-block mb-3">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">AI-Powered</h3>
            <p className="text-gray-600">Heuristic Analysis</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="p-3 bg-purple-100 rounded-lg inline-block mb-3">
              <Server className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Multi-Platform</h3>
            <p className="text-gray-600">Cloud, Mainframe, On-Prem</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="p-3 bg-orange-100 rounded-lg inline-block mb-3">
              <Gauge className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Real-Time</h3>
            <p className="text-gray-600">Continuous Monitoring</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArchitecturePage;