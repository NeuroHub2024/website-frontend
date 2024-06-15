import React, { useState } from 'react';
import "../styles/UploadAssignmentComponent.css";
import pdfToText from 'react-pdftotext'

const UploadAssignmentComponent = () => {
    const [file, setFile] = useState(null);
    const [label, setLabel] = useState("");
    const [humanPer, setHumanPer] = useState(0);
    const [AIPer, setAIPer] = useState(0);
    const [hidden, setHidden] = useState(true);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleOnClick = async () => {
        if (file) {
            console.log(`Selected file: ${file.name}`);
            const content = await pdfToText(file);

            const data = {
                text: content
            }
            const url = "http://13.233.253.145:3000/predict"

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const responseData = await response.json();

            if (responseData) {
                setLabel(responseData.label === "1" ? "AI-generated" : "Human-generated");
                setHumanPer(parseFloat(responseData["human-genrated"]).toFixed(2));
                setAIPer(parseFloat(responseData["ai-generated"]).toFixed(2));
            }

            setHidden(false);


        } else {
            console.log('No file selected.');
        }
    };

    return (
        <>
            <div className="upload-assignment-container">
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleOnClick}>Check plagiarism</button>

                <div className="plagrism-result-container" style={{
                    display: hidden ? "none" : "block"
                }}>
                    <p>Plagrism Result: {label}</p>
                    <p>Human Generated Percentage : {humanPer}</p>
                    <p>AI Generated Percentage : {AIPer}</p>
                </div>
            </div>
        </>
    );
};

export default UploadAssignmentComponent;
