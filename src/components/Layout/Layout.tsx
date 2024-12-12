import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className="layout">
    <Header />
    <main>
      <Outlet />
    </main>
    {/* <Footer /> */}
  </div>
  )
};

export default Layout;
