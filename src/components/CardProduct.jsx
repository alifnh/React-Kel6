import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router";

const CardProduct = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userId"))
    const { image, title, price, id } = props;
    const [isAddTocart, setIsAddTocart] = useState(false)
    const navigate = useNavigate();   
    
    const handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!isLoggedIn) {
            navigate("/login");
            return
        }
        addToCart();
    }

    const addToCart = async () => {
        try {
            const response = await axios.post(`http://localhost:3006/cart`, {
                userId: localStorage.getItem("userId"),
                productId: id,
                quantity: 1
            });
            toast.success("Berhasil menambahkan kedalam keranjang")
            setIsAddTocart(true)
        } catch (error) {
            toast.error("Gagal menambahkan kedalam keranjang")
        }
    }
    return (
        <>
            <Link to={`/product/${id}`}>
                <Card
                    hoverable
                    style={{
                    width: 250,
                    }}
                    cover={<img alt="" src={image}/>}
                >
                <Meta 
                    title={<span style={{ fontWeight: "Bold (50)", color: "black", fontSize: 20 }}>{title} </span>} 
                    description={<span style={{ fontWeight: "bold", color: "#E30707", fontSize: "18"}}>Rp. {price}</span>} 
                    />
                    <Button style={{marginTop: '10px', padding: '10px 50px', color: 'black'}}
                     type="primary"
                     onClick={handleClick}
                     disabled={isAddTocart}>Add to cart</Button>
                </Card>
            </Link>
            <Toaster />
        </>
    )
}

export default CardProduct;