import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router";
import "./CardProduct.css";

const CardProduct = (props) => {
    const { image, title, price, id } = props;  
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
                </Card>
            </Link>
        </>
    )
}

export default CardProduct;