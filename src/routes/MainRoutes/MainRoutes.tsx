import { AuthGuardWhileSignOut } from '@/components/route-guard/auth'
import { BlogProvider } from '@/contextApi/auth'
import About from '@/pages/About/About'
import AuthorPage from '@/pages/Author/Author-page'
import HomePage from '@/pages/Home/HomePage'
import Profile from '@/pages/Profile/Profile'

import { Route } from 'react-router-dom'
import { MAIN_PATHS } from './index.enum'

export const MAIN_ROUTES = [
  <Route
    index
    element={
      <BlogProvider>
        <HomePage />
      </BlogProvider>
    }
  />,
  <Route path={MAIN_PATHS.ABOUT_PATH} element={<About />} />,
  <Route path={MAIN_PATHS.AUTHOR_PATH} element={<AuthorPage />} />,
  <Route
    path={MAIN_PATHS.PROFILE_PATH}
    element={
      <AuthGuardWhileSignOut>
        <Profile />
      </AuthGuardWhileSignOut>
    }
  />,
]
