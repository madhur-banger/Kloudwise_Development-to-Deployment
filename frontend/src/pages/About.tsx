import { Globe, Users, Target, Lightbulb, Shield, Rocket } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const About = () => {
  // Original team member (commented out as requested)
  // const originalTeam = [
  //   {
  //     name: 'Madhur',
  //     role: 'Cloud Architect and Devops Engineer',
  //     image: '/Profile-pic.jpeg',
  //   },
  // ]

  const stats = [
    { value: '5+', label: ' Clients' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Coverage' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence in Delivery',
      description: 'We maintain the highest standards in every project, ensuring world-class solutions that exceed expectations.'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building long-term partnerships through transparent communication and consistent delivery.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Staying ahead of technology trends to provide cutting-edge solutions for our clients.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with scalable solutions that meet international standards.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Working as an extension of your team to achieve your business objectives.'
    },
    {
      icon: Rocket,
      title: 'Continuous Growth',
      description: 'Investing in our team and technologies to deliver ever-improving solutions.'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate pt-24">
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
                className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
              >
                Empowering Digital Innovation
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
              >
                KloudWise is a premier technology solutions provider, delivering enterprise-grade 
                web development, cloud solutions, and digital transformation services to businesses worldwide.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 gradient-text">Our Mission</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Driving Digital Excellence
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              At KloudWise, we're committed to helping businesses thrive in the digital age. Our team of 
              experienced engineers, architects, and consultants works tirelessly to deliver innovative 
              solutions that drive growth and efficiency. We combine technical expertise with business 
              acumen to transform challenges into opportunities.
            </p>
          </div>

          {/* Values Grid */}
          <div className="mx-auto mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-start p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-bg">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
            Let's discuss how KloudWise can help you achieve your digital transformation goals.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About