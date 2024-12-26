import { Route } from 'react-router-dom'
import { MAIN_ROUTES } from './MainRoutes/MainRoutes'
import { AUTH_ROUTES } from './Auth/AuthRoutes'
import AuthLayout from '@/Layout/Auth/AuthLayout'
import { MAIN_PATHS } from './MainRoutes/index.enum'
import { AUTH_PATHS } from './Auth/index.enum'
import IndexLayout from '@/Layout/IndexLayout'

export const INDEX_LAYOUT = [
  <Route path={MAIN_PATHS.INDEX_PATH} element={<IndexLayout />}>
    {MAIN_ROUTES}
  </Route>,
]

export const AUTH_LAYOUT = [
  <Route path={AUTH_PATHS.AUTH_INDEX_PATH} element={<AuthLayout />}>
    {AUTH_ROUTES}
  </Route>,
]
