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
} from "@ionic/react";
import { AiOutlineUser } from "react-icons/ai";
import "./AccessLog.css";
import { GiCctvCamera } from "react-icons/gi";
import { TbLockAccess } from "react-icons/tb";

import AccessLogContext from "../context/log";
import LoginContext from "../context/login";
import { BsCheckLg, BsClockHistory } from "react-icons/bs";
import { RiBuildingFill } from "react-icons/ri";

function CompanyAccess() {
  const { user }: any = useContext(LoginContext);

  console.log(user.access_log);

  return (
    <>
      <IonButton
        className="profile_btn"
        color="dark"
        id="open-modal-company"
        expand="block"
      >
        <IonGrid>
          <IonRow>
            <IonCol style={{ textAlign: "left" }}>Company</IonCol>
            <IonCol style={{ textAlign: "right" }}>
              <RiBuildingFill />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonButton>
      <IonModal
        trigger="open-modal-company"
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25, 0.5, 0.75]}
        handleBehavior="cycle"
      >
        <IonContent>
          <div className="ion-margin-top" style={{ textAlign: "center" }}>
            <br />
            <RiBuildingFill size="50" />
            <br />
            <br />
            <IonLabel style={{ textAlign: "center" }}>
              Company Information
            </IonLabel>
          </div>
          <br />

          {user.company == null ? (
            ""
          ) : (
            <>
              <IonItem button>
                <IonLabel>
                  <h3>Company name</h3>

                  <IonGrid style={{ margin: 0, padding: 0 }}>
                    <IonRow style={{ margin: 0, padding: 0 }}>
                      <IonCol style={{ margin: 0, padding: 0 }} size="10">
                        <p> {user.company.company_name} </p>
                      </IonCol>
                      <IonCol style={{ textAlign: "right" }} size="2">
                        <BsCheckLg />
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonLabel>
              </IonItem>

              <IonItem button>
                <IonLabel>
                  <h3>Job title</h3>

                  <IonGrid style={{ margin: 0, padding: 0 }}>
                    <IonRow style={{ margin: 0, padding: 0 }}>
                      <IonCol style={{ margin: 0, padding: 0 }} size="10">
                        <p> {user.company.job_title} </p>
                      </IonCol>
                      <IonCol style={{ textAlign: "right" }} size="2">
                        <BsCheckLg />
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonLabel>
              </IonItem>
            </>
          )}
        </IonContent>
      </IonModal>
    </>
  );
}

export default CompanyAccess;
