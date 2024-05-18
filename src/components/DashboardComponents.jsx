import React from 'react';
import { Avatar, Layout, Space, Typography, theme } from 'antd';
const { Content, Footer } = Layout;
import "../styles/DashboardComponents.css"

const DashboardComponents = () => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>

            <Layout>

                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Space className='dashboard-avatar-box'>
                        <div>
                            <Avatar size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }} />
                            <h2>Welcom User</h2>
                        </div>
                        <Typography>
                            7 Days
                        </Typography>
                    </Space>

                    <Typography.Text><h4>Lectures</h4></Typography.Text>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        {/* <UserTable /> */}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>

        </>
    )
}

export default DashboardComponents