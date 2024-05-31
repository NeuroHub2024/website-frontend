import React from 'react';
import { Avatar, Card, Layout, Space, Typography, theme } from 'antd';
const { Content, Footer } = Layout;
import "../styles/DashboardComponents.css"
import DueAssignmentCard from './DueAssignment';

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

                    <div className='dashboard-main-container' >
                        <div className="due-assignment-container">
                            <Typography.Title level={4}>Due Assignments</Typography.Title>
                            <div className="due-assignment-card-container">
                                <DueAssignmentCard />
                                <DueAssignmentCard />
                                <DueAssignmentCard />
                                <DueAssignmentCard />
                                <DueAssignmentCard />
                            </div>
                        </div>


                        <div className="total-batches-container">
                            <Typography.Title level={4}>Your Batches</Typography.Title>
                            <div className="total-batches-card-container">
                                <DueAssignmentCard />
                                <DueAssignmentCard />
                                <DueAssignmentCard />
                                <DueAssignmentCard />
                                <DueAssignmentCard />
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>

        </>
    )
}

export default DashboardComponents