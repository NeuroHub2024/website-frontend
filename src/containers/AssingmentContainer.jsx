import React from 'react'
import AssignmentCard from '../components/AssignmentCard'
import styles from '../styles/LectureContainer.module.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { PlusCircleOutlined } from '@ant-design/icons'

const AssingmentContainer = () => {
  return (
    <div>
      <div className={styles.add_content_btn_container} ><Link to={'/add-assignment'}><Button className="add-batch-btn" type='primary' shape='round' icon={<PlusCircleOutlined />} size='middle'>Add Assignment</Button>  </Link></div>
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