import { ArrowLeft, Container, Database, GitBranch, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

const DevOpsTechnology = () => {
  const features = [
    {
      title: 'Kubernetes Cluster Management',
      description: 'Set up, manage, and optimize Kubernetes clusters on AWS EKS for container orchestration.',
      icon: Container,
    },
    {
      title: 'Terraform Infrastructure',
      description: 'Implement infrastructure as code using Terraform for consistent and version-controlled infrastructure.',
      icon: Database,
    },
    {
      title: 'CI/CD Integration',
      description: 'Set up and maintain continuous integration and deployment pipelines for automated software delivery.',
      icon: GitBranch,
    },
    {
      title: 'Container Orchestration',
      description: 'Manage containerized applications with automated scaling, deployment, and monitoring.',
      icon: Terminal,
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
            DevOps Technology
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Modernize your infrastructure with our DevOps solutions. We help you implement
            best practices for container orchestration, infrastructure as code, and continuous delivery.
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
            Ready to modernize your infrastructure?
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Let us help you implement modern DevOps practices in your organization.
          </p>
          <div className="mt-8">
            <button className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevOpsTechnology