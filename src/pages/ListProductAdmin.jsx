import React, { useEffect, useState } from "react";
import { Table, Button, message, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";

function ListProductAdmin() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken");

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3006/products", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setProducts(response.data);
        } catch (error) {
            message.error("Gagal mengambil data produk");
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3006/products/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            message.success("Produk berhasil dihapus");
            fetchData(); // Refresh data setelah delete
        } catch (error) {
            message.error("Gagal menghapus produk");
        }
    };

    const showDeleteConfirm = (id) => {
        const isConfirmed = window.confirm("Apakah Anda yakin ingin menghapus produk ini?");
        if (isConfirmed) {
            handleDelete(id);
        }
    };
    

    const columns = [
        {
            title: "Nama Produk",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Harga",
            dataIndex: "price",
            key: "price",
            render: (price) => `Rp. ${price.toLocaleString()}`,
        },
        {
            title: "Aksi",
            key: "action",
            render: (text, record) => (
                <>
                    <Button 
                        type="primary" 
                        icon={<EditOutlined />} 
                        onClick={() => navigate(`/product/edit/${record.id}`)}
                        style={{ marginRight: 8 }}
                    >
                        Edit
                    </Button>
                    <Button 
                        type="danger" 
                        icon={<DeleteOutlined />} 
                        onClick={() => showDeleteConfirm(record.id)}
                    >
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <>
            <Header />
            <Table columns={columns} dataSource={products} rowKey="id" />
        </>
    );
}

export default ListProductAdmin