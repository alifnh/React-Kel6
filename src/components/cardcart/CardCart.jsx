import { Card, InputNumber, Cascader } from 'antd'
import { DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import React, { use, useEffect, useState } from 'react'
import './CardCart.css'
import axios from 'axios';

export const CardCart = (props) => {
   const  {id, quantity} = props
   const [product, setProduct] = useState(null)
   const [qty, setQty] = useState(quantity)


   const onChange = (value) => {
    setQty(value);
  };

  const getProductData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3006/products/${id}`);
      return setProduct(response.data);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductData(id);
  }, []);

  useEffect(() => {
    // console.log(product)
  }, [qty]);


  return (
    <>
    {product == null ? (
      <p>Data sedang dimuat</p>
    ) : (
    <div className="item">
      <div className="buttons">
        <DeleteOutlined />
      </div>
   
      <div className="image">
        <img src={product.image} alt="" />
      </div>
   
      <div className="description">
        <span>{product.name}</span>
      </div>
   
      <div className="quantity">
        <InputNumber defaultValue={quantity} onChange={onChange} />
      </div>
   
      <div className="total-price">Rp. {qty * product.price}</div>
    </div>)}
</>
)
}

export default CardCart
