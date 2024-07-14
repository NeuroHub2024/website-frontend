// import { Link } from "react-router-dom";
import React from 'react'
import styles from "../styles/AnnouncementCard.module.css";
import { Modal } from 'antd';

const formateDate = (date) => {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};


const AssignmentCard = ({ announcement }) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const showLoading = () => {
    setOpen(true);
    setLoading(true);
  };


  return (
    <>
      <Modal
        title={<p>{announcement.title}</p>}
        footer={
          <></>
        }
        loading={loading}
        open={open}
        onCancel={() => setOpen(false)}
      >
        <p>{announcement.message}</p>
      </Modal>
      <div className={styles.container} onClick={showLoading}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <i className="fa-solid fa-bullhorn fa-lg"></i>
          </div>
          <div>
            <div className={styles.title}>
              {announcement.title}
            </div>
            {/* <Link className={styles.viewLink} to={"/assignment"}>View Assignment</Link> */}
          </div>
        </div>
        <div className={styles.subtitle}>
          <span> Due : {formateDate(announcement.date)}</span>
        </div>
      </div>
    </>
  );
};

export default AssignmentCard;
