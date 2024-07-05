import { Button, Typography } from 'antd'
import React from 'react'
import "../styles/allbatches.css"
import { PlusCircleOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
const data = Array.from({
    length: 23,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: <Link to={`/batch`} >ant design part</Link>,
    avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Batches = () => {
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
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: (page) => {
                                console.log(page);
                            },
                            pageSize: 3,
                        }}
                        dataSource={data}

                        renderItem={(item) => (
                            <List.Item
                                key={item.title}
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
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />
                </div>
            </div>

        </>
    )
}

export default Batches