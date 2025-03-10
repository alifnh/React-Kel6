import React, { useState, useEffect } from 'react';
import { Form, Input, InputNumber, Button, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AppContext';
import Header from '../../components/header/Header';
import { useParams } from 'react-router';

const { Option } = Select;

const categories = [
  { id: 1, name: 'T-Shirts' },
  { id: 2, name: 'Jeans' }
];

function EditProduct() {
    const { user } = useAuth();
    const { id } = useParams();
    const [form] = Form.useForm(); // Inisialisasi form
    const [loading, setLoading] = useState(false);

    // Ambil data produk berdasarkan ID
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get(`http://localhost:3006/products/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                });
                form.setFieldsValue(data); // Isi form dengan data produk
            } catch (error) {
                toast.error("Gagal mengambil data produk!");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id, form]);

    const onFinish = async (values) => {
        try {
            const requestData = {
                name: values.name,
                price: values.price,
                categoryId: values.categoryId,
                image: values.image,
                userId: localStorage.getItem("userId"), 
                description: values.description,
                stock: values.stock
            };

            await axios.put(`http://localhost:3006/products/${id}`, requestData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            });

            toast.success("Produk berhasil diperbarui!");
        } catch (error) {
            toast.error(error.response?.data?.message || "Gagal memperbarui produk");
        }
    };

    return (
        <>
            <Header />
            <h2>Edit Produk</h2>
            <Form
                form={form} // Hubungkan form dengan Ant Design
                layout="vertical"
                onFinish={onFinish}
                initialValues={{ categoryId: categories[0]?.id }}
            >
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
                    <Button type="primary" htmlType="submit" block loading={loading}>
                        {loading ? "Menyimpan..." : "Simpan Perubahan"}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default EditProduct;
