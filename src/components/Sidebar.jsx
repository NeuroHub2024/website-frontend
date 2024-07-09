import React, { useState } from 'react';
import "../styles/SideBar.css"
import {
    AppstoreOutlined,
    MenuFoldOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

function getItem(label, key, icon) {
    return {
        key,
        icon,
        label,
    };
}
const items = [

    getItem(<Link to={"/"} >Dashboard</Link>, 'sub1', <AppstoreOutlined />),
    getItem(<Link to={"/batch"} >Batch</Link>, 'sub2', <UserOutlined />),
    getItem(<Link to={"/batches"} >Batches</Link>, 'sub3', <UserOutlined />),
    getItem(<Link to={"/logout"} >Logout</Link>, 'sub4', <UserOutlined />),
];

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>

            <Sider collapsible collapsed={collapsed} theme='light' onCollapse={(value) => setCollapsed(value)}
                style={{
                    padding: 0,
                    background: colorBgContainer,
                }}>

                <Menu mode="inline" items={items} expandIcon={<MenuFoldOutlined />} />


            </Sider>

        </>
    )
}

export default SideBar