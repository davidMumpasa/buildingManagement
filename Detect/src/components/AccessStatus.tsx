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
  IonImg,
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

function AccessStatus() {
  const { user }: any = useContext(LoginContext);

  console.log(user.access_log);

  return (
    <>
      <IonButton
        className="profile_btn"
        color="dark"
        id="open-modal-company-access"
        expand="block"
      >
        <IonGrid>
          <IonRow>
            <IonCol style={{ textAlign: "left" }}>Security access</IonCol>
            <IonCol style={{ textAlign: "right" }}>
              <MdOutlineSecurity />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonButton>
      <IonModal
        trigger="open-modal-company-access"
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25, 0.5, 0.75]}
        handleBehavior="cycle"
      >
        <IonContent>
          <div className="ion-margin-top" style={{ textAlign: "center" }}>
            <br />
            <MdOutlineSecurity size="60" />
            <br />
            <br />
            <IonLabel style={{ textAlign: "center" }}>
              {" "}
              <IonTitle>Access status | Access profile</IonTitle>{" "}
            </IonLabel>
          </div>
          <br />

          <IonItem button>
            <IonLabel>
              <h3>Authorization access</h3>

              <IonGrid style={{ margin: 0, padding: 0 }}>
                <IonRow style={{ margin: 0, padding: 0 }}>
                  {user.company == null ? (
                    ""
                  ) : (
                    <>
                      <IonCol style={{ margin: 0, padding: 0 }} size="10">
                        {user.company.company_access != "approved" ? (
                          <IonTitle
                            style={{ margin: 0, padding: 0 }}
                            color="danger"
                          >
                            <p> {user.company.company_access} </p>
                          </IonTitle>
                        ) : (
                          <IonTitle
                            style={{ margin: 0, padding: 0 }}
                            color="success"
                          >
                            <p> {user.company.company_access} </p>
                          </IonTitle>
                        )}
                      </IonCol>
                      <IonCol style={{ textAlign: "right" }} size="2">
                        {user.company.company_access != "approved" ? (
                          <IonText color="danger">
                            <TiWarning size="20" />
                          </IonText>
                        ) : (
                          <IonText color="success">
                            <IoCheckmarkDoneCircleSharp size="20" />
                          </IonText>
                        )}
                      </IonCol>
                    </>
                  )}
                </IonRow>
              </IonGrid>
              <hr />
              
              <IonImg
                src="https://docs-demo.ionic.io/assets/madison.jpg"
                alt="The Wisconsin State Capitol building in Madison, WI at night"
              ></IonImg>
            </IonLabel>
          </IonItem>
        </IonContent>
      </IonModal>
    </>
  );
}

export default AccessStatus;
