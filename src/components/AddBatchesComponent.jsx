import React, { useState } from 'react'
import "../styles/AddBatch.css"
import { Typography } from 'antd'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
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


const AddBatchesComponent = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [language, setLanguage] = useState();
    const [loading, setLoading] = React.useState(false);

    const handleOnClick = async (e) => {
        e.preventDefault();

        const token = Cookies.get('token');

        const batch = {
            name,
            language,
            token
        }
        setLoading(true);
        try {
            const res = await axios.post('https://gateway-mpfy.onrender.com/batch/', batch);
            console.log(res.data);
        }
        catch (err) {
            console.log(err);
        }
        setLoading(false);

        // navigate('/batch');
    };

    // name: {
    //     type: String,
    //     required: true
    // },
    // language: {
    //     type: String,
    //     enum: ['English', 'Hindi', 'Hinglish'],
    //     required: true
    // },
    // teachers: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Teacher'
    // }],
    // students: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }],
    // lectures: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Video'
    // }],
    // assignments: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Assignment'
    // }]



    return (
        <>

            <div className="add-batch-container">
                <div className="add-batch-container-heading">
                    <Typography.Title level={2}>Enter the Batch Details</Typography.Title>
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
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <Input value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Item>

                            <Form.Item
                                label="Language"
                                name="language"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input!',
                                    },
                                ]}
                            >
                                <Select value={language} onChange={(e) => setLanguage(e)}>
                                    <Select.Option value="English">English</Select.Option>
                                    <Select.Option value="Hindi">Hindi</Select.Option>
                                    <Select.Option value="Hinglish">Hinglish</Select.Option>
                                </Select>
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

export default AddBatchesComponent