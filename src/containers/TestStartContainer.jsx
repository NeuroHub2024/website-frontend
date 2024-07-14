import React from 'react'
import { Select, Space, Input } from "antd";
import styles from "../styles/TestStart.module.css";

const TestStartContainer = ({handleSubmit, handleLimitChange, handleTagChange}) => {
    const limitOptions = [
        {
          label: "10",
          value: 10,
        },
        {
          label: "15",
          value: 15,
        },
        {
          label: "20",
          value: 20,
        },
      ];
    
      const tagOptions = [
        { label: "Linux", value: "Linux" },
        { label: "bash", value: "bash" },
        { label: "uncategorized", value: "uncategorized" },
        { label: "Docker", value: "Docker" },
        { label: "SQL", value: "SQL" },
        { label: "CMS", value: "CMS" },
        { label: "Code", value: "Code" },
        { label: "DevOps", value: "DevOps" }
      ]

  return (
    <div className={styles.fullContainer}>
      <h1>Test Your Skills</h1>
      <form>
        {/* <input type="text" placeholder='No of Questions' /> */}
        <Select
          style={{
             width: "100%",
             outline: '1px solid #ffffff',
             borderRadius: '5px'
          }}
          onChange={handleLimitChange}
          options={limitOptions}
          placeholder="No. of Questions"
        />
        <Select
          style={{
            width: "100%",
             outline: '1px solid #ffffff',
             borderRadius: '5px'
          }}
          placeholder="Category"
          onChange={handleTagChange}
          options={tagOptions}
        />
        <div className={styles.btnGrp}>
          <button onClick={handleSubmit} className={styles.submitBtn}>
            Start Test
          </button>
          <button className={styles.randomBtn}>Random Test</button>
        </div>
      </form>
    </div>
  )
}

export default TestStartContainer