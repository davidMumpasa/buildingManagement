import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { BsFillCameraFill } from "react-icons/bs";
import { FiUserMinus } from "react-icons/fi";

import { MdArrowBack } from "react-icons/md";
import { BsFiletypeKey } from "react-icons/bs";

import { TiWarning } from "react-icons/ti";
import { BsFillEmojiSmileFill } from "react-icons/bs";

import { AiFillCamera, AiOutlineUserDelete } from "react-icons/ai";

import "./Visitor.css";
import "./Exit.css";
import { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import Swal from "sweetalert2";
import { Redirect } from "react-router";

function Exit() {
  //Update UI
  useEffect(() => {}, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonButton>Back</IonButton>
        </IonHeader>
        <IonButton href="/" style={{ position: "absolute" }} color="dark">
          <MdArrowBack /> Back
        </IonButton>
        <br />
        <IonCard className="main_card">
          <FiUserMinus size="70" />
          <br />
          <IonGrid>
            <IonTitle style={{ fontSize: "25px" }}>
              Exit Type
            </IonTitle>
            <br />
            <IonRow>
              <IonCol>
                <IonButton
                  className="btnExit"
                  style={{ width: "200px", textAlign: "left" }}
                  color="light"
                >
                  <IonGrid>
                    <IonRow>
                      <IonCol size="9">Capture</IonCol>
                      <IonCol size="3">
                        <AiFillCamera size="20" />{" "}
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  className="btnExit"
                  style={{ width: "200px", textAlign: "left" }}
                  color="light"
                >
                  <IonGrid>
                    <IonRow>
                      <IonCol size="9"> Enter Key</IonCol>
                      <IonCol size="3">
                        <BsFiletypeKey size="20" />
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonButton>
                <br />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default Exit;
