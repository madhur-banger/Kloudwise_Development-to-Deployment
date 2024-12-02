import { Cloud, Database, LineChart, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: 'Deployment Services',
      icon: Cloud,
      description: 'Streamline your application deployment on AWS with our comprehensive deployment services.',
      path: '/services/deployment',
      features: [
        'Automated deployment pipelines',
        'Infrastructure as Code support',
        'Multi-environment management',
        'Rolling updates and rollbacks',
      ],
    },
    {
      title: 'Serverless Solutions',
      icon: Terminal,
      description: 'Build scalable applications with AWS Lambda and API Gateway integration.',
      path: '/services/serverless',
      features: [
        'Lambda function management',
        'API Gateway configuration',
        'Event-driven architecture',
        'Serverless monitoring',
      ],
    },
    {
      title: 'Cost Management',
      icon: LineChart,
      description: 'Optimize your AWS spending with advanced cost management tools.',
      path: '/services/cost-management',
      features: [
        'Cost allocation tracking',
        'Budget management',
        'Usage optimization',
        'Cost forecasting',
      ],
    },
    {
      title: 'DevOps Technology',
      icon: Database,
      description: 'Implement modern DevOps practices with Kubernetes and Terraform.',
      path: '/services/devops',
      features: [
        'Kubernetes cluster management',
        'Terraform infrastructure',
        'CI/CD integration',
        'Container orchestration',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="py-12 sm:py-16 lg:py-24 dot-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-base font-semibold leading-7 gradient-text">
            Our Services
          </motion.h1>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Comprehensive Software Management Solutions
          </p>
          <motion.p variants={itemVariants} className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
            Discover our range of services designed to help you manage and optimize your Software infrastructure.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="mx-auto mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <Link to={service.path}>
                  <div className="flex flex-col h-full">
                    {/* Service Header */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-bg glow">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:gradient-text transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="mt-5 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="mt-8 space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1.5">
                            <div className="h-2 w-2 rounded-full bg-blue-600 group-hover:gradient-bg transition-colors duration-300" />
                          </div>
                          <span className="text font-semibold leading-7 text-gray-900 dark:text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services