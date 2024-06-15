import React, { useState } from 'react'
import '../styles/Batches.css'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Assignment from './Assignment'




const Batches = () => {
    const [component, setComponent] = useState(<div>Material</div>)
    const [materialClass, setMaterialClass] = useState('batche-content-seleted');
    const [announcementClass, setAnnouncementClass] = useState('');
    const [assignmentClass, setAssignmentClass] = useState('');
    const handleSetComponent = (e) => {
        if (e === 'Material') {
            setComponent(<div>Material</div>)
            setMaterialClass('batche-content-seleted')
            setAnnouncementClass('')
            setAssignmentClass('')
        }
        else if (e === 'Announcement') {
            setComponent(<div>Announcement</div>)
            setMaterialClass('')
            setAnnouncementClass('batche-content-seleted')
            setAssignmentClass('')
        }
        else if (e === 'Assignment') {
            setComponent(<Assignment />)
            setMaterialClass('')
            setAnnouncementClass('')
            setAssignmentClass('batche-content-seleted')
        }
    }


    return (
        <>
            <Layout>
                <Content
                >

                    <div className="batch-content-conatiner">
                        <div className="batch-main-container">
                            <div className="batch-heading-container">
                                <div className="batch-heading">
                                    <h2>Data Structure and Algorithms</h2>
                                    <p>Ashutosh Jha and 1 other</p>
                                    <p>42 students enrolled</p>
                                </div>
                                <div className="batch-detail-container">
                                    <div className="batch-pending-assignment-continer  batch-assignmet-container">
                                        <h2>Pending Assignments</h2>
                                        <h3>2</h3>
                                    </div>
                                    <div className="batch-total-assignment-continer batch-assignmet-container">
                                        <h2>Total Assignments</h2>
                                        <h3>12</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="batch-content-seletor-container">
                            <div className={materialClass} onClick={() => handleSetComponent("Material")}><span> Lectures</span> </div>
                            <div className={announcementClass} onClick={() => handleSetComponent("Announcement")}><span>Announcement</span></div>
                            <div className={assignmentClass} onClick={() => handleSetComponent("Assignment")}><span>Assignment</span></div>
                        </div>

                        <div className="batch-button-selected-content">
                            {component}
                        </div>
                    </div>
                </Content>
            </Layout>

        </>
    )
}

export default Batches