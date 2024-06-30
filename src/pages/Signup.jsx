
import login_img from '../assets/login_img.png';
import { Link,useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Select } from 'antd';
import axios from 'axios';

const { Option } = Select;

function Signup() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const payload = {
      username: values.username,
      email: values.email,
      password: values.password,
      role: values.role,
    };
    console.log('Payload to be sent: ', payload);
    try {
      const response = await axios.post('https://gateway-mpfy.onrender.com/user/adduser', payload);
      console.log('Signup successful: ', response.data);
      navigate('/login');
    } catch (error) {
      console.error('There was an error signing up: ', error.response ? error.response.data : error.message);
      
    }
  };

  return (
    <div className="fullpage">
      <div className="box">
        <div className="imagebox">
          {/* <img className="image" src={login_img} alt="Example" /> */}
        </div>
        <hr style={{ color: 'grey' }}></hr>
        <div className="form">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please input a valid Email!',
                },
              ]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="role"
              rules={[
                {
                  required: true,
                  message: 'Please select your Role!',
                },
              ]}
            >
              <Select placeholder="Select a role">
                <Option value="Admin">Admin</Option>
                <Option value="User">User</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="/login">
                Already have an account?
              </Link>
            </Form.Item>

            <Form.Item>
          
              <Button type="primary" htmlType="submit" className="login-form-button">
                Sign Up
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
