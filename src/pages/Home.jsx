import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import CardProduct from "../components/CardProduct";
import axios from "axios";
import './Home.css';
import Slider from "react-slick";
import carousel from "../assets/carousel.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const Home = () => {
    const [products, setProducts] = useState(null);

    const fetchData = async (link = 'http://localhost:3006/products') => {
        try {
            console.log(link)
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
            <div className="carousel-wrapper">
                <div className="carousel-container">
                    <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={3000}>
                        <div>
                            <img src={carousel} alt="Slide 1" className="carousel-image"/>
                        </div>
                        <div>
                            <img src={carousel2} alt="Slide 2" className="carousel-image"/>
                        </div>
                        <div>
                            <img src={carousel3} alt="Slide 3" className="carousel-image"/>
                        </div>
                    </Slider>
                </div>
            </div>
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