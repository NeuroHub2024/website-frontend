
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard.jsx'
import Navbar from '../components/Navbar.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import WebcamFaceDetection from '../pages/WebcamFaceDetection.jsx'
const AppRouter = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Test' element={<WebcamFaceDetection/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter