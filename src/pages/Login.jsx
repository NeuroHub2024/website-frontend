import login_img from '../assets/login_img.png'
import '../styles/Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="fullpage">
      <div className="box">
        <div className="imagebox">
           <img className="image" src={login_img} alt="Example" />
        </div>
         <hr style={{ color: 'grey'}}></hr>
        <div className="form">
                <form id="login-form" action="/login" method="post">
                     <p className='big_text'>Login</p>

                    <div >
                    <input  className="formgroup" type="email" id="email" name="email" placeholder='Email'required />
                    </div>
                    <div>
                    <input  className="formgroup" type="password" id="password" name="password"  placeholder='Password' required />
                    </div>
                    <p className='sign'>New Here?<Link to="/Signup" className='signlink'>Welcome Aboard</Link></p>
                   
                    <button className="button" type="submit">Login</button>
                </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
