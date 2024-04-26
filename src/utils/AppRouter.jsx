import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
   </>
  )
}

export default AppRouter