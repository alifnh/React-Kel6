import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Select, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast';

function Register() {
    const navigate = useNavigate()
    const onFinish = async (values) => {
        
        event.preventDefault() // cegah refresh page 
        
        try {
            
            const data = await axios.post("http://10.50.0.13:3006/register", {
                email: values.username,
                password: values.password,
                role: values.role
            })
            localStorage.setItem("accessToken", data.data.accessToken)
            toast.success("Register successful!");
            navigate('/');
            
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Form
            name="register"
            initialValues={{
                remember: true,
            }}
            style={{
                maxWidth: 360,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your Email!',
                },
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
            </Form.Item>

            <Form.Item
                name="repassword"
                rules={[
                {
                    required: true,
                    message: 'Please input your re-Password!',
                },
                ]}
            >
                <Input prefix={<LockOutlined />} type="password" placeholder="re-Password" />
            </Form.Item>

            <Form.Item
                name="role" // Tambahkan name disini
                rules={[
                  {
                    required: true,
                    message: 'Please select your role!',
                  },
                ]}
            >
                <Select placeholder="Select Role">
                    <Select.Option value="customer">Customer</Select.Option>
                    <Select.Option value="admin">Admin</Select.Option>
                </Select>
            </Form.Item>
        
            <Form.Item>
                <Button block type="primary" htmlType="submit">
                Register
                </Button>
                {/* or <a href="/register">Register now!</a> */}
            </Form.Item>
            </Form>
        </div>
    );
}

export default Register