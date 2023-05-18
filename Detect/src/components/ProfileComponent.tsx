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

function ProfileComponent() {
  const { user }: any = useContext(LoginContext);
  console.log(user);
  useEffect(() => {}, [user]);

  return (
    <>
      <IonTitle>
        Welcome |
        {user.employee.employee_name.substring(0, 1) +
          " " +
          user.employee.employee_surname}
      </IonTitle>
      <IonList inset={true}>
        <IonItem className="cust_Item">
          <UserProfile />
        </IonItem>
        <IonItem className="cust_Item">
          <AccessLog />
        </IonItem>
        <IonItem className="cust_Item">
          <CompanyAccess />
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
          <AiOutlineCaretRight size="20" /> Employee Access Point
        </h4>
      </div>
      <hr />
    </>
  );
}

export default ProfileComponent;
