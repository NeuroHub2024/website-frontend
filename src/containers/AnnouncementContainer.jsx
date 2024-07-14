import React, { useEffect, useState } from 'react'
import AnnouncementCard from '../components/AnnouncementCard'
import styles from '../styles/LectureContainer.module.css'
import { Button, Spin } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Cookie from 'js-cookie'
import { PlusCircleOutlined } from '@ant-design/icons'

const AnnouncementContainer = ({ batchId, announcements }) => {

  const [loading, setLoading] = useState(false);
  const [announce, setAnnOunce] = useState([]);

  const getAllAnnouncementsById = async () => {
    setLoading(true);
    try {
      const token = Cookie.get('token');
      const announcementPromises = announcements.map(announcementId =>
        axios.get(`https://gateway-mpfy.onrender.com/announcement/${announcementId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
      );

      const responses = await Promise.all(announcementPromises);
      const announcementData = responses.map(response => response.data);
      setAnnOunce(announcementData);
      console.log(assignmentData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllAnnouncementsById();
  }, [announcements])


  return (
    <div>
      <div className={styles.add_content_btn_container} ><Link to={`/add-announcement/${batchId}`}><Button className="add-batch-btn" type='primary' shape='round' icon={<PlusCircleOutlined />} size='middle'>Add Announcement</Button>  </Link></div>

      <Spin size='large' spinning={loading}>
        {announce.map((announcement, index) => (
          <AnnouncementCard key={index} announcement={announcement} />
        ))}
      </Spin>

    </div>
  )
}

export default AnnouncementContainer