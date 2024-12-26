// import Footer from "../Footer/Footer";
import Header from '@/components/Header/Header'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const IndexLayout: FC = () => {
  return (
    <div className='layout'>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default IndexLayout
