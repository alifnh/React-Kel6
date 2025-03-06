import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AppContext';
import Header from '../../components/header/Header';

const { Option } = Select;

const categories = [
  { id: 1, name: 'T-Shirts' },
  { id: 2, name: 'Jeans' }
];

function TambahProduct() {
  const { user } = useAuth();

  const onFinish = async (values) => {
    try {
      const requestData = {
        name: values.name,
        price: values.price,
        categoryId: values.categoryId,
        image: values.image, 
        // userId: user.id,
        userId: localStorage.getItem("userId"), 
        description: values.description,
        stock: values.stock
      };

      const { data } = await axios.post("http://10.50.0.13:3006/products", requestData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      });
      toast.success("Produk berhasil ditambahkan!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Gagal menambah produk");
    }
  };

  return (
    
    <>
      <Header />
      <h2>Tambah Produk</h2>
      <Form layout="vertical" onFinish={onFinish} initialValues={{ categoryId: categories[0]?.id }}>
        <Form.Item label="Nama Produk" name="name" rules={[{ required: true, message: 'Nama produk wajib diisi!' }]}> 
          <Input placeholder="Nama Produk" />
        </Form.Item>
        
        <Form.Item label="Harga" name="price" rules={[{ required: true, message: 'Harga wajib diisi!' }]}> 
          <InputNumber placeholder="Harga" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Kategori" name="categoryId" rules={[{ required: true, message: 'Kategori wajib diisi!' }]}> 
          <Select placeholder="Pilih Kategori">
            {categories.map(category => (
              <Option key={category.id} value={category.id}>{category.name}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Deskripsi" name="description" rules={[{ required: true, message: 'Deskripsi wajib diisi!' }]}> 
          <Input.TextArea placeholder="Deskripsi Produk" />
        </Form.Item>

        <Form.Item label="Stok" name="stock" rules={[{ required: true, message: 'Stok wajib diisi!' }]}> 
          <InputNumber placeholder="Jumlah Stok" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Gambar" name="image" rules={[{ required: true, message: 'Gambar wajib diunggah!' }]}> 
          <Input placeholder="Url Gambar" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Tambah Produk
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default TambahProduct;
