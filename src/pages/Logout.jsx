import Cookies from 'js-cookie'
import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Logout.css"



const Logout = () => {
    const navigate = useNavigate();

    const handleOnClick = async () => {
        Cookies.remove('token');
        window.history.pushState({}, '', '/login');
        window.location.reload();
    }
    return (
        <div className="logout-btn-container">
            <Button className='logout-btn' type="primary" onClick={handleOnClick}>
                Logout
            </Button>
        </div>
    )
}

export default Logout