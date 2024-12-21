// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {/* <Link to="/" className="text-gray-500 hover:text-gray-600">
            Home
          </Link>
          <Link to="/products" className="text-gray-500 hover:text-gray-600">
            Products
          </Link>
          <Link to="/about" className="text-gray-500 hover:text-gray-600">
            About
          </Link> */}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 dark:text-gray-100 text-gray-00">
            &copy; 2024 Kloudwise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer