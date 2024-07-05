// import React, { useState } from 'react'
// import "../styles/AddBatch.css"
// import { Typography } from 'antd'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import {
//     Button,
//     Form,
//     Input,
//     Select,
// } from 'antd';
// import { Spin } from 'antd';
// const formItemLayout = {
//     labelCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 6,
//         },
//     },
//     wrapperCol: {
//         xs: {
//             span: 24,
//         },
//         sm: {
//             span: 14,
//         },
//     },
// };


// const AddBatchesComponent = () => {
//     const navigate = useNavigate();

//     const [name, setName] = useState("");
//     const [language, setLanguage] = useState();
//     const [loading, setLoading] = React.useState(false);

//     const handleOnClick = async (e) => {
//         e.preventDefault();
//         debugger
//         const token = Cookies.get('token');

//         const batch = {
//             name,
//             language,
//             token
//         }
//         setLoading(true);
//         try {
//             const res = await axios.post('https:/gateway-mpfy.onrender.com/batch/', batch);
//             console.log(res.data);
//         }
//         catch (err) {
//             console.log(err);
//         }
//         setLoading(false);

//         // navigate('/batch');
//     };
//     return (
//         <>

//             <div className="add-batch-container">
//                 <div className="add-batch-container-heading">
//                     <Typography.Title level={2}>Enter the Batch Details</Typography.Title>
//                 </div>
//                 <div className="add-batch-detail-form-container">
//                     <Spin className='loader-container' spinning={loading} >
//                         <Form
//                             {...formItemLayout}
//                             variant="filled"
//                             style={{
//                                 minWidth: '100%'
//                             }}
//                         >
//                             <Form.Item
//                                 label="Name"
//                                 name="name"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Please input!',
//                                     },
//                                 ]}
//                             >
//                                 <Input value={name} onChange={(e) => setName(e.target.value)} />
//                             </Form.Item>

//                             <Form.Item
//                                 label="Language"
//                                 name="language"
//                                 rules={[
//                                     {
//                                         required: true,
//                                         message: 'Please input!',
//                                     },
//                                 ]}
//                             >
//                                 <Select value={language} onChange={(e) => setLanguage(e)}>
//                                     <Select.Option value="English">English</Select.Option>
//                                     <Select.Option value="Hindi">Hindi</Select.Option>
//                                     <Select.Option value="Hinglish">Hinglish</Select.Option>
//                                 </Select>
//                             </Form.Item>
//                             <Form.Item
//                                 wrapperCol={{
//                                     offset: 6,
//                                     span: 16,
//                                 }}
//                             >
//                                 <Button type="primary" className='submit-button' htmlType="submit" onClick={handleOnClick}>
//                                     Submit
//                                 </Button>
//                             </Form.Item>
//                         </Form>
//                     </Spin>
//                 </div>
//             </div>


//         </>
//     )
// }

// export default AddBatchesComponent

import React, { useState } from 'react';
import "../styles/AddBatch.css";
import { Typography, Button, Form, Input, Select, Spin } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const AddBatchesComponent = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [language, setLanguage] = useState();
    const [loading, setLoading] = useState(false);

    const handleOnClick = async (e) => {
        e.preventDefault();
        debugger
        const token = Cookies.get('token');

        if (!token) {
            console.error('No token found in cookies');
            return;
        }

        const batch = { name, language };

        setLoading(true);
        try {
            const res = await axios.post(
                'https://gateway-mpfy.onrender.com/batch/',
                batch,
                { token }
            );
            console.log(res.data);
            navigate('/batch');
        } catch (err) {
            console.error('Error submitting batch:', err);
        }
        setLoading(false);
    };

    return (
        <div className="add-batch-container">
            <div className="add-batch-container-heading">
                <Typography.Title level={2}>Enter the Batch Details</Typography.Title>
            </div>
            <div className="add-batch-detail-form-container">
                <Spin className='loader-container' spinning={loading}>
                    <Form {...formItemLayout} style={{ minWidth: '100%' }}>
                        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input!' }]}>
                            <Input value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Item>
                        <Form.Item label="Language" name="language" rules={[{ required: true, message: 'Please input!' }]}>
                            <Select value={language} onChange={(e) => setLanguage(e)}>
                                <Select.Option value="English">English</Select.Option>
                                <Select.Option value="Hindi">Hindi</Select.Option>
                                <Select.Option value="Hinglish">Hinglish</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                            <Button type="primary" htmlType="submit" onClick={handleOnClick}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </div>
    );
};

export default AddBatchesComponent;
