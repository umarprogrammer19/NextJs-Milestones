import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommentDots,
    faBars,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
    const [nav, setNav] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };

    const handleChatBtnClick = () => {
        if (!isButtonDisabled) {
            toast.info("Experiencing high traffic, Please wait a moment.", {
                position: toast.POSITION.TOP_CENTER,
                onOpen: () => setIsButtonDisabled(true),
                onClose: () => setIsButtonDisabled(false),
            });
        }
    };

    return (
        <div className="navbar-section">
            <h1 className="navbar-title">
                <Link to="/">
                    Health <span className="navbar-sign">+</span>
                </Link>
            </h1>

            {/* Desktop */}
            <ul className="navbar-items">
                <li>
                    <Link to="/" className="navbar-links">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to={"/Services"} className="navbar-links">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to={"About"} className="navbar-links">
                        About
                    </Link>
                </li>
                <li>
                    <Link to={"Reviews"} className="navbar-links">
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link to={"Doctors"} className="navbar-links">
                        Doctors
                    </Link>
                </li>
            </ul>

            <button
                className="navbar-btn"
                type="button"
                disabled={isButtonDisabled}
                onClick={handleChatBtnClick}
            >
                <FontAwesomeIcon icon={faCommentDots} /> Live Chat
            </button>

            {/* Mobile */}
            <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                <div onClick={openNav} className="mobile-navbar-close">
                    <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
                </div>

                <ul className="mobile-navbar-links">
                    <li>
                        <Link onClick={openNav} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to="/Services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to="/About">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to="/Reviews">
                            Reviews
                        </Link>
                    </li>
                    <li>
                        <Link onClick={openNav} to="/Doctors">
                            Doctors
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Hamburger Icon */}
            <div className="mobile-nav">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={openNav}
                    className="hamb-icon"
                />
            </div>
        </div>
    );
}

export default Navbar;