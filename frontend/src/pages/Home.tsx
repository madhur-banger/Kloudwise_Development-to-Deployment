import { ArrowRight, Cloud, DollarSign, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  const features = [
    {
      name: 'Cost Management',
      description: 'Track and optimize your AWS spending with advanced analytics and recommendations.',
      icon: DollarSign,
    },
    {
      name: 'Cloud Security',
      description: 'Ensure your AWS infrastructure is secure and compliant with best practices.',
      icon: Shield,
    },
    {
      name: 'Resource Optimization',
      description: 'Optimize your cloud resources for maximum efficiency and performance.',
      icon: Cloud,
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
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative isolate pt-24 dot-pattern dark:bg-gray-900">
        <div className="absolute inset-x-0 top-0 h-96 gradient-animate opacity-20"></div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="mx-auto max-w-2xl text-center"
            >
              <motion.h1 
  variants={itemVariants}
  className="mt-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-4"
>
  Design Build Deploy{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <span className="gradient-text">Kloudwise</span>
</motion.h1>
<motion.p 
  variants={itemVariants}
  className="mt-10 text-lg leading-8 text-gray-600 dark:text-gray-300"
>
  KloudWise helps you optimize costs, manage resources, and scale your AWS infrastructure
  effectively. Get started today and take control of your cloud spending.
</motion.p>
              <motion.div 
                variants={itemVariants}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Link
                  to="/services"
                  className="gradient-bg px-6 py-3 text-sm font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/about"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-gray-200 dark:bg-gray-800 transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-semibold leading-7 gradient-text">
              Better Cloud Management
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to manage your AWS infrastructure
            </p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          >
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <motion.div
                  key={feature.name}
                  variants={itemVariants}
                  className="hover-lift card-shadow rounded-2xl bg-white dark:bg-gray-900 dark:border dark:border-gray-800 p-8"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg gradient-bg glow">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home