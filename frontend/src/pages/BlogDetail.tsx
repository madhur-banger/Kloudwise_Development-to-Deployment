import { ArrowLeft, Calendar, Tag, User } from 'lucide-react'
//import { Trash2 } from 'lucide-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import type { BlogPost } from '../types/Blog'
import ConfirmModal from '../components/ConfirmModal'
import MarkdownPreview from '../components/MarkdownPreview'
import { motion } from 'framer-motion'

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  useEffect(() => {
    // Load posts from localStorage
    const storedPosts = localStorage.getItem('blogs')
    if (storedPosts) {
      try {
        const posts = JSON.parse(storedPosts)
        const foundPost = posts.find((p: BlogPost) => p.id === id)
        if (foundPost) {
          setPost(foundPost)
        }
      } catch (error) {
        console.error('Error parsing blog posts:', error)
      }
    }
  }, [id])

  const handleDelete = () => {
    const storedPosts = localStorage.getItem('blogs')
    if (storedPosts) {
      try {
        const posts = JSON.parse(storedPosts)
        const updatedPosts = posts.filter((p: BlogPost) => p.id !== id)
        localStorage.setItem('blogs', JSON.stringify(updatedPosts))
        navigate('/blog')
      } catch (error) {
        console.error('Error deleting blog post:', error)
      }
    }
  }

  if (!post) {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 ">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mb-8" >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blogs
          </Link>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 ">Blog post not found</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-24 sm:py-32 bg-gray-200 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 ">
        {/* Navigation and Actions */}
        <div className="flex items-center justify-between mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blogs
            </Link>
          </motion.div>

          {/* Commented DELETE Option */}


          {/* <motion.button
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={() => setIsDeleteModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 hover:text-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <Trash2 size={18} />
            Delete Post
          </motion.button> */}
        </div>

        {/* Article Content */}
        <motion.article 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
        >
          {/* Header */}
          <header className="mb-8 border-b border-gray-100 dark:border-gray-700 pb-8">
            <div className="flex items-center gap-x-4 text-xs mb-4">
              <span className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full px-3 py-1.5 font-medium">
                <Tag size={14} />
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 gradient-text">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose dark:prose-invert max-w-none">
            <MarkdownPreview content={post.content} />
          </div>

          {/* Footer */}
          <footer className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Tags:</span>
              <span className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                {post.category}
              </span>
            </div>
          </footer>
        </motion.article>

        {/* Delete Confirmation Modal */}
        <ConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={handleDelete}
          title="Delete Blog Post"
          message="Are you sure you want to delete this blog post? This action cannot be undone."
        />
      </div>
    </div>
  )
}

export default BlogDetail