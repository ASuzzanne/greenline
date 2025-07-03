import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  DollarSign, 
  Users, 
  Code, 
  Zap, 
  Leaf, 
  TrendingUp,
  Building,
  Server,
  Cloud
} from 'lucide-react';

const ROICalculatorPage = () => {
  const [inputs, setInputs] = useState({
    developers: 100,
    linesOfCode: 500000,
    cloudSpend: 50000,
    mainframeHours: 1000,
    energyCostPerKwh: 0.12
  });

  const [results, setResults] = useState({
    energySavings: 0,
    costSavings: 0,
    carbonReduction: 0,
    productivityGains: 0,
    roiPercentage: 0,
    paybackMonths: 0
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const { developers, linesOfCode, cloudSpend, mainframeHours, energyCostPerKwh } = inputs;
    
    // Energy savings calculations (based on industry averages and Greenline efficiency)
    const energySavingsKwh = (linesOfCode / 1000) * 0.8 * developers * 0.3; // 30% average reduction
    const energyCostSavings = energySavingsKwh * energyCostPerKwh * 12; // Annual
    
    // Cloud cost savings (15-25% typical reduction)
    const cloudCostSavings = cloudSpend * 0.2 * 12; // 20% reduction annually
    
    // Mainframe MIPS savings (20-30% reduction)
    const mainframeSavings = mainframeHours * 150 * 0.25 * 12; // $150/hour, 25% reduction
    
    // Productivity gains (developers spend less time on performance issues)
    const productivitySavings = developers * 85000 * 0.05; // 5% productivity gain, $85k avg salary
    
    const totalSavings = energyCostSavings + cloudCostSavings + mainframeSavings + productivitySavings;
    
    // Carbon reduction (kg CO2 equivalent)
    const carbonReduction = energySavingsKwh * 0.4; // 0.4 kg CO2 per kWh average
    
    // ROI calculation (assuming Greenline cost of $50 per developer per month)
    const greenlineCost = developers * 50 * 12; // Annual cost
    const roi = ((totalSavings - greenlineCost) / greenlineCost) * 100;
    const paybackMonths = greenlineCost / (totalSavings / 12);

    setResults({
      energySavings: Math.round(energySavingsKwh),
      costSavings: Math.round(totalSavings),
      carbonReduction: Math.round(carbonReduction),
      productivityGains: Math.round(productivitySavings),
      roiPercentage: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10
    });
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  const inputFields = [
    {
      key: 'developers',
      label: 'Number of Developers',
      icon: Users,
      min: 1,
      max: 10000,
      step: 1,
      suffix: 'developers'
    },
    {
      key: 'linesOfCode',
      label: 'Lines of Code (thousands)',
      icon: Code,
      min: 1,
      max: 10000,
      step: 1,
      suffix: 'k lines'
    },
    {
      key: 'cloudSpend',
      label: 'Monthly Cloud Spend',
      icon: Cloud,
      min: 0,
      max: 1000000,
      step: 1000,
      prefix: '$',
      suffix: '/month'
    },
    {
      key: 'mainframeHours',
      label: 'Mainframe Hours/Month',
      icon: Server,
      min: 0,
      max: 10000,
      step: 10,
      suffix: 'hours'
    },
    {
      key: 'energyCostPerKwh',
      label: 'Energy Cost per kWh',
      icon: Zap,
      min: 0.05,
      max: 0.50,
      step: 0.01,
      prefix: '$',
      suffix: '/kWh'
    }
  ];

  const resultCards = [
    {
      title: 'Annual Cost Savings',
      value: `$${results.costSavings.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Energy Savings',
      value: `${results.energySavings.toLocaleString()} kWh`,
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Carbon Reduction',
      value: `${results.carbonReduction.toLocaleString()} kg CO₂`,
      icon: Leaf,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'ROI Percentage',
      value: `${results.roiPercentage}%`,
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl mr-4">
              <Calculator className="w-12 h-12 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-2">ROI Calculator</h1>
              <p className="text-xl text-gray-600">Calculate your potential savings with Greenline</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Building className="w-6 h-6 mr-3 text-blue-600" />
              Your Organization
            </h2>
            
            <div className="space-y-6">
              {inputFields.map((field, index) => (
                <motion.div
                  key={field.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <field.icon className="w-4 h-4 mr-2 text-gray-500" />
                    {field.label}
                  </label>
                  <div className="relative">
                    {field.prefix && (
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        {field.prefix}
                      </span>
                    )}
                    <input
                      type="number"
                      min={field.min}
                      max={field.max}
                      step={field.step}
                      value={inputs[field.key]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
                        field.prefix ? 'pl-8' : ''
                      }`}
                    />
                    {field.suffix && (
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                        {field.suffix}
                      </span>
                    )}
                  </div>
                  <input
                    type="range"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={inputs[field.key]}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Results Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resultCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg ${card.bgColor}`}>
                      <card.icon className={`w-5 h-5 ${card.color}`} />
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-gray-600 mb-1">{card.title}</h3>
                  <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Detailed Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">Savings Breakdown</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Energy Cost Savings</span>
                  <span className="font-semibold text-green-600">
                    ${Math.round(results.energySavings * inputs.energyCostPerKwh * 12).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Cloud Infrastructure Savings</span>
                  <span className="font-semibold text-green-600">
                    ${Math.round(inputs.cloudSpend * 0.2 * 12).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Mainframe MIPS Savings</span>
                  <span className="font-semibold text-green-600">
                    ${Math.round(inputs.mainframeHours * 150 * 0.25 * 12).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Developer Productivity Gains</span>
                  <span className="font-semibold text-green-600">
                    ${results.productivityGains.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 pt-4 border-t-2 border-gray-200">
                  <span className="text-lg font-bold text-gray-800">Total Annual Savings</span>
                  <span className="text-lg font-bold text-green-600">
                    ${results.costSavings.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Payback Period */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Investment Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-green-100 mb-1">Payback Period</p>
                  <p className="text-3xl font-bold">{results.paybackMonths} months</p>
                </div>
                <div>
                  <p className="text-green-100 mb-1">3-Year ROI</p>
                  <p className="text-3xl font-bold">{Math.round(results.roiPercentage * 3)}%</p>
                </div>
              </div>
              <p className="mt-4 text-green-100">
                Greenline pays for itself in under {Math.ceil(results.paybackMonths)} months, 
                delivering substantial long-term value for your organization.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Environmental Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Environmental Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {Math.round(results.carbonReduction / 1000)} tons CO₂
              </h3>
              <p className="text-gray-600">Annual carbon reduction equivalent</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {Math.round(results.carbonReduction / 4.6)} cars
              </h3>
              <p className="text-gray-600">Equivalent cars removed from roads</p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {Math.round(results.energySavings / 10656)} homes
              </h3>
              <p className="text-gray-600">Annual energy for average homes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROICalculatorPage;