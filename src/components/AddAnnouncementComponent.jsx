import React, { useState } from 'react'
import { Typography } from 'antd'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import { Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};

const AddAnnouncementComponent = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState();
    const [loading, setLoading] = React.useState(false);

    const handleOnClick = async (e) => {
        e.preventDefault();

        const batch = {
            title,
            content
        }
        setLoading(true);
        try {
            // const res = await axios.post('https://gateway-mpfy.onrender.com/batch/', batch);
            // console.log(res.data);
            alert("Lecture Added Successfully " + title + " " + content);
        }
        catch (err) {
            console.log(err);
        }
        setLoading(false);

        // navigate('/batch');
    };
    return (
        <>
            <div className="add-batch-container">
                <div className="add-batch-container-heading">
                    <Typography.Title level={2}>Enter the Announcement Details</Typography.Title>
                </div>
                <div className="add-batch-detail-form-container">
                    <Spin className='loader-container' spinning={loading} >
                        <Form
                            {...formItemLayout}
                            variant="filled"
                            style={{
                                minWidth: '100%'
                            }}
                        >
                            <Form.Item
                                label="Title"
                                title="title"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                            </Form.Item>
                            <Form.Item
                                label="Content"
                                title="content"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <TextArea rows={4} value={content} onChange={(e) => setContent(e.target.value)} />
                            </Form.Item>


                            <Form.Item
                                wrapperCol={{
                                    offset: 6,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" className='submit-button' htmlType="submit" onClick={handleOnClick}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Spin>
                </div>
            </div>
        </>
    )
}

export default AddAnnouncementComponent