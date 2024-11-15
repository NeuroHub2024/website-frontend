import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../components/Navbar.jsx';
import AddBatchesComponent from "../components/AddBatchesComponent"
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import WebcamFaceDetection from '../pages/WebcamFaceDetection.jsx';
import Assignment from '../pages/Assignment.jsx';
import Batch from '../pages/Batch.jsx';
import Batches from '../pages/Batches.jsx';
import AddLectureComponent from "../components/AddLectureComponent.jsx"
import AddAssignmentComponent from "../components/AddAssignmentComponent.jsx"
import AddAnnouncementComponent from "../components/AddAnnouncementComponent.jsx"
import DashboardComponents from '../components/DashboardComponents.jsx';
import SideBar from '../components/Sidebar.jsx';
import { Layout } from 'antd';
import { ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import Lecture from '../pages/Lecture.jsx';
import Cookies from 'js-cookie';
import Logout from '../pages/Logout.jsx';
import TestStart from '../pages/TestStart.jsx'

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

const AppRouter = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [auth, setAuth] = useState(() => {
    const token = Cookies.get('token');
    return token ? true : false;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const th = localStorage.getItem('display-theme');
    if (th === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  // useEffect(() => {
  //   if (auth) {
  //     const timer = setTimeout(() => {
  //       setAuth(false);
  //       localStorage.setItem('auth', 'false');
  //     }, 10 * 60 * 1000); // 10 minutes in milliseconds
  //     return () => clearTimeout(timer);
  //   }
  // }, [auth]);

  const handleLoginSuccess = () => {
    setAuth(true);
    // localStorage.setItem('auth', 'true');
  };

  return (
    <>
      <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Navbar func={toggleTheme} />
        <BrowserRouter>
          {auth ? (
            <>
              <Layout style={{ minHeight: '100vh' }}>
                <SideBar />
                <Routes>
                  <Route path='/' element={<DashboardComponents />} />
                  <Route path='/assignment/:id' element={<Assignment />} />
                  <Route path='/batch/:id' element={<Batch />} />
                  <Route path='/batches' element={<Batches />} />
                  <Route path='/lecture/:lectureId' element={<Lecture />} />
                  <Route path='/test' element={<TestStart />} />
                  <Route path='/add-batch' element={<AddBatchesComponent />} />
                  <Route path='/add-assignment/:batchId' element={<AddAssignmentComponent />} />
                  <Route path='/add-lecture' element={<AddLectureComponent />} />
                  <Route path='/add-announcement/:batchId' element={<AddAnnouncementComponent />} />
                  <Route path='/logout' element={<Logout />} />
                  <Route path='*' element={<h1>Not found</h1>} />
                </Routes>
              </Layout>
            </>
          ) : (
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
              <Route path='/Signup' element={<Signup />} />
            </Routes>
          )}
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
};

export default AppRouter;
