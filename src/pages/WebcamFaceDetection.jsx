import React, { useEffect, useRef } from 'react';
// Test route
const WebcamFaceDetection = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
           
        // Get access to the webcam
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    video.srcObject = stream;
                })
                .catch((error) => {
                    console.log("Something went wrong!", error);
                });
        }

        const captureFrameAndSend = () => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert canvas to Blob
            canvas.toBlob((blob) => {
                if (blob) {
                    const formData = new FormData();
                    formData.append('frame', blob, 'frame.jpg');

                    fetch('https://cheating-detect-4.onrender.com/detect_faces', {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(`Number of faces detected: ${data.num_of_faces}`);
                        // Wait for response before capturing next frame
                        setTimeout(captureFrameAndSend, 5000);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        // Retry capturing next frame after 5 seconds if there's an error
                        setTimeout(captureFrameAndSend, 5000);
                    });
                } else {
                    console.error('Blob creation failed.');
                    setTimeout(captureFrameAndSend, 5000);
                }
            }, 'image/jpeg');
        };

        // Start the process
        captureFrameAndSend();
    }, []);

    return (
        <div>
            <h1>Webcam Live Feed</h1>
            <video ref={videoRef} width="640" height="480" autoPlay></video>
        </div>
    );
};

export default WebcamFaceDetection;
