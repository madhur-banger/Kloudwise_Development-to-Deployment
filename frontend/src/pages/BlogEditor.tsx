import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Eye, Edit2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { BlogFormData } from '../types/Blog'
import MarkdownPreview from '../components/MarkdownPreview'

const BlogEditor = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    content: '',
    category: '',
  })
  const [isPreviewMode, setIsPreviewMode] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create a new blog post
    const newPost = {
      id: crypto.randomUUID(),
      ...formData,
      excerpt: formData.content.slice(0, 150) + '...', // Create excerpt from content
      author: 'Admin', // In a real app, this would come from auth
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    }

    // Get existing blogs from localStorage
    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]')
    
    // Add new blog to the beginning of the array
    const updatedBlogs = [newPost, ...existingBlogs]
    
    // Save back to localStorage
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs))

    // Redirect to blogs page
    navigate('/blog')
  }

  const markdownGuide = `
## Markdown Guide

### Headers
# H1 Header
## H2 Header
### H3 Header

### Emphasis
*italic* or _italic_
**bold** or __bold__
**_bold italic_**

### Lists
- Unordered list item
- Another item
  - Subitem

1. Ordered list item
2. Another item

### Links and Images
[Link text](URL)
![Image alt text](Image URL)

### Code
Inline \`code\` with backticks

\`\`\`javascript
// Code block
function hello() {
  console.log('Hello, world!');
}
\`\`\`

### Blockquotes
> This is a blockquote

### Tables (with GFM)
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`

  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Blogs
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Write a New Blog Post</h1>
          <p className="mt-2 text-gray-600">Share your knowledge with the community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              id="category"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option value="Cost Management">Cost Management</option>
              <option value="Serverless">Serverless</option>
              <option value="DevOps">DevOps</option>
              <option value="AWS">AWS</option>
            </select>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPreviewMode(false)}
                  className={`p-2 rounded-lg ${!isPreviewMode ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Edit2 size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsPreviewMode(true)}
                  className={`p-2 rounded-lg ${isPreviewMode ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>
            
            {isPreviewMode ? (
              <div className="min-h-[400px] p-4 rounded-lg border border-gray-300 bg-white overflow-auto">
                <MarkdownPreview content={formData.content || 'Nothing to preview'} />
              </div>
            ) : (
              <textarea
                id="content"
                required
                rows={15}
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-mono"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Write your blog post in Markdown..."
              />
            )}
          </div>

          {/* Markdown Guide */}
          <div className="bg-gray-50 rounded-lg p-4">
            <details>
              <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                Markdown Guide
              </summary>
              <div className="mt-4">
                <MarkdownPreview content={markdownGuide} />
              </div>
            </details>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate('/blog')}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Publish Post
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BlogEditor