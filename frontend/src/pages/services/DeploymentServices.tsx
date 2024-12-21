import { ArrowLeft, Cloud, GitBranch, Rocket, Settings, Shield, Server, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const DeploymentServices = () => {
  const features = [
    {
      title: '3-Tier Cloud Architecture Deployment',
      description: 'Implement a scalable and secure 3-tier architecture on cloud platforms, including separate layers for presentation, application, and data management.',
      icon: Cloud,
    },
    {
      title: 'Automated CI/CD Pipelines',
      description: 'Set up and maintain continuous integration and deployment pipelines that automate your build, test, and deployment processes, ensuring fast and reliable software delivery.',
      icon: Rocket,
    },
    {
      title: 'Infrastructure as Code (IAC)',
      description: 'Automate infrastructure provisioning using tools like Terraform and CloudFormation to ensure consistent and repeatable deployments.',
      icon: Settings,
    },
    {
      title: 'SSL/TLS Configuration & Security',
      description: 'Secure your application and data by implementing SSL/TLS certificates for encryption and ensuring safe communication between servers and clients.',
      icon: Shield,
    },
    {
      title: 'Server Setup & Configuration',
      description: 'Provision, configure, and optimize your servers to meet your application requirements with auto-scaling and load balancing for high availability.',
      icon: Server,
    },
    {
      title: 'Cloud-Native Security Practices',
      description: 'Secure your cloud infrastructure with robust practices, including identity and access management (IAM), VPC setup, security groups, and encryption.',
      icon: Lock,
    },
    {
      title: 'Multi-Environment Management',
      description: 'Efficiently manage multiple environments (development, staging, production) with proper isolation, configuration management, and secure access controls.',
      icon: GitBranch,
    },
    {
      title: 'Comprehensive Monitoring & Logging',
      description: 'Enable end-to-end monitoring, logging, and alerting systems to track performance, detect issues, and ensure smooth operation of your applications.',
      icon: Cloud,
    },
    {
      title: 'High Availability & Auto-Scaling',
      description: 'Ensure 24/7 uptime and smooth operation with auto-scaling configurations and high-availability setups like load balancing and failover mechanisms.',
      icon: Rocket,
    },
    {
      title: 'Continuous Security Auditing & Updates',
      description: 'Regularly audit your cloud infrastructure, deploy security patches, and implement automated security checks to ensure compliance and mitigate risks.',
      icon: Shield,
    },
  ]

  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Services
        </Link>

        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Deployment Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Streamline your application deployment on AWS and other cloud platforms with our comprehensive deployment services. 
            We help you automate deployment, implement robust security measures, and optimize for high availability.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.title} className="relative bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Ready to optimize your deployment process?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get in touch with us to discuss how we can help streamline your AWS deployments and ensure your application’s success with modern infrastructure best practices.
          </p>
          <div className="mt-8">
            <button className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeploymentServices
