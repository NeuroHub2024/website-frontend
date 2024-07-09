import axios from 'axios'
import Cookie from 'js-cookie'
import React, { useEffect } from 'react'
import AssignmentCard from '../components/AssignmentCard'
import styles from '../styles/LectureContainer.module.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { PlusCircleOutlined } from '@ant-design/icons'

const AssingmentContainer = ({ batchId, assignments }) => {

  const getAllAssignments = async () => {
    try {
      const token = Cookie.get('token');
      const response = await axios.get(`https://gateway-mpfy.onrender.com/assignment/`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      console.log(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllAssignments();
  }, [])
  return (
    <div>
      <div className={styles.add_content_btn_container} ><Link to={`/add-assignment/${batchId}`}><Button className="add-batch-btn" type='primary' shape='round' icon={<PlusCircleOutlined />} size='middle'>Add Assignment  </Button>  </Link></div>
      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />
      <AssignmentCard />
    </div>
  )
}

export default AssingmentContainer