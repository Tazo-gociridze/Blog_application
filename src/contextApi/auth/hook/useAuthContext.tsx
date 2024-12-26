import { useContext } from 'react'
import { AuthContext, BlogContext } from '..'

export const useAuthContext = () => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    throw new Error('context error, use context provider!!!')
  }

  return authContext
}

export const useBlogContext = () => {
  const blogContext = useContext(BlogContext)

  if (!blogContext) {
    throw new Error('context error, use context provider!!!')
  }

  return blogContext
}
