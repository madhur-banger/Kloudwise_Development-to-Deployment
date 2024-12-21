import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const SaasTemplate = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Services
        </Link>

        
       <div className="mx-auto max-w-2xl lg:text-center"> 
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            SaaS Template for Your Business
          </h1>
          <p className="mt-6  text-lg leading-8 text-gray-600 dark:text-gray-300">
            Kickstart your SaaS product with this modern boilerplate template. Quickly deploy, customize, and scale your SaaS application.
          </p>
        </div>

        <div className="mx-auto max-w-xl lg:text-center"> 
            <a 
              href="https://demo.cloudevopsnow.com" 
              className=" font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <br></br>
           <h3 className="  tracking-tight underline bold text-pink-400 hover:text-blue-700 dark:text-blue-200 dark:hover:text-blue-300 sm:text-4xl">
            demo.kloudwise.com
          </h3>
            </a>
          </div>


        <div className="mt-8">
    <img 
      src="../src/images/saas-template.png" 
      className="w-full h-auto rounded-lg shadow-md"
    />
  </div>
  


        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  {/* Add your icon here */}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Fully Customizable</h3>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                Easily customize the template to suit your SaaS application's needs. Modify UI components, data models, and integrations.
              </p>
            </div>
            <div className="relative bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  {/* Add your icon here */}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Efficient User Management</h3>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
                Implement robust user authentication and management features out of the box with integrated login and registration systems.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get Started with Your SaaS Product
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Take the first step in building your SaaS product. Easily deploy and extend with this boilerplate template.
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

export default SaasTemplate