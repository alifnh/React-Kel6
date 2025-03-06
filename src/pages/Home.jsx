import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import CardProduct from "../components/CardProduct";
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState(null);

    const fetchData = async (link = 'http://10.50.0.13:3006/products') => {
        try {
            const data = await axios.get(link)
            setProducts(data.data);
        } catch (error) {
          alert(error);
        }
      }

    useEffect(() => {
    fetchData();
    }, []);

    return (
        <>
            <Header />
            <div className="product">
                <section className="product-list">
                    {products == null ? (
                        <p>data sedang dimuat</p>
                    ) : (
                        products.map((item, index) => 
                            <CardProduct key={index} image={item.image} title={item.name} price={item.price} id={item.id} />
                    )
                    )}
                </section>
            </div>
        </>
    )
}

export default Home;