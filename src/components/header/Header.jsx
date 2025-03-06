import React from "react";
import "./header.css";
import cart from "../../assets/icons/bx-cart.svg";
import { Link } from "react-router";

const Header = () => {
    return (
        <div className="container headers">
            <h1>Kelompok 6</h1>
            <Link to="/cart">
                <img src={cart} alt="cart" />
            </Link>
        </div>
    )
}

export default Header;