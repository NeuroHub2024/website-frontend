import React, { useState, useEffect } from "react";
import { Select, Space, Input } from "antd";
import styles from "../styles/TestStart.module.css";
import TestStartContainer from "../containers/TestStartContainer";
import TestQuizContainer from "../containers/TestQuizContainer";

function TestStart() {
  const [numQues, setNumQues] = useState(0)
  const [tagList, setTagList] = useState()
  const [questions, setQuestions] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)
  const [isTestSubmit, setIsTestSubmit] = useState(false)
  
  const handleLimitChange = (value) => {
    setNumQues(value)
    // console.log(numQues)
  };
  const handleTagChange = (value) => {
    setTagList(value)
    // console.log(tagList)
  };

  const handleSubmit = async(event) => {
    event.preventDefault()
    const res = await fetch(`https://quizapi.io/api/v1/questions?apiKey=R2M9aEKRo2H3wBdmlXSHYbdOBtjsNCHEl63h5kXU&limit=${numQues}&category=${tagList}`)
    const data = await res.json()
    setQuestions(data)
    const timer = setTimeout(()=>console.log(questions), 1000)
    clearTimeout(timer)
    setIsSubmit(true)
  };

  useEffect(() => {
    console.log(numQues);
  }, [numQues]);

  useEffect(() => {
    console.log(tagList);
  }, [tagList]);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    !isSubmit ? 
    <TestStartContainer
    handleLimitChange={handleLimitChange}
    handleSubmit={handleSubmit}
    handleTagChange={handleTagChange}
    />
    :
    <TestQuizContainer questions={questions} category={tagList} isTestSubmit={isTestSubmit} setIsTestSubmit={setIsTestSubmit} />
  );
}

export default TestStart;
