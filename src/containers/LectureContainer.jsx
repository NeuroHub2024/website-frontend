import React from "react";
import VideoCard from "../components/VideoCard";
import styles from '../styles/LectureContainer.module.css'
import { Link } from "react-router-dom";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const LectureContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.add_content_btn_container} ><Link to={'/add-lecture'}><Button className="add-batch-btn" type='primary' shape='round' icon={<PlusCircleOutlined />} size='middle'>Add Lecture</Button>  </Link></div>
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
