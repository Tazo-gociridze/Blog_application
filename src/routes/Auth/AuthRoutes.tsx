import AuthGuard from '@/components/route-guard/auth'
import SignIn from '@/pages/SignIn/SignIn'
import LoginError from '@/pages/login-error/LoginError'
import SignUp from '../../pages/SignUp/SignUp'
import { Route } from 'react-router-dom'
import { AUTH_PATHS } from './index.enum'

export const AUTH_ROUTES = [
  <Route
    path={AUTH_PATHS.SUGN_IN}
    element={
      <AuthGuard>
        <SignIn />
      </AuthGuard>
    }
  />,
  <Route path={AUTH_PATHS.SUGN_IN_ERROR} element={<LoginError />} />,
  <Route
    path={AUTH_PATHS.SUGN_UP}
    element={
      <AuthGuard>
        <SignUp />
      </AuthGuard>
    }
  />,
]
