import { Cloud, LineChart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: 'Web Development Solutions',
      icon: Cloud,
      description: 'Accelerate your web application development with customizable landing pages, seamless deployment, and optimized cloud infrastructure on AWS.',
      path: '/services/web-development',
      features: [
        'Full-stack web application development with responsive landing pages',
        'Fast and secure deployment with seamless CI/CD integration on AWS',
        'Mobile-first design for enhanced user experience and SEO optimization',
        'Scalable cloud architecture, database integration, and performance monitoring',
      ],
      

    },
    {
    title: 'Scalable Cloud Deployment Solutions',
    icon: Cloud,
    description: 'Design, implement, and manage highly scalable, secure, and resilient cloud applications with AWS infrastructure.',
    path: '/services/deployment',
    features: [
      'End-to-end cloud architecture design with secure infrastructure and high availability',
      'Automated server provisioning, auto-scaling, and disaster recovery solutions',
      'Comprehensive monitoring, alerting, and seamless third-party service integration',
      'Optimized performance with load balancing, failover mechanisms, and data redundancy',
    ],
    

    },
    
    // {
    //   title: 'Saas Templates',
    //   icon: Cloud,
    //   description: 'Streamline your SaaS application journey with expertly designed landing pages and fast, efficient deployment on AWS.',
    //   path: '/services/serverless',
    //   features: [
    //     'Customizable and responsive landing page templates',
    //     'Seamless CI/CD pipeline integration',
    //     'Optimized for fast deployment on AWS',
    //   ],

    // },
    
    {
      title: 'Cost Management',
      icon: LineChart,
      description: 'Optimize your AWS spending with advanced cost management tools to help track, forecast, and reduce unnecessary costs.',
      path: '/services/cost-management',
      features: [
        'Track and allocate costs effectively across teams and projects, ensuring transparent cost reporting and identification of optimization opportunities.',
        'Implement budget management and receive alerts to monitor and control spending, preventing overspending with real-time notifications.',
        'Optimize resource usage by identifying idle and underutilized resources, including stalled instances and volumes, and automate their deletion to reduce costs.',
        'Leverage cost forecasting tools and optimization calculators, like AWS Cost Explorer, to predict future spending and implement cost-saving strategies such as Reserved and Spot Instances.',
      ],
    }
    
    // {
    //   title: 'DevOps Technology',
    //   icon: Database,
    //   description: 'Implement modern DevOps practices with Kubernetes and Terraform.',
    //   path: '/services/devops',
    //   features: [
    //     'Kubernetes cluster management',
    //     'Terraform infrastructure',
    //     'CI/CD integration',
    //     'Container orchestration',
    //   ],
    // },
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