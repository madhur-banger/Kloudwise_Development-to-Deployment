import { ArrowRight, Cloud, Code, Server, Database, Shield, GitBranch } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Home = () => {
  const features = [
    {
      name: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies. From responsive designs to progressive web apps, we deliver solutions that drive business growth.',
      icon: Code,
    },
    {
      name: 'Cloud Solutions',
      description: 'End-to-end cloud services including migration, optimization, and management. We help you leverage AWS, Azure, and GCP to their full potential.',
      icon: Cloud,
    },
    {
      name: 'DevOps & SRE',
      description: 'Implement CI/CD pipelines, infrastructure as code, and site reliability engineering practices to enhance your development workflow.',
      icon: GitBranch,
    },
    {
      name: 'Web Hosting',
      description: 'Secure, scalable hosting solutions optimized for performance. We manage the infrastructure so you can focus on your business.',
      icon: Server,
    },
    {
      name: 'Cloud Migration',
      description: 'Seamless transition to the cloud with minimal disruption. Our experts ensure a smooth migration while optimizing costs and performance.',
      icon: Database,
    },
    {
      name: 'Security & Compliance',
      description: 'Enterprise-grade security implementation with continuous monitoring and compliance management for peace of mind.',
      icon: Shield,
    }
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
              className="mx-auto max-w-3xl text-center"
            >
              <motion.h1 
                variants={itemVariants}
                className="mt-5 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-4"
              >
                Transform Your Digital Future with{' '}
                <span className="gradient-text">KloudWise</span>
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="mt-10 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                From web development to cloud infrastructure, we deliver end-to-end technology solutions 
                that drive innovation and growth. Our expert team brings enterprise-grade capabilities 
                to businesses of all sizes.
              </motion.p>
              <motion.div 
                variants={itemVariants}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Link
                  to="/services"
                  className="gradient-bg px-8 py-4 text-base font-semibold text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Explore Solutions
                </Link>
                <Link
                  to="/contact"
                  className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100 flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Schedule Consultation <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl lg:text-center"
          >
            <h2 className="text-base font-semibold leading-7 gradient-text">
              Comprehensive Technology Solutions
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Your Partner in Digital Excellence
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We combine technical expertise with business acumen to deliver solutions 
              that drive real-world results. From concept to deployment, we're with you 
              every step of the way.
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
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg gradient-bg glow">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-8 text-gray-900 dark:text-white">
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