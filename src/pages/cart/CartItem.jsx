import { useState, useEffect } from "react";
import axios from "axios";
import { Table, InputNumber, Button, Select, Checkbox, Typography, message, Card } from "antd";
import CardCart from "../../components/cardcart/CardCart";
import Header from "../../components/header/Header";

const { Text } = Typography;

export const CartItem = () => {
  const [cart, setCart] = useState(null);
  const userId = localStorage.getItem("userId")


  const fetchCartData = async () => {
      try {
        const response = await axios.get(`http://localhost:3006/cart?userId${userId}`);
        setCart(response.data); 
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    fetchCartData();
  }, []);


  return (
    <>
    <Header/>
      <Card title="Cart" >
      {cart == null ? (
        <p>Data sedang dimuat</p>
      ) : (
        cart.map((item, index) =>
        <CardCart key={index} quantity={item.quantity} id={item.id} style={{marginTop:'50px'}} />
      )
      )}
    </Card>
    </>
  );
};

export default CartItem