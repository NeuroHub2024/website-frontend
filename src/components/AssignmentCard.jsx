import { Link } from "react-router-dom";
import styles from "../styles/AssignmentCard.module.css";

const AssignmentCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <i className="fa-solid fa-file-lines fa-xl"></i>
        </div>
        <div>
        <div className={styles.title}>
          Assignment-I : Learning Flexbox in CSS
        </div>
        <Link className={styles.viewLink} to={"/assignment"}>View Assignment</Link>
        </div>
      </div>
      <div className={styles.subtitle}>
        <span> Due : 18/06/2024</span>
      </div>
    </div>
  );
};

export default AssignmentCard;
