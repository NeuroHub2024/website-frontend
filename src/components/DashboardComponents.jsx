import React from 'react';
import { Avatar, Card, Layout, Space, Typography, theme } from 'antd';
import { Empty } from 'antd';
const { Content, Footer } = Layout;
import { Button, Col, Row, Statistic } from 'antd';
import "../styles/DashboardComponents.css"
import DueAssignmentCard from './DueAssignment';
import { Calendar } from 'antd';
import live_class_img from "../assets/Live_Class.png"
import { List } from 'antd';
import { Link } from 'react-router-dom';

const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const DashboardComponents = () => {

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    return (
        <>

            <Layout>

                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <div className='dashboard-avatar-box'>
                        <div className='user-greetings-container'>
                            <Avatar src={'https://api.dicebear.com/7.x/miniavs/svg'} size={{
                                xs: 24,
                                sm: 32,
                                md: 40,
                                lg: 64,
                                xl: 80,
                                xxl: 100,
                            }} />
                            <h2>Welcom User</h2>
                        </div>
                        <div className="dashboard-data-container">
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Statistic title="Total Students" value={112893} />
                                </Col>
                                <Col span={12}>
                                    <Statistic title="Total Batches" value={10} />
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="calnder-container">
                        <div className='calender'>
                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                        </div>
                        <div className="live-class-container">
                            <Empty
                                image={live_class_img}
                                description={
                                    <Typography.Text style={{ color: 'grey' }}>
                                        Batch:  <a href="#API">GDM (2/2)</a>
                                    </Typography.Text>
                                }
                            >
                                <Button type="primary" style={{ boxShadow: 'none', backgroundColor: "#ff3453" }} >Live Class</Button>
                            </Empty>
                        </div>
                    </div>

                    <div className="list-container">
                        <div className="upcomming-classes-container">
                            <Typography.Title level={4}>Batches</Typography.Title>

                            <div className="list-bg-color">
                                <List
                                    dataSource={data}
                                    renderItem={(item, index) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                                title={<Link to={"/batches"}>{item.title}</Link>}
                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            />
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="notice-container">
                            <Typography.Title level={4}>Notice Board</Typography.Title>

                            <div className="list-bg-color">
                                <List
                                    dataSource={data}
                                    renderItem={(item, index) => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                                title={<a href="https://ant.design">{item.title}</a>}
                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                            />
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className='dashboard-main-container' >
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
                    </div> */}
                </Content>
            </Layout>

        </>
    )
}

export default DashboardComponents