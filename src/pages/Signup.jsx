import '../styles/Signup.css'
import login_img from '../assets/login_img.png'
import { Link } from 'react-router-dom';
function Signup() {
  return (
    <div className="fullpage">
    <div className="box">
      <div className="imagebox">
         <img className="image" src={login_img} alt="Example" />
      </div>
       <hr style={{ color: 'grey'}}></hr>
      <div className="form">
              <form id="login-form" action="/login" method="post">
                   <p className='big_text'>Signup</p>
                   <div >
                  <input  className="formgroup" type="text" id="name" name="name" placeholder='Name' required />
                  </div>
                  <div >
                  <input  className="formgroup" type="email" id="email" name="email" placeholder='Email'required />
                  </div>
                  <div>
                  <input  className="formgroup" type="password" id="password" name="password"  placeholder='Password' required />
                  </div>
                  <p className='sign'>Already have an Account? <Link to="/login" className='signlink'>Login Here</Link></p>
                 
                  <button className="button" type="submit">Signup</button>
              </form>
      </div>
    </div>
  </div>
  )
}

export default Signup
