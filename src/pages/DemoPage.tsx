import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Play, 
  CheckCircle, 
  AlertTriangle, 
  Zap, 
  Leaf, 
  TrendingUp,
  Copy,
  Download
} from 'lucide-react';

const DemoPage = () => {
  const [activeTab, setActiveTab] = useState('java');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const codeExamples = {
    java: `public class DataProcessor {
    public List<Customer> processCustomers(List<Customer> customers) {
        List<Customer> result = new ArrayList<>();
        
        // Inefficient nested loops - High energy cost
        for (Customer customer : customers) {
            for (Transaction transaction : getAllTransactions()) {
                if (transaction.getCustomerId().equals(customer.getId())) {
                    customer.addTransaction(transaction);
                }
            }
            result.add(customer);
        }
        
        // Inefficient database calls in loop
        for (Customer customer : result) {
            CustomerProfile profile = database.getProfile(customer.getId());
            customer.setProfile(profile);
        }
        
        return result;
    }
}`,
    cobol: `IDENTIFICATION DIVISION.
PROGRAM-ID. CUSTOMER-PROC.

DATA DIVISION.
WORKING-STORAGE SECTION.
01 WS-CUSTOMER-REC.
   05 WS-CUST-ID        PIC 9(10).
   05 WS-CUST-NAME      PIC X(30).
   05 WS-BALANCE        PIC 9(10)V99.

PROCEDURE DIVISION.
MAIN-PROCESS.
    PERFORM VARYING WS-COUNTER FROM 1 BY 1 
            UNTIL WS-COUNTER > 10000
        PERFORM READ-CUSTOMER-FILE
        PERFORM PROCESS-CUSTOMER
        PERFORM WRITE-CUSTOMER-FILE
    END-PERFORM.

READ-CUSTOMER-FILE.
    * Inefficient: Reading entire file for each iteration
    READ CUSTOMER-FILE INTO WS-CUSTOMER-REC
    AT END MOVE 'Y' TO WS-EOF-FLAG
    END-READ.`,
    sql: `-- Inefficient query with multiple subqueries
SELECT c.customer_id, c.name, 
       (SELECT COUNT(*) FROM transactions t1 
        WHERE t1.customer_id = c.customer_id) as transaction_count,
       (SELECT SUM(amount) FROM transactions t2 
        WHERE t2.customer_id = c.customer_id) as total_amount,
       (SELECT MAX(transaction_date) FROM transactions t3 
        WHERE t3.customer_id = c.customer_id) as last_transaction
FROM customers c
WHERE c.status = 'ACTIVE'
ORDER BY c.customer_id;

-- Another inefficient pattern
SELECT * FROM large_table 
WHERE UPPER(name) LIKE '%SMITH%'
AND YEAR(created_date) = 2023;`
  };

  const analysisResults = {
    java: {
      greenScore: 34,
      issues: [
        {
          type: 'error',
          line: 6,
          message: 'Nested loop with O(n²) complexity',
          impact: 'High CPU usage, estimated 2.3kWh per 1000 records',
          suggestion: 'Use HashMap for O(1) lookups instead of nested iteration'
        },
        {
          type: 'warning',
          line: 15,
          message: 'Database calls in loop (N+1 problem)',
          impact: 'Network overhead, estimated 1.8kWh per 1000 records',
          suggestion: 'Batch database calls or use JOIN queries'
        },
        {
          type: 'info',
          line: 3,
          message: 'ArrayList initialization without capacity',
          impact: 'Memory reallocation overhead',
          suggestion: 'Initialize with expected capacity'
        }
      ],
      energyImpact: {
        current: '4.1 kWh per 1000 records',
        optimized: '0.8 kWh per 1000 records',
        savings: '80% energy reduction'
      }
    },
    cobol: {
      greenScore: 28,
      issues: [
        {
          type: 'error',
          line: 12,
          message: 'File I/O in tight loop',
          impact: 'Excessive MIPS consumption, high mainframe costs',
          suggestion: 'Batch file operations or use in-memory processing'
        },
        {
          type: 'warning',
          line: 20,
          message: 'Inefficient file reading pattern',
          impact: 'Unnecessary I/O operations',
          suggestion: 'Read file once into working storage'
        }
      ],
      energyImpact: {
        current: '850 MIPS per batch',
        optimized: '120 MIPS per batch',
        savings: '86% MIPS reduction'
      }
    },
    sql: {
      greenScore: 22,
      issues: [
        {
          type: 'error',
          line: 2,
          message: 'Multiple correlated subqueries',
          impact: 'Exponential query execution time',
          suggestion: 'Use JOINs or window functions'
        },
        {
          type: 'error',
          line: 12,
          message: 'Function on column in WHERE clause',
          impact: 'Prevents index usage, full table scan',
          suggestion: 'Create functional index or restructure query'
        }
      ],
      energyImpact: {
        current: '12.5 seconds execution time',
        optimized: '0.3 seconds execution time',
        savings: '98% faster execution'
      }
    }
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const currentResults = analysisResults[activeTab];

  // Function to add line numbers to code
  const addLineNumbers = (code) => {
    const lines = code.split('\n');
    return lines.map((line, index) => ({
      number: index + 1,
      content: line
    }));
  };

  const numberedCode = addLineNumbers(codeExamples[activeTab]);

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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Greenline Demo
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how Greenline analyzes your code for energy efficiency. 
            Upload your code or try our sample banking scenarios.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Code Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gray-800 px-6 py-4">
              <div className="flex items-center justify-between">
                <h2 className="text-white font-semibold flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Code Analysis
                </h2>
                <div className="flex space-x-2">
                  <button className="w-3 h-3 bg-red-500 rounded-full"></button>
                  <button className="w-3 h-3 bg-yellow-500 rounded-full"></button>
                  <button className="w-3 h-3 bg-green-500 rounded-full"></button>
                </div>
              </div>
            </div>

            {/* Language Tabs */}
            <div className="flex border-b border-gray-200">
              {Object.keys(codeExamples).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={`px-6 py-3 font-medium text-sm transition-colors duration-200 ${
                    activeTab === lang
                      ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Code Editor with Line Numbers */}
            <div className="p-6">
              <div className="bg-gray-900 rounded-lg overflow-hidden font-mono text-sm">
                <div className="flex">
                  {/* Line Numbers */}
                  <div className="bg-gray-800 px-4 py-4 text-gray-500 select-none border-r border-gray-700">
                    {numberedCode.map((line) => (
                      <div key={line.number} className="leading-6 text-right min-w-[2rem]">
                        {line.number}
                      </div>
                    ))}
                  </div>
                  
                  {/* Code Content */}
                  <div className="flex-1 p-4 overflow-x-auto">
                    <pre className="text-gray-300 whitespace-pre">
                      {numberedCode.map((line) => (
                        <div key={line.number} className="leading-6">
                          {line.content}
                        </div>
                      ))}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-2">
                  <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </button>
                  <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center disabled:opacity-50"
                >
                  {isAnalyzing ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Analyze Code
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-4">
              <h2 className="text-white font-semibold flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Analysis Results
              </h2>
            </div>

            <div className="p-6">
              {!showResults ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500">Click "Analyze Code" to see results</p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Green Score */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-800">Green Score</span>
                      <span className={`text-2xl font-bold ${
                        currentResults.greenScore >= 70 ? 'text-green-600' :
                        currentResults.greenScore >= 40 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {currentResults.greenScore}/100
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${currentResults.greenScore}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-3 rounded-full ${
                          currentResults.greenScore >= 70 ? 'bg-green-500' :
                          currentResults.greenScore >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Issues */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Issues Found</h3>
                    <div className="space-y-3">
                      {currentResults.issues.map((issue, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className={`p-4 rounded-lg border-l-4 ${
                            issue.type === 'error' ? 'bg-red-50 border-red-500' :
                            issue.type === 'warning' ? 'bg-yellow-50 border-yellow-500' :
                            'bg-blue-50 border-blue-500'
                          }`}
                        >
                          <div className="flex items-start">
                            {issue.type === 'error' ? (
                              <AlertTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            ) : issue.type === 'warning' ? (
                              <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                            ) : (
                              <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <div className="flex items-center mb-1">
                                <span className="font-semibold text-gray-800 bg-gray-100 px-2 py-1 rounded text-sm mr-2">
                                  Line {issue.line}
                                </span>
                                <span className="text-sm text-gray-600">{issue.message}</span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2">{issue.impact}</p>
                              <p className="text-sm font-medium text-green-700">{issue.suggestion}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Energy Impact */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Leaf className="w-5 h-5 text-green-600 mr-2" />
                      Energy Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">
                          {currentResults.energyImpact.current}
                        </div>
                        <div className="text-sm text-gray-600">Current Usage</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {currentResults.energyImpact.optimized}
                        </div>
                        <div className="text-sm text-gray-600">After Optimization</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {currentResults.energyImpact.savings}
                        </div>
                        <div className="text-sm text-gray-600">Potential Savings</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Features Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="p-3 bg-green-100 rounded-lg inline-block mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Real-time Analysis</h3>
            <p className="text-gray-600">
              Get instant feedback on energy efficiency as you code, with suggestions for optimization.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="p-3 bg-blue-100 rounded-lg inline-block mb-4">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Multi-Language Support</h3>
            <p className="text-gray-600">
              Supports Java, COBOL, SQL, and Shell scripts commonly used in banking systems.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="p-3 bg-purple-100 rounded-lg inline-block mb-4">
              <Leaf className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Carbon Impact</h3>
            <p className="text-gray-600">
              Visualize the environmental impact of your code changes with CO₂ equivalent metrics.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DemoPage;