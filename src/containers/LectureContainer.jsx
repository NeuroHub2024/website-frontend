import React from "react";
import VideoCard from "../components/VideoCard";
import styles from '../styles/LectureContainer.module.css'

const LectureContainer = () => {
  return (
    <div className={styles.container}>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
};

export default LectureContainer;
