import React from 'react'
import AnnouncementCard from '../components/AnnouncementCard'
import styles from '../styles/LectureContainer.module.css'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import { PlusCircleOutlined } from '@ant-design/icons'

const AnnouncementContainer = () => {
  return (
    <div>
      <div className={styles.add_content_btn_container} ><Link to={'/add-announcement'}><Button className="add-batch-btn" type='primary' shape='round' icon={<PlusCircleOutlined />} size='middle'>Add Announcement</Button>  </Link></div>
      <AnnouncementCard />
    </div>
  )
}

export default AnnouncementContainer