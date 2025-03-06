import { Card, InputNumber, Cascader } from 'antd'
import { SettingOutlined } from '@ant-design/icons';
import React from 'react'

export const CardCart = (props) => {
   const  {name, quantity, image} = props
  return (
    <Card
      style={{
        marginTop: 16,
        display: 'flex',
        justifyContent: 'space-between',
      }}
      type="inner"
      title={name}
      
    //   extra={<a href="#">More</a>}
    >
    
      <img style={{width:'100px',  display: `flex`}} src={image} alt="" />
      <InputNumber
      defaultValue={quantity}
    />
    </Card>
  )
}

export default CardCart
