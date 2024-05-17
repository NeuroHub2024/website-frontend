
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import Assignment from '../pages/Assignment.jsx'
import DashboardComponents from '../components/DashboardComponents.jsx'
import SideBar from '../components/Sidebar.jsx'
import { Layout } from 'antd'

const auth = false;


const AppRouter = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        {auth ?
          <>
            <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/Signup' element={<Signup />} />
              <Route path='/assignment' element={<Assignment />} />
            </Routes>

          </>
          :
          <>
            <Layout style={{ minHeight: '100vh' }} >
              <SideBar />
              <Routes>

                <Route path='/' element={<DashboardComponents />} />
                <Route path='/assignment' element={<Assignment />} />
              </Routes>

            </Layout>
          </>}
      </BrowserRouter>
    </>
  )
}

export default AppRouter