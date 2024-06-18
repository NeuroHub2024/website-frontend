import React from 'react'
import styles from '../styles/videocard.module.css'

const VideoCard = () => {
  return (
    <div className={styles.container}>
        <button className={styles.icon}><i className="fa-solid fa-play fa-lg"></i></button>
        <div className={styles.title}>
          World History - I
          <br/>
          <span className={styles.duration}>47:23</span>
        </div>
    </div>
  )
}

export default VideoCard