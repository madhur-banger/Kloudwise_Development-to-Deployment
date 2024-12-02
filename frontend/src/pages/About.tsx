import { GitBranch, Globe, Users } from 'lucide-react'
import { motion } from 'framer-motion';

const About = () => {
  const team = [
    {
      name: 'Madhur',
      role: 'Cloud Architect and Devops Engineer',
      image: '/Profile-pic.jpeg', // Adjust the path as needed
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (

    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Flex container to split the page */}
        <div className="lg:flex lg:space-x-16">
          {/* Left Section (Madhur's info) */}
          <div className="lg:w-1/3 text-center mb-16 lg:mb-0">
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                // initial="hidden"
                // animate="visible"
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="hover-lift card-shadow rounded-2xl bg-gray-200 dark:bg-gray-800 dark:border dark:border-gray-800 p-8"
              >
                <div className="mb-6 flex h-32 w-32 items-center justify-center mx-auto rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Section (Mission, Values, etc.) */}
          <div className="lg:w-2/3">
            {/* Mission Section */}
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-600 dark:text-gray-300 sm:text-4xl">
                Our Mission
              </p>
              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-300">
                At KloudWise, we're dedicated to helping businesses optimize their AWS infrastructure,
                reduce costs, and maximize cloud efficiency. Our team of experts brings years of
                experience in cloud management and cost optimization.
              </p>
            </div>

            {/* Values Section */}
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-600 dark:text-gray-300">Global Reach</h3>
                  <p className="mt-2 leading-8 text-gray-600 dark:text-gray-300">
                    Serving clients worldwide with cloud optimization solutions
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-600 dark:text-gray-300">Customer First</h3>
                  <p className="mt-2 leading-8 text-gray-600 dark:text-gray-300">
                    Dedicated to providing exceptional service and support
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                    <GitBranch className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-600 dark:text-gray-300">Innovation</h3>
                  <p className="mt-2 leading-8 text-gray-600 dark:text-gray-300">
                    Constantly evolving to meet cloud management challenges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Team Section */}
        {/* If you need to add more team members in the future */}
        {/* <div className="mx-auto mt-32 max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the experts behind CloudWise who are passionate about cloud optimization.
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default About
