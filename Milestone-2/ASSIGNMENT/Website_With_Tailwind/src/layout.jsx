import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
    return (
        <div className="bg-primary text-white w-full h-full">
            <Navbar />
            <div className="container px-5 md:px-10 mx-auto">
                <Outlet />
                <Footer />
            </div>
        </div >
    );
};