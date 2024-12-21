export interface User {
    id: string
    email: string
    password: string
    name: string
    createdAt: string
  }
  
  export interface LoginFormData {
    email: string
    password: string
  }
  
  export interface SignupFormData {
    email: string
    password: string
    name: string
  }