import { useState } from 'react'
import axios from 'axios'
import Cookie from 'js-cookie'
import React, { useEffect } from 'react'
import AssignmentCard from '../components/AssignmentCard'
import styles from '../styles/LectureContainer.module.css'
import { Button, Spin } from 'antd'
import { Link } from 'react-router-dom'
import { PlusCircleOutlined } from '@ant-design/icons'


const AssingmentContainer = ({ batchId, assignments }) => {

  const [ass, setAss] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllAssignmentsById = async () => {
    setLoading(true);
    try {
      const token = Cookie.get('token');
      const assignmentPromises = assignments.map(assignmentId =>
        axios.get(`https://gateway-mpfy.onrender.com/assignment/${assignmentId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      );

      const responses = await Promise.all(assignmentPromises);
      const assignmentData = responses.map(response => response.data);
      setAss(assignmentData);
      console.log(assignmentData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllAssignmentsById();
  }, [assignments])
  return (
    <div>
      <div className={styles.add_content_btn_container} ><Link to={`/add-assignment/${batchId}`}><Button className="add-batch-btn" type='primary' shape='round' icon={<PlusCircleOutlined />} size='middle'>Add Assignment  </Button>  </Link></div>
      <Spin size='large' spinning={loading}>

        {ass.map((assignment, index) => (
          <AssignmentCard key={index} assignment={assignment} />
        ))}
      </Spin>
    </div>
  )
}

export default AssingmentContainer