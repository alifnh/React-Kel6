import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import Header from '../../components/header/Header';
import axios from 'axios';
import { useParams } from 'react-router';
import { StarFilled } from "@ant-design/icons";

const ProductDetail = () => {
  const [productData, setProductData] = useState()
  const [inCart, setInCart] = useState(false); // NEW: Tambahkan state inCart
  const params = useParams()

  const fetchProductData = async () => {
    try {
      const data = await axios.get(`http://localhost:3006/products/${params.id}`)
      setProductData(data.data)
      console.log(data.data)
    }
    catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchProductData()
  }, [])

  const handleCartClick = () => {
    setInCart(!inCart); // Toggle state
  };

  return (
    <>
      <Header />
      {productData == null ? (<p>Loading...</p>) :
      (
        <div className="product-container">
        <div className="product-image">
          <img 
            src={productData.image} 
            alt="Product" 
          />
        </div>
        <div className="productcontainer">
          <div className="product-info">
            <h1 className="product-title">{productData.name}</h1>
            <p className="product-price">Rp. {productData.price}</p>
            <div className="product-sales-rating">
              <span className="sold-text">{productData.sold} 1.237 Sold </span>
              <span className="rating">
                <StarFilled style={{ color: "#FFD700", fontSize: "18px" }} /> 
                <span className="rating-value">{productData.rating} 4.5</span>
              </span>
            </div>
            <div className="divider"></div>
            <h2 className="product-description-title">Description: </h2>
            <p className="product-description">{productData.description}</p>
            <ul className="product-details">
              <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
              <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
            </ul>
          </div>
          <div className="button-group">
            <button 
                  className={`button cart-button ${inCart ? "remove" : "add"}`} 
                  onClick={handleCartClick} // NEW: Tambahkan event onClick
                >
                  {inCart ? "Remove from Cart" : "Add to Cart"} {/* NEW: Ubah teks tombol */}
                </button>
              <button className="button buy-now">Buy it Now</button>
            </div>
        </div>
      </div>
      )
      }
      
    </>
  );
};

export default ProductDetail;
