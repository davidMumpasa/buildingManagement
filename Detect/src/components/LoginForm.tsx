import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUserDelete } from "react-icons/ai";
import { TiWarning } from "react-icons/ti";
import LoginContext from "../context/login";
import Swal from "sweetalert2";
import "./LoginForm.css";
import { Redirect } from "react-router";
import AccessLogContext from "../context/log";
import { TbFaceId } from "react-icons/tb";

function LoginForm() {
  // Login and Register access ponts
  const [login, setLogin]: any = useState(true);
  const [register, setRegister]: any = useState(false);

  //Set logged in user
  const { user, setUser }: any = useContext(LoginContext);
  const { log, setLog }: any = useContext(AccessLogContext);

  //
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");

  //Login access function
  async function loginAccess(e: any) {
    e.preventDefault();
    const loginData: any = {
      email: email,
      password: password,
    };

    //
    const data = fetch("https://facedectection.co.za/api/login", {
      method: "POST",
      mode: "cors",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(loginData),
    }).then(async (response) => {
      if (!response.ok) {
        const validation = await response.json();

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
          title: "Error! Enter correct login info",
        });
      } else {
        //Alert
        const validation = await response.json();
        setUser(validation);
        //setLog(validation.employee.access_log);

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
          title: "Login Successfull!",
        });
        setTimeout(function () {
          if (user != "") {
            console.log("Has data");
            console.log(user);
            //window.location.href = "/index";
          } else {
            setUser(validation);
            console.log("No data");
            console.log(user);
          }
        }, 1000);
      }
    });
  }

  return (
    <>
      {/* Login Title */}
      <IonTitle>
        <AiOutlineUserDelete /> Login to platform
      </IonTitle>

      {/* Form Section */}
      <br />
      <br />
      {/* Login or register employees */}
      {login ? (
        <>
          <form method="PPOST" onSubmit={(e: any) => loginAccess(e)}>
            <IonItem className="lnputItemLogin">
              {/* Id number input */}

              <IonLabel className="lable" position="floating">
                Employee email
              </IonLabel>
              <IonInput
                placeholder="Enter email"
                onInput={(e: any) => setEmail(e.target.value)}
                required
              ></IonInput>
            </IonItem>
            <IonItem className="lnputItemLogin">
              {/* Id number input */}

              <IonLabel className="lable" position="floating">
                Employee password
              </IonLabel>
              <IonInput
                placeholder="Enter password"
                onInput={(e: any) => setPassword(e.target.value)}
                required
              ></IonInput>
            </IonItem>
            <IonItem>
              {/* Id number input */}

              <IonButton type="submit" className="btnLogin" color="dark">
                Login
              </IonButton>
            </IonItem>

            <IonGrid style={{ marginLeft: "3%" }}>
              <IonRow>
                <IonCol size="5">
                  {/* Id number input */}
                  <a href="">Forgot password</a>
                </IonCol>
                <IonCol size="2">|</IonCol>
                <IonCol size="5">
                  <a href="registration">Emp Registration</a>
                </IonCol>
                <IonCol size="5">
                  <a href="visitor">Visitor Registration</a>
                </IonCol>
              </IonRow>
              <hr />
            </IonGrid>
          </form>
          <IonCol size="5">
            <TbFaceId size="80" /> <br />
            <a href="video">Face Processing</a>
          </IonCol>
        </>
      ) : (
        <>
          <IonItem>
            {/* Id number input */}

            <IonLabel className="lable" position="floating">
              Employee Name
            </IonLabel>
            <IonInput placeholder="Enter name"></IonInput>
          </IonItem>

          <IonItem>
            {/* Id number input */}

            <IonLabel className="lable" position="floating">
              Employee last name
            </IonLabel>
            <IonInput placeholder="Enter surname"></IonInput>
          </IonItem>

          <IonItem>
            {/* Id number input */}

            <IonLabel className="lable" position="floating">
              Employee cell no
            </IonLabel>
            <IonInput placeholder="Enter cell no"></IonInput>
          </IonItem>

          <IonItem>
            {/* Id number input */}

            <IonLabel className="lable" position="floating">
              Employee Id number
            </IonLabel>
            <IonInput placeholder="Enter ID"></IonInput>
          </IonItem>

          <IonItem>
            {/* Id number input */}

            <IonLabel className="lable" position="floating">
              Employee address
            </IonLabel>
            <IonInput placeholder="Enter address"></IonInput>
          </IonItem>

          <IonItem>
            {/* Id number input */}

            <IonLabel className="lable" position="floating">
              Employee postal code
            </IonLabel>
            <IonInput placeholder="Enter code"></IonInput>
          </IonItem>
        </>
      )}
    </>
  );
}

export default LoginForm;
