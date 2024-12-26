import { FC, PropsWithChildren, createContext, useState } from 'react'

export const AuthContext = createContext<any>(null)
export const BlogContext = createContext<any>(null)

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(null)

  function handleStoreUser(user: any) {
    setUser(user)
  }

  return <AuthContext.Provider value={{ user, handleStoreUser }}>{children}</AuthContext.Provider>
}

export const BlogProvider: FC<PropsWithChildren> = ({ children }) => {
  const [blogsList, setBlogsList] = useState([])

  function handleStoreBlogsList(user: any) {
    setBlogsList(user)
  }

  return (
    <BlogContext.Provider value={{ blogsList, handleStoreBlogsList }}>
      {children}
    </BlogContext.Provider>
  )
}
