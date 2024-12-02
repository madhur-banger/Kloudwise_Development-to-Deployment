import { motion } from 'framer-motion'
import { BookOpen, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DocumentationPage() {
  const sections = [
    {
      title: 'Quick Start',
      icon: BookOpen,
      description: 'Get up and running with Kloudwise in minutes',
      path: '/documentation/quick-start',
      links: ['Installation', 'Basic Usage', 'Configuration'],
    },
    {
      title: 'Guides',
      icon: FileText,
      description: 'In-depth guides and tutorials',
      path: '/documentation/guides',
      links: ['Best Practices', 'Security', 'Deployment'],
    },
  ]

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
      <div className="mmx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
        <motion.h1 variants={itemVariants} className="text-base font-semibold leading-7 gradient-text">
            Documentation
          </motion.h1>
          <p className="tmt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to build with Kloudwise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section ) => {
            const Icon = section.icon
            return (
              <Link 
                to={section.path}
                key={section.title}
              >
                <motion.div
                  // initial={{ opacity: 0, y: 20 }}
                  // animate={{ opacity: 1, y: 0 }}
                  // transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-gray-200 dark:bg-gray-800 hover:border-blue-500 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <Icon className="h-6 w-6 text-blue-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-900 dark:text-white mb-4">{section.description}</p>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <span className="text-blue-600  dark:text-blue-400 hover:text-blue-300 transition-colors">
                          {link} →
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Link>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Help?
            </h3>
            <p className="text-white/90 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-md font-medium hover:bg-opacity-90 transition-opacity">
              Contact Support
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}



// import { Calendar, User, Plus } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import type { BlogPost } from '../types/Blog'
// import MarkdownPreview from '../components/MarkdownPreview'

// const Blog = () => {
//   const [posts, setPosts] = useState<BlogPost[]>([])

//   useEffect(() => {
//     // Load posts from localStorage
//     const storedPosts = localStorage.getItem('blogs')
//     if (storedPosts) {
//       setPosts(JSON.parse(storedPosts))
//     }
//   }, [])

// //   return (
// //     <div className="py-24 sm:py-32">
// //       <div className="mx-auto max-w-7xl px-6 lg:px-8">
// //         <div className="mx-auto max-w-2xl lg:text-center">
// //           <h1 className="text-base font-semibold leading-7 gradient-text">Blog</h1>
// //           <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
// //             Latest Articles & Updates
// //           </p>
// //           <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
// //             Stay up to date with the latest in AWS cloud management, cost optimization, and best practices.
// //           </p>
// //         </div>

// //         {/* Write Blog Button */}
// //         <div className="mt-8 flex justify-end">
// //           <Link
// //             to="/blog/new"
// //             className="inline-flex items-center gap-2 gradient-bg px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
// //           >
// //             <Plus size={20} />
// //             Write Blog
// //           </Link>
// //         </div>

// //         <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
// //           {posts.map((post) => (
// //             <article
// //               key={post.id}
// //               className="group flex flex-col bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
// //             >
// //               <div className="p-6 flex flex-col flex-1">
// //                 <div className="flex items-center gap-x-4 text-xs mb-4">
// //                   <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full px-3 py-1.5 font-medium">
// //                     {post.category}
// //                   </span>
// //                 </div>
// //                 <div className="group relative flex flex-col flex-1">
// //                   <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
// //                     <Link to={`/blog/${post.id}`}>
// //                       <span className="absolute inset-0" />
// //                       {post.title}
// //                     </Link>
// //                   </h3>
// //                   <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
// //                     <MarkdownPreview content={post.excerpt} />
// //                   </div>
// //                 </div>
// //                 <div className="mt-6 flex items-center gap-x-4 text-sm border-t border-gray-100 dark:border-gray-700 pt-4">
// //                   <div className="flex items-center gap-x-2 text-gray-600 dark:text-gray-300">
// //                     <User size={16} />
// //                     {post.author}
// //                   </div>
// //                   <div className="flex items-center gap-x-2 text-gray-600 dark:text-gray-300">
// //                     <Calendar size={16} />
// //                     {post.date}
// //                   </div>
// //                 </div>
// //               </div>
// //             </article>
// //           ))}

// //           {posts.length === 0 && (
// //             <div className="col-span-3 text-center py-12">
// //               <p className="text-gray-500 dark:text-gray-400">No blog posts yet. Be the first to write one!</p>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   )
//  }

//  export default Blog