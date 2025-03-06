import React, { useEffect, useState } from "react";
import "./header.css";
import cart from "../../assets/icons/bx-cart.svg";
import { Link } from "react-router";
import logo from "../../assets/tokopdi.png";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!localStorage.getItem("userId"))
    
    useEffect(() => {
    }, [isLoggedIn])

    const handleLogout = () => {
        localStorage.removeItem("userId");
        setIsLoggedIn(false);
        toast.success("Berhasil logout");
    };
    return (
        <div className="container headers">
            <Link to="/">
            <img src={logo} alt="logo" style={{width: '100px'}} />
            </Link>
            <div>
                <Link to="/cartitem">
                    <img src={cart} alt="cart" />
                </Link>
                {isLoggedIn ? (
                <Link to="/login">Login</Link>
                ) : (
                    <button style={{hover: 'pointer'}} onClick={handleLogout}>Logout</button>
                )}
            </div>
            <Toaster />
        </div>
    )
}

export default Header;