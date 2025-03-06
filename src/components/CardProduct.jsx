import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { Link } from "react-router";

const CardProduct = (props) => {
    const { image, title, price, id } = props;  
    return (
        <>
            <Link to={`/product/${id}`}>
                <Card
                    hoverable
                    style={{
                    width: 240,
                    }}
                    cover={<img alt="example" src={image} />}
                >
                    <Meta title={title} description={`Rp. ${price}`} />
                </Card>
            </Link>
        </>
    )
}

export default CardProduct;