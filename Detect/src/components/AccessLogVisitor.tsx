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
} from "@ionic/react";
import { AiOutlineUser } from "react-icons/ai";
import "./AccessLog.css";
import { GiCctvCamera } from "react-icons/gi";
import { TbLockAccess } from "react-icons/tb";

import AccessLogContext from "../context/log";
import LoginContext from "../context/login";
import { BsClockHistory } from "react-icons/bs";

function AccessLogVisitor() {
  const { user }: any = useContext(LoginContext);

  console.log(user.access_log);

  return (
    <>
      <IonButton
        className="profile_btn"
        color="dark"
        id="open-modal-log"
        expand="block"
      >
        <IonGrid>
          <IonRow>
            <IonCol style={{ textAlign: "left" }}>Access Logs</IonCol>
            <IonCol style={{ textAlign: "right" }}>
              <TbLockAccess />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonButton>
      <IonModal
        trigger="open-modal-log"
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25, 0.5, 0.75]}
        handleBehavior="cycle"
      >
        <IonContent>
          <div className="ion-margin-top" style={{ textAlign: "center" }}>
            <br />
            <BsClockHistory size="50" />
            <br />
            <br />
            <IonLabel style={{ textAlign: "center" }}>Access logs</IonLabel>
          </div>
          <br />

          <IonGrid style={{ margin: 0, padding: 0 }}>
            <IonRow className="access_log_table">
              <IonCol size="2"></IonCol>
              <IonCol size="5">Access Time</IonCol>
              <IonCol size="5">Exit time</IonCol>
            </IonRow>
            {user.access_log.map((element: any) => {
              return (
                <IonRow
                  key={element.visitor_access_log_id}
                  className="access_log_col"
                >
                  <IonCol size="2">
                    <GiCctvCamera size="20" />{" "}
                  </IonCol>
                  <IonCol size="5">
                    {element.created_at.substring(0, 10)}
                  </IonCol>
                  <IonCol size="5">
                    {element.created_at.substring(0, 10)}
                  </IonCol>
                </IonRow>
              );
            })}
          </IonGrid>
        </IonContent>
      </IonModal>
    </>
  );
}

export default AccessLogVisitor;
