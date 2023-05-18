import React, { useContext } from "react";
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonDatetimeButton,
  IonItem,
  IonText,
} from "@ionic/react";
import { AiOutlineUser } from "react-icons/ai";
import "./AccessLog.css";
import { GiCctvCamera } from "react-icons/gi";
import { TbLockAccess } from "react-icons/tb";

import AccessLogContext from "../context/log";
import LoginContext from "../context/login";
import { BsCheckLg, BsClockHistory } from "react-icons/bs";
import { RiBuildingFill } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";
import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import Map from "./Map";

function Direction() {
  const { user }: any = useContext(LoginContext);

  console.log(user.access_log);

  return (
    <>
      <IonButton
        className="profile_btn"
        color="dark"
        id="open-modal-direction"
        expand="block"
      >
        <IonGrid>
          <IonRow>
            <IonCol style={{ textAlign: "left" }}>Office Direction</IonCol>
            <IonCol style={{ textAlign: "right" }}>
              <FaMapMarkedAlt />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonButton>
      <IonModal
        trigger="open-modal-direction"
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25, 0.5, 0.75]}
        handleBehavior="cycle"
      >
        <IonContent
          style={{
            borderTop: "15px solid black",
          }}
        >
          <Map />
        </IonContent>
      </IonModal>
    </>
  );
}

export default Direction;
