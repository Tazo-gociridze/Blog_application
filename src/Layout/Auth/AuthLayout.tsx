import Header from '@/components/Header/Header'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
