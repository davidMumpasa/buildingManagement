import React, { useRef } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonSpinner,
  IonText,
} from "@ionic/react";

import "./ModalCheckAccess.css";
import { GiCctvCamera } from "react-icons/gi";
import { FiUserCheck, FiUserMinus } from "react-icons/fi";
import { BsCameraFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { isPlatform } from "@ionic/react";
//import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

import {
  Camera,
  CameraResultType,
  CameraSource,
  Photo,
} from "@capacitor/camera";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { Preferences } from "@capacitor/preferences";
import { Capacitor } from "@capacitor/core";
import AWS from "aws-sdk";

const S3_BUCKET = "YOUR_BUCKET_NAME_HERE";
const REGION = "YOUR_DESIRED_REGION_HERE";

AWS.config.update({
  accessKeyId: "YOUR_ACCESS_KEY_HERE",
  secretAccessKey: "YOUR_SECRET_ACCESS_KEY_HERE",
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

function ModalCheckAccess() {
  const modal = useRef<HTMLIonModalElement>(null);
  const [photos, setPhotos] = useState<UserPhoto[]>([]);

  function dismiss() {
    modal.current?.dismiss();
  }

  const takePhoto = async () => {
    const photo:any = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    //Get picture details
    const fileName = new Date().getTime() + ".jpeg";
    const newPhotos = [
      {
        filepath: fileName,
        webviewPath: photo.webPath,
      },
      ...photos,
    ];
    setPhotos(newPhotos);

    console.log(photo.filepath);
    dismiss();
  };

  return (
    <>
      {!photos ? (
        <IonTitle>
          <IonSpinner color="primary"></IonSpinner>
          Processing request <br />
        </IonTitle>
      ) : (
        <>
          <IonTitle className="mainTitle">
            <IonText>Access Control System</IonText>
          </IonTitle>

          <br />
          <IonButton
            style={{ width: "200px" }}
            className="btn_main"
            id="open-modal"
            color="light"
          >
            <GiCctvCamera size="30" /> Access Building
          </IonButton>
        </>
      )}
      <IonModal id="example-modal" ref={modal} trigger="open-modal">
        <IonContent>
          <IonToolbar>
            <IonTitle>
              <GiCctvCamera size="30" /> Access Type
            </IonTitle>
            <IonButtons slot="end">
              <IonButton color="light" onClick={() => dismiss()}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList>
            <IonGrid>
              <IonRow className="main_row">
                <IonCol className="main_col">
                  <FiUserCheck size="50" />
                  <br />
                  <IonButton
                    className="access_btn"
                    onClick={() => takePhoto()}
                    color="light"
                  >
                    <BsCameraFill style={{ margin: "5px" }} size="20" />{" "}
                    Employee
                  </IonButton>
                </IonCol>
                <IonCol className="main_col">
                  <FiUserMinus size="50" />
                  <br />
                  <IonButton
                    className="access_btn"
                    href="./Visitor"
                    color="light"
                  >
                    <BsCameraFill style={{ margin: "5px" }} size="20" />
                    Visitor
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
}

export default ModalCheckAccess;
