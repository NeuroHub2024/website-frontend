
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar.jsx'
import Login from '../pages/Login.jsx'
import Signup from '../pages/Signup.jsx'
import WebcamFaceDetection from '../pages/WebcamFaceDetection.jsx'
import Assignment from '../pages/Assignment.jsx'
import Batches from '../pages/Batches.jsx'
import DashboardComponents from '../components/DashboardComponents.jsx'
import SideBar from '../components/Sidebar.jsx'
import { Layout } from 'antd'
import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react'
import Lecture from '../pages/Lecture.jsx'

export const lightTheme = {
  token: {
    colorPrimary: '#ff3453',
    borderRadius: 4,
    colorBgBase: 'white',
    colorTextBase: 'black'
    // Add other light theme tokens
  },
};

export const darkTheme = {
  token: {
    colorPrimary: '#262528',
    borderRadius: 4,
    colorBgBase: 'black',
    colorTextBase: 'white'
    // Add other dark theme tokens
  },
};




const auth = false;


const AppRouter = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };


  useEffect(() => {
    const th = localStorage.getItem('display-theme')
    if (th === 'dark') {
      setIsDarkMode(true)
    }
    else {
      setIsDarkMode(false)
    }
  }, [])

  return (
    <>
      <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>

        <Navbar func={toggleTheme} />
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
                  <Route path='/batches' element={<Batches />} />
                  <Route path='/lecture/:lectureId' element={<Lecture />} />
                  <Route path='/Test' element={<WebcamFaceDetection />} />
                </Routes>

              </Layout>
            </>}
        </BrowserRouter>
      </ConfigProvider>

    </>
  )
}

export default AppRouter