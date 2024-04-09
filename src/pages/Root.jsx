import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function Root() {
  const location = useLocation();
  const showNavbarAndFooter = !["/register", "/login"].includes(location.pathname);

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      <Outlet />
      {showNavbarAndFooter && <Footer />}
    </>
  );
}

export default Root;