import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../styles/Batches.css'
import { Layout, Spin } from 'antd'
import { Content } from 'antd/es/layout/layout'
import LectureContainer from '../containers/LectureContainer'
import AssingmentContainer from '../containers/AssingmentContainer'
import AnnouncementContainer from '../containers/AnnouncementContainer'
import { useParams } from 'react-router-dom'
import Cookie from 'js-cookie'




const Batches = () => {
    const [component, setComponent] = useState(<div><LectureContainer /></div>)
    const [materialClass, setMaterialClass] = useState('batche-content-seleted');
    const [announcementClass, setAnnouncementClass] = useState('');
    const [assignmentClass, setAssignmentClass] = useState('');

    const [batch, setBatch] = useState();

    const handleSetComponent = (e, batchId, assignments, lectures, announcements) => {
        if (e === 'Material') {
            setComponent(<LectureContainer batchId={batchId} lectures={lectures} />)
            setMaterialClass('batche-content-seleted')
            setAnnouncementClass('')
            setAssignmentClass('')
        }
        else if (e === 'Announcement') {
            setComponent(<AnnouncementContainer batchId={batchId} announcements={announcements} />)
            setMaterialClass('')
            setAnnouncementClass('batche-content-seleted')
            setAssignmentClass('')
        }
        else if (e === 'Assignment') {
            setComponent(<AssingmentContainer batchId={batchId} assignments={assignments} />)
            setMaterialClass('')
            setAnnouncementClass('')
            setAssignmentClass('batche-content-seleted')
        }
    }

    const params = useParams();

    const getBatchId = async () => {
        try {
            const token = Cookie.get('token');


            const response = await axios.get(`https://gateway-mpfy.onrender.com/batch/${params.id}`, {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            setBatch(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBatchId();
    }, [])



    return (
        <>
            <Layout>
                <Content
                >

                    {batch ? <div className="batch-content-conatiner">
                        <div className="batch-main-container">
                            <div className="batch-heading-container">
                                <div className="batch-heading">
                                    <h2>{batch.name}</h2>
                                    <p>Ashutosh Jha and 1 other</p>
                                    <p>{batch.students.length} students enrolled</p>
                                </div>
                                <div className="batch-detail-container">
                                    <div className="batch-pending-assignment-continer  batch-assignmet-container">
                                        <h2>Pending Assignments</h2>
                                        <h3>2</h3>
                                    </div>
                                    <div className="batch-total-assignment-continer batch-assignmet-container">
                                        <h2>Total Assignments</h2>
                                        <h3>{batch.assignments.length}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="batch-content-seletor-container">
                            <div className={materialClass} onClick={() => handleSetComponent("Material", batch._id, batch.assignments, batch.lectures, batch.announcements)}><span> Lectures</span> </div>
                            <div className={announcementClass} onClick={() => handleSetComponent("Announcement", batch._id, batch.assignments, batch.lectures, batch.announcements)}><span>Announcement</span></div>
                            <div className={assignmentClass} onClick={() => handleSetComponent("Assignment", batch._id, batch.assignments, batch.lectures, batch.announcements)}><span>Assignment</span></div>
                        </div>

                        <div className="batch-button-selected-content">
                            {component}
                        </div>
                    </div> :
                        <Spin size='large' className='spin' ></Spin>}
                </Content>

            </Layout>

        </>
    )
}

export default Batches