import React, { useEffect, useState } from "react";
import "./header.css";
import cart from "../../assets/icons/mdi_cart.svg";
import { Link } from "react-router";
import logo from "../../assets/tokopdi2.png";
import toast, { Toaster } from "react-hot-toast";
import profile from "../../assets/icons/ix_user-profile-filled.svg";
import logout from "../../assets/icons/logout-circle.svg";

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
        <div className="container headers" style={{ alignItems: 'center', gap: '15px' }}>
            <Link to="/">
            <img src={logo} alt="logo" style={{width: '100px'}} />
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                <Link to="/cartitem" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none'}}>
                    <img src={cart} alt="cart" />
                    <span style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 'normal', fontSize: 12}}>Cart</span>
                </Link>
                {isLoggedIn ? (
                <Link to="/login" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none'}}>
                <img src={profile} alt="profile"/>
                <span style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 'normal', fontSize: 12}}>Login</span>
                </Link>
                
                ) : (
                    <button style={{hover: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none'}} onClick={handleLogout}>
                    <img src={logout} alt="logout"/>
                    <span style={{ color: 'white', fontFamily: 'Poppins', fontWeight: 'normal', fontSize: 12}}>Logout</span>
                    </button>
                )}
            </div>
            <Toaster />
        </div>
    )
}

export default Header;