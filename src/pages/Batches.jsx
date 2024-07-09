import Cookies from 'js-cookie'
import { Button, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import "../styles/allbatches.css"
import { PlusCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space, Spin } from 'antd';
import axios from 'axios'

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Batches = () => {

    const [batches, setBatches] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBatches = async () => {
        setLoading(true);
        try {
            const token = Cookies.get("token");
            const { data } = await axios.post("https://gateway-mpfy.onrender.com/batch/getbatches", {}, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            setBatches(data);
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        getBatches();
    }, [])


    return (
        <>
            <div className="batches-container">
                <div className="batches-container-heading">
                    <Typography.Title >All Batches</Typography.Title>
                    <Link to={'/add-batch'}> <Button className='add-batch-btn' type='primary' shape='round' icon={<PlusCircleOutlined />} size='middle'>
                        Add Batch
                    </Button>  </Link>
                </div>
                <div className="all-batches-lists">
                    <Spin size="large" spinning={loading}>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                onChange: (page) => {
                                    console.log(page);
                                },
                                pageSize: 3,
                            }}
                            dataSource={batches}

                            renderItem={(item) => (
                                <List.Item
                                    key={item._id}
                                    actions={[
                                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar src={'https://api.dicebear.com/7.x/miniavs/svg'} />}
                                        title={<a href={`/batch/${item._id}`}>{item.name}</a>}
                                    // description={ }

                                    />
                                    {"Language: " + item.language}
                                </List.Item>
                            )}
                        />
                    </Spin>
                </div>
            </div>

        </>
    )
}

export default Batches