import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => (
  <div className="max-w-7xl mx-auto">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default Root;
