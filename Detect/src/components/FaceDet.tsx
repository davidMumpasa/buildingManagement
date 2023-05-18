import React, { useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';
import './App.css';

function FaceDetect() {
  const videoRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      await faceapi.loadFaceLandmarkModel('/models');
      await faceapi.loadFaceRecognitionModel('/models');
    };

    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            (videoRef.current as HTMLVideoElement).srcObject = stream;
          }
        })
        .catch((error) => {
          console.error('Error accessing camera:', error);
        });
    };
    
    

    const detectFaces = async () => {
      const video = videoRef.current as unknown as HTMLVideoElement;
    
      if (video && video.readyState === 4) {
        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
        console.log(detections);
      }
    };
    

    loadModels().then(() => {
      startVideo();
    });

    setInterval(detectFaces, 100); // Detect faces every 100ms

    return () => {
      // Cleanup
      if (videoRef.current && (videoRef.current as HTMLVideoElement).srcObject) {
        const stream = (videoRef.current as HTMLVideoElement).srcObject as MediaStream;
        const tracks = stream.getTracks();
    
        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
    
  }, []);

  return (
    <div className="App">
      <video
        ref={videoRef}
        autoPlay
        muted
        style={{ transform: 'scaleX(-1)', width: '100%', height: 'auto' }}
      />
    </div>
  );
}

export default FaceDetect;
