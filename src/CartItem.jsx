import { useState, useEffect } from "react";
import axios from "axios";
import { Table, InputNumber, Button, Select, Checkbox, Typography, message, Card } from "antd";
import CardCart from "./components/CardCart";


const { Text } = Typography;

export const CartItem = () => {
  const [cart, setCart] = useState(null);


  const fetchCartData = async () => {
      try {
        const response = await axios.get(`http://10.50.0.13:3006/cart?userId${3}`);
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
      console.log("11111111111111111111111111")
      const response = await axios.get(`http://10.50.0.13:3006/products/${id}`);
      console.log(response.data);
      return response.data.name;
    }
    catch (error) {
      console.error(error);
    }
  }
  

  return (
    <>
    <Card title="Cart Products">
    {cart == null ? (
      <p>Data sedang dimuat</p>
    ) : (
      cart.map((item, index) =>
      <CardCart key={index} quantity={item.quantity} name={"Jacket"} />
    )
    )}
  </Card>
    </>
  );
};

export default CartItem