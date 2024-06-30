

import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import login_img from '../assets/login_img.png';
import '../styles/Login.css';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

function Login({ onLoginSuccess }) {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const payload = {
      username: values.username,
      password: values.password,
    };
    console.log('Payload to be sent: ', payload);
    try {
      nprogress.start(); // Start the loader
      const response = await axios.post('https://gateway-mpfy.onrender.com/user/login', payload);
      console.log('Login successful: ', response.data);
      onLoginSuccess();
      navigate('/');
    } catch (error) {
      console.error('There was an error signing up: ', error.response ? error.response.data : error.message);
    } finally {
      nprogress.done(); // Stop the loader
    }
  };

  return (
    <div className="fullpage">
      <div className="box">
        <div className="imagebox">
          <img className="image" src={login_img} alt="Example" />
        </div>
        <hr style={{ color: 'grey' }} />
        <div className="form">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
            Or <Link to="/Signup">register now!</Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;

