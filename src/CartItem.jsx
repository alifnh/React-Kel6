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
      return response.data.name;
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
        <CardCart key={index} quantity={item.quantity} name={"Product"} />
      )
      )}
    </Card>
    </>
  );
};

export default CartItem