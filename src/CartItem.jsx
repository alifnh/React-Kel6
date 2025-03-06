import { useState, useEffect } from "react";
import axios from "axios";
import { Table, InputNumber, Button, Select, Checkbox, Typography, message, Card } from "antd";
import CardCart from "./components/CardCart";
import Header from "./components/header/Header";

const { Text } = Typography;

export const CartItem = () => {
  const [cart, setCart] = useState(null);
  const userId = localStorage.getItem("userId")

  const fetchCartData = async () => {
      try {
        const response = await axios.get(`http://10.50.0.13:3006/cart?userId${userId}`);
      //   response.data.forEach((item, index) => {
      //    const product = getProductData(item.productId)
      //     response.data[index]['product'] = product
      // })

        setCart(response.data); 
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    fetchCartData();
  }, []);

  const getProductData = async (id) => {
    try {
      const response = await axios.get(`http://10.50.0.13:3006/products/${id}`);
      return response.data;
    }
    catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
    <Header/>
      <Card title="Cart Products">
      {cart == null ? (
        <p>Data sedang dimuat</p>
      ) : (
        cart.map((item, index) => 
        <CardCart key={index} quantity={item.quantity} name={"Product"} image={"https://down-id.img.susercontent.com/file/c70c4666582f977ccd170cea844abe2e"}/>
        
      )
      )}
    </Card>
    </>
  );
};

export default CartItem