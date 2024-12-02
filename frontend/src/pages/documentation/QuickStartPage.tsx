import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function QuickStartPage() {
  const sections = [
    {
      title: 'Installation',
      content: [
        'Install via npm: ',
        'Or use yarn: `yarn add `',
        'Verify installation:`'
      ]
    },
    {
      title: 'Basic Usage',
      content: [
        'Import the main module:`',
        'Initialize the client: ',
        'Start using methods: '
      ]
    },
    {
      title: 'Configuration',
      content: [
        'Create a configuration object with your credentials',
        'Set environment variables for sensitive information',
        'Configure logging and error handling'
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Quick Start Guide
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-100 max-w-2xl mx-auto">
            Get up and running with SaaS.io in minutes
          </p>
        </motion.div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-200 dark:bg-slate-800 rounded-lg p-6 border border-slate-700"
            >
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2 text-gray-800 dark:text-gray-100">
                {section.content.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2 text-blue-500">●</span>
                    <code className="bg-slate-50 dark:bg-slate-900 rounded px-2 py-1 text-sm">
                      {item}
                    </code>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link 
            to="/documentation"
            className="px-6 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-opacity-90 transition-opacity"
          >
            Back to Documentation
          </Link>
        </motion.div>
      </div>
    </div>
  )
}