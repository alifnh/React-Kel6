import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { useNavigate } from 'react-router'
import axios from 'axios'
import toast from 'react-hot-toast';
import logo from '../assets/tokopdi1.png'
import { useAuth } from '../context/AppContext';


function LoginAdmin() {
    const navigate = useNavigate()
    const { login } = useAuth(); // Ambil function login dari Context
    const onFinish = async (values) => {
        
        event.preventDefault() // cegah refresh page 
        
        try {
            
            const data = await axios.post("http://localhost:3006/login", {
                email: values.username,
                password: values.password
            })



            if (!data.data.user) {
                throw new Error("User not found");
            }

            if (data.data.user.role === "admin") {
                login(data.data.user)
                localStorage.setItem("accessToken", data.data.accessToken)
                toast.success("Login successful!");
                navigate('/product/list');
            } else {
                throw new Error("Your role not authorized!");
            }

        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        }
    };
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <img src={logo} alt="Logo" style={{ width: 150, marginBottom: 20 }} />
                <Form
                name="login"
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
                <Form.Item>
                    <Flex justify="space-between" align="center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a href="">Forgot password</a>
                    </Flex>
                </Form.Item>
            
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                    Log in
                    </Button>
                    or <a href="/register">Register now!</a>
                </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default LoginAdmin