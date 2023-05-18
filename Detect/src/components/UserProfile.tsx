import React, { useContext, useEffect, useRef, useState } from "react";
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
  IonInput,
} from "@ionic/react";
import "./ProfileComponent.css";
import "./UserProfile.css";
import { AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import LoginContext from "../context/login";
import Swal from "sweetalert2";

function UserProfile() {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const { user, setUser }: any = useContext(LoginContext);
  const [ui_Update, set_ui_Update] = useState(false);

  //UserData
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [id, setID]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [code, setCode]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [gender, setGender]: any = useState("");

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    //Set Input data
    setName(user.employee.employee_name);
    setSurname(user.employee.employee_surname);
    setAddress(user.employee.employee_address);
    setCode(user.employee.employee_postal_code);
    setEmail(user.employee.employee_email);
    setCell(user.employee.employee_cell);
    setID(user.employee.employee_id_number);
    setGender(user.employee.employee_gender);

    setPresentingElement(page.current);
  }, [ui_Update]);

  function dismiss() {
    modal.current?.dismiss();
  }

  const dataUser: any = {
    name: name,
    surname: surname,
    email: email,
    cell: cell,
    id: id,
    code: code,
    address: address,
    emp_id: user.employee.employee_id,
    gender: gender,
  };

  //Update profile
  function UpdateEmployee(e: any) {
    set_ui_Update(true);
    e.preventDefault();

    //https://facedectection.co.za/api/add
    const data = fetch("https://www.facedectection.co.za/api/update", {
      method: "POST",
      mode: "cors",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(dataUser),
    }).then(async (response) => {
      if (!response.ok) {
        const validation = await response.json();

        console.log(validation);
        //Assgn error var

        //Alert
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "warning",
          title: "Error! all input fileds are requred",
        });
      } else {
        //Alert
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Information updated successfully !",
        });

        set_ui_Update(false);
        console.log(response);
      }
    });
  }

  return (
    <>
      <IonButton
        className="profile_btn"
        color="dark"
        id="open-modal"
        expand="block"
      >
        <IonGrid>
          <IonRow>
            <IonCol style={{ textAlign: "left" }}>Access profile</IonCol>
            <IonCol style={{ textAlign: "right" }}>
              <AiOutlineUser />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonButton>

      <IonModal
        id="example-modal"
        ref={modal}
        trigger="open-modal"
        presentingElement={presentingElement!}
      >
        <IonContent>
          <IonToolbar>
            <IonTitle>
              <AiOutlineUserAdd size="20" /> User profile
            </IonTitle>
            <IonButtons slot="end">
              <IonButton color="light" onClick={() => dismiss()}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList>
            <br />
            <br />
            <IonTitle style={{ textAlign: "center", padding: "5%" }}>
              <AiOutlineUserAdd size="60" /> <br /> Profile{" "}
            </IonTitle>

            <form onSubmit={(e: any) => UpdateEmployee(e)} method="POST">
              <IonItem style={{ margin: "5%" }}>
                <IonLabel position="floating">Employee name</IonLabel>
                <IonInput
                  placeholder="Enter name"
                  value={name}
                  onInput={(e: any) => setName(e.target.value)}
                ></IonInput>
              </IonItem>
              <IonItem style={{ margin: "5%" }}>
                <IonLabel position="floating">Employee surname</IonLabel>
                <IonInput
                  placeholder="Enter surname"
                  value={surname}
                  onChange={(e: any) => setSurname(e.target.value)}
                ></IonInput>
              </IonItem>

              <IonItem style={{ margin: "5%" }}>
                <IonLabel position="floating">Employee email</IonLabel>
                <IonInput
                  placeholder="Enter email"
                  value={email}
                  readonly
                  onChange={(e: any) => setEmail(e.target.value)}
                ></IonInput>
              </IonItem>

              <IonItem style={{ margin: "5%" }}>
                <IonLabel position="floating">Employee address</IonLabel>
                <IonInput
                  placeholder="Enter address"
                  value={address}
                  onChange={(e: any) => setAddress(e.target.value)}
                ></IonInput>
              </IonItem>

              <IonItem style={{ margin: "5%" }}>
                <IonLabel position="floating">Employee postal code</IonLabel>
                <IonInput
                  placeholder="Enter code"
                  value={code}
                  onChange={(e: any) => setCode(e.target.value)}
                ></IonInput>
              </IonItem>

              <IonItem style={{ margin: "5%" }}>
                <IonLabel position="floating">Employee phone number</IonLabel>
                <IonInput
                  placeholder="Enter cell"
                  value={cell}
                  onChange={(e: any) => setCell(e.target.value)}
                ></IonInput>
              </IonItem>

              <IonItem style={{ margin: "5%" }}>
                <IonLabel position="floating">Employee ID Number</IonLabel>
                <IonInput
                  placeholder="Enter id"
                  value={id}
                  onChange={(e: any) => setID(e.target.value)}
                ></IonInput>
              </IonItem>

              <IonItem style={{ margin: "5%" }}>
                <IonLabel position="floating">Employee Gender</IonLabel>
                <IonInput
                  placeholder="Enter id"
                  value={gender}
                  onChange={(e: any) => setID(e.target.value)}
                  readonly
                ></IonInput>
              </IonItem>

              <IonButton className="updateBtn" color="dark" type="submit">
                Update profile
              </IonButton>
            </form>
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
}

export default UserProfile;
