export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  date: string
  category: string
}

export interface BlogFormData {
  title: string
  content: string
  category: string
}