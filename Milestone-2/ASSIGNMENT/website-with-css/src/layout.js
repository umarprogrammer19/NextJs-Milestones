import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Layout() {
  return (
    <div className="home-section">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};