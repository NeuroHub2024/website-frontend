import { Link } from "react-router-dom";
import styles from "../styles/AssignmentCard.module.css";
import { Spin } from "antd";

const AssignmentCard = ({ assignment }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <>
      {assignment ? <div className={styles.headingContainer}>
        <div className={styles.left}>
          <div className={styles.icon}>
            <i className="fa-solid fa-file-lines fa-xl"></i>
          </div>
          <div>
            <div className={styles.title}>
              {assignment.title}
            </div>
            <Link className={styles.viewLink} to={`/assignment/${assignment._id}`}>View Assignment</Link>
          </div>
        </div>
        <div className={styles.subtitle}>
          <span> Due : {formatDate(assignment.due)}</span>
        </div>
      </div> :
        <Spin />
      }
    </>
  );
};

export default AssignmentCard;
