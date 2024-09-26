import { Outlet } from "react-router-dom";
import Header from "../header";
import { header } from "../../constant";
// import Footer from "../footer/Footer";


const Layout = () => {
  return (
    <main className="min-h-screen">
      <Header header={header} />
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};

export default Layout;
