import {
  IonButton,
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCaretRight, AiOutlineUser } from "react-icons/ai";
import LoginContext from "../context/login";
import AccessLog from "./AccessLog";
import AccessStatus from "./AccessStatus";
import CompanyAccess from "./CompanyAccess";
import Direction from "./Direction";
import "./ProfileComponent.css";
import UserProfile from "./UserProfile";
import AccessLogVisitor from "./AccessLogVisitor";
import VisitorProfile from "./VisitorProfile";

function ProfileVisitorComponent() {
  const { user }: any = useContext(LoginContext);
  console.log(user);
  useEffect(() => {}, [user]);

  return (
    <>
      <IonTitle>
        Welcome |
        {user.visitor.visitor_name.substring(0, 1) +
          " " +
          user.visitor.visitor_surname}
      </IonTitle>
      <IonList inset={true}>
        <IonItem className="cust_Item">
          <VisitorProfile />
        </IonItem>
        <IonItem className="cust_Item">
          <AccessLogVisitor />
        </IonItem>
        <IonItem className="cust_Item">
          <AccessStatus />
        </IonItem>
        <IonItem className="cust_Item">
          <Direction />
        </IonItem>
      </IonList>

      <div>
        <h4>
          <AiOutlineCaretRight size="20" /> Visitor Access Point
        </h4>
      </div>
      <hr />
    </>
  );
}

export default ProfileVisitorComponent;
