import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./Navbar";
import ScrollProgress from "./ScrollProgress";
import Footer from "./Footer";

const RootLayout = () => {
  const location = useLocation();
  const { pathname } = location;

  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Navbar />
      <ScrollProgress />

      <Outlet />
     
    </div>
  );
};

export default RootLayout;
