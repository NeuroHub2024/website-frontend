import React from 'react'
import SideBar from '../components/Sidebar.jsx'
import DashboardComponents from "../components/DashboardComponents.jsx"


import { Layout } from 'antd';



const Dashboard = () => {
    return (
        <>
            {/* <Topbar /> */}
            <Layout style={{ minHeight: '100vh', background: "white" }} >
                <SideBar />
                <DashboardComponents />
            </Layout>
        </>
    )
}

export default Dashboard