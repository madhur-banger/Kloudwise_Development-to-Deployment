import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'
import type { Components } from 'react-markdown'

interface MarkdownPreviewProps {
  content: string
}

interface CodeProps {
  node?: any
  inline?: boolean
  className?: string
  children?: React.ReactNode
}

const MarkdownPreview = ({ content }: MarkdownPreviewProps) => {
  const components: Components = {
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          className="rounded-lg border border-gray-200 dark:border-gray-700"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={`${className} bg-gray-100 dark:bg-gray-800 rounded-md px-1 py-0.5`} {...props}>
          {children}
        </code>
      )
    },
    // Style headers
    h1: ({ node, ...props }) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white gradient-text" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-white" {...props} />
    ),
    h3: ({ node, ...props }) => (
      <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-white" {...props} />
    ),
    // Style links
    a: ({ node, ...props }) => (
      <a 
        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    // Style images
    img: ({ node, ...props }) => (
      <img 
        className="max-w-full rounded-lg my-4 shadow-lg border border-gray-200 dark:border-gray-700"
        {...props}
        alt={props.alt || ''}
      />
    ),
    // Style blockquotes
    blockquote: ({ node, ...props }) => (
      <blockquote 
        className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 my-4 italic text-gray-700 dark:text-gray-300 bg-blue-50 dark:bg-blue-900/20 py-2 px-4 rounded-r-lg"
        {...props}
      />
    ),
    // Style paragraphs
    p: ({ node, ...props }) => (
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4" {...props} />
    ),
    // Style lists
    ul: ({ node, ...props }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300" {...props} />
    ),
    // Style list items
    li: ({ node, ...props }) => (
      <li className="text-gray-700 dark:text-gray-300" {...props} />
    ),
    // Style tables
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => (
      <thead className="bg-gray-50 dark:bg-gray-800" {...props} />
    ),
    th: ({ node, ...props }) => (
      <th 
        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
        {...props}
      />
    ),
    td: ({ node, ...props }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300" {...props} />
    ),
  }

  return (
    <ReactMarkdown
      className="prose dark:prose-invert max-w-none"
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  )
}

export default MarkdownPreview