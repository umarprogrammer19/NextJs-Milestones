import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="home-section">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}