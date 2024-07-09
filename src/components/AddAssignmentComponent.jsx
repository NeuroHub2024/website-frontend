import React, { useState } from 'react'
import { DatePicker, Typography } from 'antd'
import axios from 'axios';
import Cookie from 'js-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import { Spin } from 'antd';
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

const AddAssignmentComponent = () => {
    const navigate = useNavigate();
    const params = useParams();

    const [title, setTitle] = useState("");
    const [date, setDate] = useState();
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    const handleOnClick = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const token = Cookie.get('token');
            const authResponse = await axios.post(
                'https://gateway-mpfy.onrender.com/user/authenticate',
                { 'token': token }, // No need to send anything in the body
                { withCredentials: true }
            );
            const userId = authResponse.data._id;
            const paresedDate = new Date(date);

            const assignment = {
                title: title,
                createdBy: userId,
                due: paresedDate,
                body: body,
            }

            const response = await axios.post(
                `https://gateway-mpfy.onrender.com/assignment/createassignment/${params.batchId}`,
                assignment,
                {
                    withCredentials: true, headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            console.log("Batch Created : ", response.data);

            const assignmentId = response.data._id;

            const res = await axios.post(
                `https://gateway-mpfy.onrender.com/batch/${params.batchId}/assignment/${assignmentId}`,
                assignment,
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
                    <Typography.Title level={2}>Enter the Assignment Details</Typography.Title>
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
                                title="Title"
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
                                label="Due Date"
                                name="date"

                            >
                                <DatePicker value={date} onChange={(date, dateString) => setDate(dateString)} />
                            </Form.Item>

                            <Form.Item
                                label="TextArea"
                                name="TextArea"
                                rules={[
                                    {
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <Input.TextArea
                                    value={body} onChange={(e) => setBody(e.target.value)} />
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

export default AddAssignmentComponent