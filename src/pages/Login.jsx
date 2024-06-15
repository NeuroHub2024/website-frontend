import login_img from '../assets/login_img.png'
import '../styles/Login.css'
import { Link } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function Login() {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className="fullpage">
      <div className="box">
        <div className="imagebox">
          {/* <img className="image" src={login_img} alt="Example" /> */}
        </div>
        <hr style={{ color: 'grey' }}></hr>
        <div className="form">
          {/* <form id="login-form" action="/login" method="post">
                     <p className='big_text'>Login</p>

                    <div >
                    <input  className="formgroup" type="email" id="email" name="email" placeholder='Email'required />
                    </div>
                    <div>
                    <input  className="formgroup" type="password" id="password" name="password"  placeholder='Password' required />
                    </div>
                    <p className='sign'>New Here?<Link to="/Signup" className='signlink'>Welcome Aboard</Link></p>
                   
                    <button className="button" type="submit">Login</button>
                </form> */}
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
