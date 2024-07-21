import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/TestQuizContainer.module.css";
import { useNavigate } from "react-router-dom";

// QUESTION CARD FOR A SINGLE QUESTION : PASS A SINGLE QUESTION OBJECT AS PROP
const QuestionCard = ({ question, isTestSubmit, setScore }) => {
  const [checked, setChecked] = useState(0);

  const optionMap = {
    0: null,
    1: "answer_a",
    2: "answer_b",
    3: "answer_c",
    4: "answer_d",
    5: "answer_e",
    6: "answer_f",
  };

  const correctOptionMap = {
    0: null,
    1: "answer_a_correct",
    2: "answer_b_correct",
    3: "answer_c_correct",
    4: "answer_d_correct",
    5: "answer_e_correct",
    6: "answer_f_correct",
  };

  // console.log(question.correct_answer)

  const handleCheck = (e, ind) => {
    if (!isTestSubmit) {
      setChecked((prev) => (ind === prev ? 0 : ind));
    }
  };

  useEffect(() => {
    // console.log(optionMap[checked])
    if (question.correct_answers[correctOptionMap[checked]]) {
      setScore((score) => (score += 2));
    }
    console.log(isTestSubmit);
  }, [isTestSubmit]);

  const optionClassList = `${styles.optionCard} ${
    checked === 1 ? styles.checked : ""
  } ${
    isTestSubmit && question.correct_answers[correctOptionMap[1]]
      ? styles.correct
      : ""
  } ${
    isTestSubmit &&
    checked === 1 &&
    question.correct_answers[correctOptionMap[1]]
      ? styles.incorrect
      : ""
  }`;

  return (
    <div className={styles.quesContainer}>
      <div className={styles.questionHeadingContainer}>
        <p>{question.question}</p>
      </div>
      <div className={styles.optionsContainer}>
        {question.answers.answer_a && (
          <div onClick={(e) => handleCheck(e, 1)} className={optionClassList}>
            <p>
              {question.answers.answer_a} {isTestSubmit}
            </p>
          </div>
        )}
        {/* {question.answers.answer_b && (
          <div
            onClick={(e) => handleCheck(e, 2)}
            className={`${styles.optionCard} ${
              checked === 2 ? styles.checked : ""
            }
            ${(isTestSubmit && checked === 2 && !question.correct_answers[correctOptionMap[2]]) ? styles.incorrect : ""}
            ${(isTestSubmit && question.correct_answers[correctOptionMap[2]]) ? styles.correct : ""}
            `}
          >
            <p>{question.answers.answer_b} {isTestSubmit && question.correct_answers[correctOptionMap[2]]}</p>
          </div>
        )} */}
        {/* {question.answers.answer_c && (
          <div
            onClick={(e) => handleCheck(e, 3)}
            className={`${styles.optionCard} ${
              checked === 3 ? styles.checked : ""
            }
            ${(isTestSubmit && question.correct_answers[correctOptionMap[3]]) ? styles.correct : ""}
            ${(isTestSubmit && checked === 3 && !question.correct_answers[correctOptionMap[3]]) ? styles.incorrect : ""}
            `}
          >
            <p>{question.answers.answer_c}</p>
          </div>
        )} */}
        {/* {question.answers.answer_d && (
          <div
            onClick={(e) => handleCheck(e, 4)}
            className={`${styles.optionCard} ${
              checked === 4 ? styles.checked : ""
            }
            ${(isTestSubmit && question.correct_answers[correctOptionMap[4]]) ? styles.correct : ""}
            ${(isTestSubmit && checked === 4 && !question.correct_answers[correctOptionMap[4]]) ? styles.incorrect : ""}
            `}
          >
            <p>{question.answers.answer_d}</p>
          </div>
        )} */}
        {/* {question.answers.answer_e && (
          <div
            onClick={(e) => handleCheck(e, 5)}
            className={`${styles.optionCard} ${
              checked === 5 ? styles.checked : ""
            }
            ${(isTestSubmit && question.correct_answers[correctOptionMap[5]]) ? styles.correct : ""}
            ${(isTestSubmit && checked === 5 && !question.correct_answers[correctOptionMap[5]]) ? styles.incorrect : ""}
            `}
          >
            <p>{question.answers.answer_e}</p>
          </div>
        )} */}
        {/* {question.answers.answer_f && (
          <div
            onClick={(e) => handleCheck(e, 6)}
            className={`${styles.optionCard} ${
              checked === 6 ? styles.checked : ""
            }
            ${(isTestSubmit && question.correct_answers[correctOptionMap[6]]) ? styles.correct : ""}
              ${(isTestSubmit && checked === 6 && !question.correct_answers[correctOptionMap[6]]) ? styles.incorrect : ""}
            `}
          >
            <p>{question.answers.answer_f}</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

// MAIN QUIZ CONTAINER COMPONENT
const TestQuizContainer = ({
  questions,
  category,
  isTestSubmit,
  setIsTestSubmit,
}) => {
  const videoRef = useRef(null);

  const [score, setScore] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    // Get access to the webcam
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((error) => {
          console.log("Something went wrong!", error);
        });
    }

    const captureFrameAndSend = () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas to Blob
      canvas.toBlob((blob) => {
        if (blob) {
          const formData = new FormData();
          formData.append("frame", blob, "frame.jpg");

          fetch("https://cheating-detect-4.onrender.com/detect_faces", {
            method: "POST",
            body: formData,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(`Number of faces detected: ${data.num_of_faces}`);
              // Wait for response before capturing next frame
              setTimeout(captureFrameAndSend, 5000);
            })
            .catch((error) => {
              console.error("Error:", error);
              // Retry capturing next frame after 5 seconds if there's an error
              setTimeout(captureFrameAndSend, 5000);
            });
        } else {
          console.error("Blob creation failed.");
          setTimeout(captureFrameAndSend, 5000);
        }
      }, "image/jpeg");
    };

    // Start the process
    captureFrameAndSend();
  }, []);

  useEffect(() => {
    console.log("istestsubmit from parent : " + isTestSubmit);
  }, [isTestSubmit]);

  return (
    <div style={{ width: "100%" }}>
      <video
        style={{
          position: "fixed",
          bottom: "3rem",
          right: "1rem",
          border: "5px solid lightgray",
          borderRadius: "10px",
          width: "15%",
          minWidth: "100px",
          height: "fit-content",
          zIndex: 10,
        }}
        ref={videoRef}
        width=""
        height="150"
        autoPlay
      ></video>

      {/* Main body */}
      <div className={styles.quizSection}>
        <div className={styles.headingSection}>
          <h1>Practice Test : {category}</h1>
          <p>Questions : {questions.length}</p>
          <p>Total Marks : {questions.length * 2}</p>
          {isTestSubmit && (
            <p>
              Score : {score} / {questions.length * 2}
            </p>
          )}
        </div>
        <div className={styles.quizForm}>
          {questions.map((question, index) => (
            <QuestionCard
              key={index}
              question={question}
              isTestSubmit={isTestSubmit}
              setScore={setScore}
            />
          ))}
          <button
            disabled={isTestSubmit}
            className={styles.submitBtn}
            onClick={() => {
              if (confirm("Do you want to submit the test?")) {
                setScore(0);
                setIsTestSubmit(true);
                console.log("isTestSubmit : " + isTestSubmit);
                window.scrollTo(0, 0);
              }
            }}
          >
            {" "}
            Submit Test{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestQuizContainer;
