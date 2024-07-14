import React, { useState } from 'react'
import { DatePicker, Typography } from 'antd'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import Cookies from 'js-cookie';
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
    const params = useParams();

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState();
    const [date, setDate] = useState();
    const [loading, setLoading] = React.useState(false);

    const handleOnClick = async (e) => {
        e.preventDefault();

        const announcement = {
            title: title,
            message: message,
            date: date,
            batchId: params.batchId
        }

        setLoading(true);
        try {
            const token = Cookies.get('token');
            const { data } = await axios.post('https://gateway-mpfy.onrender.com/announcement/', announcement, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // console.log(data);
            const announcementId = data._id;

            const res = await axios.post(
                `https://gateway-mpfy.onrender.com/batch/${params.batchId}/announcement/${announcementId}`,
                {},
                {
                    withCredentials: true, headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            console.log(res.data);

            navigate(`/batch/${params.batchId}`)
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
                                label="Date"
                                name="date"

                            >
                                <DatePicker value={date} onChange={(date, dateString) => setDate(dateString)} />
                            </Form.Item>
                            <Form.Item
                                label="Message"
                                title="Message"
                            >
                                <TextArea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
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