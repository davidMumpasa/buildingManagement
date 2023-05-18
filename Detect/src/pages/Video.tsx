import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { IonButton, IonContent, IonPage } from "@ionic/react";
import "./Video.css";
import { logOut } from "ionicons/icons";
import { MdArrowBack } from "react-icons/md";
import { TbFaceId } from "react-icons/tb";
import { FaUserTie } from "react-icons/fa";
import { ImUserCheck } from "react-icons/im";

const Video: React.FC = () => {
  const videoRef: any = useRef<HTMLVideoElement>(null);
  const canvasRef: any = useRef<HTMLCanvasElement>(null);
  const [labels, setlabels]: any = useState([""]);
  const [processing, set_processing]: any = useState(false);
  const [data, setData]: any = useState([]);

  ///
  const [lableNmae, setLableName]: any = useState();
  const [lableNumber, setLableNumber]: any = useState();
  const [emplyeeId, setEmplyeeID]: any = useState();
  const [accessType, setAccessType]: any = useState();

  const lableData: any = {
    lable_name: lableNmae,
    lable_number: lableNumber,
    access_type: accessType,
    employee_id: emplyeeId,
  };

  //Add emp log
  async function RegisterEmployeeOrVisitor() {
    //https://facedectection.co.za/api/add
    const data = fetch("https://facedectection.co.za/api/add_face", {
      method: "POST",
      mode: "cors",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(lableData),
    }).then(async (response) => {
      if (!response.ok) {
        const validation = await response.json();
        //Assgn error var
        console.log(validation);
      } else {
        //Alert
        const validation = await response.json();
        console.log(validation);
      }
    });
  }

  //V
  async function accessLables() {
    const data = fetch("https://facedectection.co.za/api/faceDetection", {
      method: "POST",
      mode: "cors",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(""),
    }).then(async (response) => {
      if (!response.ok) {
        const validation = await response.json();
        console.log(validation);
      } else {
        //Alert
        const validation = await response.json();

        const newLabels = validation.lables.map(
          (label: any) => label.lable_name
        ); // map each label to its name

        const newLabels1 = validation.lables.map((label1: any) => label1); // map each label to its name
        setlabels(newLabels);
        setData(newLabels1);
      }
    });
  }

  useEffect(() => {
    accessLables();
  }, []);

  useEffect(() => {
    console.log(labels);
  }, [labels]);

  //V

  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      ]);
    };

    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error(error);
      }
    };

    const getLabeledFaceDescriptions = async () => {
      //const labels = ["Messi"];

      const descriptions = await Promise.all(
        labels.map(async (label: any) => {
          const descriptors = [];

          console.log(label);
          for (let i = 1; i <= 2; i++) {
            const img = await faceapi.fetchImage(
              `https://facedectection.co.za/lables/${label}/${i}.png`
            );

            const detections: any = await faceapi
              .detectSingleFace(img)
              .withFaceLandmarks()
              .withFaceDescriptor();
            descriptors.push(detections.descriptor);
          }
          return new faceapi.LabeledFaceDescriptors(label, descriptors);
        })
      );
      return descriptions;
    };

    const matchFaces = async (labeledFaceDescriptors: any) => {
      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);
      if (videoRef.current && canvasRef.current) {
        const canvas = canvasRef.current;
        const displaySize = {
          width: videoRef.current.videoWidth,
          height: videoRef.current.videoHeight,
        };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(videoRef.current)
            .withFaceLandmarks()
            .withFaceDescriptors();

          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );

          canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);

          const results = resizedDetections.map((d) =>
            faceMatcher.findBestMatch(d.descriptor)
          );

          //Get result data

          results.forEach((result, i) => {
            const box = resizedDetections[i].detection.box;
            const drawBox = new faceapi.draw.DrawBox(box, {
              label: result.toString(),
            });
            drawBox.draw(canvas);
            data.forEach((element: any) => {
              if (result.label === element.lable_name) {
                if (result.label != "unknown") {
                  set_processing(true);
                  setLableName(element.lable_name);
                  setLableNumber(element.lable_number);
                  setEmplyeeID(element.employee_id);
                  setAccessType(element.access_type);
                }
              }
            });
          });
        }, 100);
      }
    };

    const initialize = async () => {
      await loadModels();
      await startWebcam();
      const labeledFaceDescriptors = await getLabeledFaceDescriptions();
      await matchFaces(labeledFaceDescriptors);
    };

    initialize();
  }, [labels]);

  useEffect(() => {
    //RegisterEmployeeOrVisitor();
    setTimeout(() => set_processing(false), 1000);
  }, [processing]);

  return (
    <>
      <IonPage className="main_page">
        <IonContent>
          <IonButton
            // onClick={() => logOut()}
            href="/"
            style={{ position: "absolute", width: "99%" }}
            color="dark"
          >
            <TbFaceId />
            Face Recognition Processing
          </IonButton>
          <br />
          <br />
          <div className="v_data">
            <video
              id="video"
              className="videoClass"
              ref={videoRef}
              autoPlay
            ></video>

            <canvas className="canvas" ref={canvasRef} />
          </div>
          <br />
          <br /> <br />
          {processing === true ? (
            <>
              <h3 style={{ textAlign: "center" }}>
                <FaUserTie /> Face processing
              </h3>
              <h1 style={{ textAlign: "center", color: "green" }}>
                Face Recognized, Welcome
              </h1>
              <br />
              <div style={{ color: "green", textAlign: "center" }}>
                <ImUserCheck size="90" />
              </div>
            </>
          ) : (
            <>
              <h3 style={{ textAlign: "center" }}>
                <TbFaceId size="80" /> <br /> Face processing
              </h3>
              <h1 style={{ textAlign: "center", color: "green" }}>
                Waiting to process....
              </h1>
              <br />
            </>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Video;
