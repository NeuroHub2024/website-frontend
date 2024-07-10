import React, { useEffect, useState } from 'react';
import { Avatar, Layout, Space, Spin, Typography, theme } from 'antd';
const { Content, Footer } = Layout;
import "../styles/Assignment.css"
import UploadAssignmentComponent from "../components/UploadAssignmentComponent.jsx"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const Assignment = () => {

    const params = useParams();
    const [assignment, setAssignment] = useState();
    const [loading, setLoading] = useState(false);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getAllAssignmentsById = async () => {
        setLoading(true);
        try {
            const token = Cookies.get('token');
            const response = await axios.get(`https://gateway-mpfy.onrender.com/assignment/${params.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response.data);
            setAssignment(response.data);
        }
        catch (err) {
            console.log(err)
        }
        setLoading(false);
    }




    useEffect(() => {
        getAllAssignmentsById();
    }, [params])

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>

            <Layout>
                {assignment ?
                    <Content
                        style={{
                            margin: '16px 16px',
                        }}
                    >

                        {/* <Typography.Text><h4>Assignment</h4></Typography.Text> */}
                        <div

                            className='assignment-container'
                            style={{
                                padding: 24,
                                background: colorBgContainer,
                            }}
                        >
                            <div className="assignment-description-container">
                                <Typography.Title level={3}>Assignment Description</Typography.Title>
                                <Typography.Text>
                                    {formatDate(assignment.due)}
                                </Typography.Text>
                                <br />
                                <Typography.Text>
                                    {assignment.body}
                                </Typography.Text>
                            </div>
                            <div className="assignment-upload-container">
                                <UploadAssignmentComponent />
                            </div>

                        </div>
                    </Content> : <Spin size='large' />}
            </Layout>

        </>
    )
}

export default Assignment