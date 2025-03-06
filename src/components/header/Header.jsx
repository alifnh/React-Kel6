import React from "react";
import "./header.css";
import cart from "../../assets/icons/bx-cart.svg";
import { Link } from "react-router";
import logo from "../../assets/tokopdi.png";

const Header = () => {
    return (
        <div className="container headers">
            <img src={logo} alt="logo" style={{width: '100px'}} />
            <Link to="/cart">
                <img src={cart} alt="cart" />
            </Link>
        </div>
    )
}

export default Header;