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
import { TiWarning } from "react-icons/ti";
import { BsFillEmojiSmileFill } from "react-icons/bs";

import { AiOutlineUserDelete } from "react-icons/ai";

import "./Visitor.css";
import { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import Swal from "sweetalert2";
import { Redirect } from "react-router";

function Visitor() {
  //Visitor form input
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [id, setID]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [code, setCode]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");

  //Form validation
  const [validatename, setValidatename]: any = useState("");
  const [validatesurname, setValidatesurname]: any = useState("");
  const [validatecell, setValidatecell]: any = useState("");
  const [validateid, setValidateid]: any = useState("");
  const [validateaddress, setValidateaddress]: any = useState("");
  const [validatecode, setValidatecode]: any = useState("");
  const [validateemail, setValidateemail]: any = useState("");
  const [validatepassword, setValidatepassword]: any = useState("");

  //Access
  const [display, setDisplay]: any = useState(false);
  //Add Visitors to db
  async function addVisitor(e: any) {
    //Prevent defult
    e.preventDefault();

    const visitorData: any = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      cell: cell,
      id: id,
      code: code,
      address: address,
    };

    //Home function
    function goBack() {
      window.location.href = "/";
    }

    //https://facedectection.co.za/api/add
    const data = fetch("https://facedectection.co.za/api/add", {
      method: "POST",
      mode: "cors",
      cache: "default",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(visitorData),
    }).then(async (response) => {
      if (!response.ok) {
        const validation = await response.json();

        console.log(validation);
        //Assgn error var
        setValidatename(validation.errors.name);
        setValidatesurname(validation.errors.surname);
        setValidatecell(validation.errors.cell);
        setValidateid(validation.errors.id);
        setValidateaddress(validation.errors.address);
        setValidatecode(validation.errors.code);
        setValidateemail(validation.errors.email);
        setValidatepassword(validation.errors.password);

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
        //Display welcome
        setDisplay(true);

        //Redirect to home
        setTimeout(goBack, 5000);

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
          title: "Information submited successfully!",
        });
        console.log(response);
      }
    });
  }

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
          {display != true ? (
            <IonTitle style={{ textAlign: "left", fontSize: "30px" }}>
              <AiOutlineUserDelete /> Visitor Infomation
            </IonTitle>
          ) : (
            ""
          )}
          <br />
          <IonGrid>
            <IonRow>
              <IonCol>
                {display == true ? (
                  <IonTitle>
                    <div style={{ color: "green" }}>
                      <BsFillEmojiSmileFill size="50" />
                    </div>
                    <br />
                    <IonText>Form submit successfully | Welcome</IonText>
                  </IonTitle>
                ) : (
                  <form onSubmit={(e: any) => addVisitor(e)}>
                    <IonItem>
                      {/* Name Input */}
                      {validatename ? (
                        <IonLabel style={{ color: "red" }} position="floating">
                          <TiWarning /> {validatename}
                        </IonLabel>
                      ) : (
                        <IonLabel position="floating">Name</IonLabel>
                      )}

                      <IonInput
                        placeholder="Enter text"
                        onInput={(e: any) => setName(e.target.value)}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      {/* Surname input */}
                      {validatesurname ? (
                        <IonLabel
                          className="lable"
                          style={{ color: "red" }}
                          position="floating"
                        >
                          <TiWarning /> {validatesurname}
                        </IonLabel>
                      ) : (
                        <IonLabel className="lable" position="floating">
                          Surname
                        </IonLabel>
                      )}
                      <IonInput
                        placeholder="Enter text"
                        onInput={(e: any) => setSurname(e.target.value)}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      {/* Email input */}
                      {validateemail ? (
                        <IonLabel
                          className="lable"
                          style={{ color: "red" }}
                          position="floating"
                        >
                          <TiWarning /> {validateemail}
                        </IonLabel>
                      ) : (
                        <IonLabel className="lable" position="floating">
                          Email
                        </IonLabel>
                      )}
                      <IonInput
                        placeholder="Enter text"
                        onInput={(e: any) => setEmail(e.target.value)}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      {/* Email input */}
                      {validatepassword ? (
                        <IonLabel
                          className="lable"
                          style={{ color: "red" }}
                          position="floating"
                        >
                          <TiWarning /> {validatepassword}
                        </IonLabel>
                      ) : (
                        <IonLabel className="lable" position="floating">
                          Password
                        </IonLabel>
                      )}
                      <IonInput
                        placeholder="Enter text"
                        onInput={(e: any) => setPassword(e.target.value)}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      {/* Id number input */}
                      {validateid ? (
                        <IonLabel
                          className="lable"
                          style={{ color: "red" }}
                          position="floating"
                        >
                          <TiWarning /> {validateid}
                        </IonLabel>
                      ) : (
                        <IonLabel className="lable" position="floating">
                          Id Number
                        </IonLabel>
                      )}
                      <IonInput
                        placeholder="Enter text"
                        onInput={(e: any) => setID(e.target.value)}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      {/* Cell phone input */}
                      {validatecell ? (
                        <IonLabel
                          className="lable"
                          style={{ color: "red" }}
                          position="floating"
                        >
                          <TiWarning /> {validatecell}
                        </IonLabel>
                      ) : (
                        <IonLabel className="lable" position="floating">
                          Cell No
                        </IonLabel>
                      )}
                      <IonInput
                        placeholder="Enter text"
                        onInput={(e: any) => setCell(e.target.value)}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      {/* Address input */}
                      {validateaddress ? (
                        <IonLabel
                          className="lable"
                          style={{ color: "red" }}
                          position="floating"
                        >
                          <TiWarning /> {validateaddress}
                        </IonLabel>
                      ) : (
                        <IonLabel className="lable" position="floating">
                          Address
                        </IonLabel>
                      )}
                      <IonInput
                        placeholder="Enter text"
                        onInput={(e: any) => setAddress(e.target.value)}
                      ></IonInput>
                    </IonItem>
                    <IonItem>
                      {/* Postal code input */}
                      {validatecode ? (
                        <IonLabel
                          className="lable"
                          style={{ color: "red" }}
                          position="floating"
                        >
                          <TiWarning /> {validatecode}
                        </IonLabel>
                      ) : (
                        <IonLabel className="lable" position="floating">
                          Postal Code
                        </IonLabel>
                      )}
                      <IonInput
                        placeholder="Enter text"
                        onInput={(e: any) => setCode(e.target.value)}
                      ></IonInput>
                    </IonItem>
                    <IonGrid>
                      <IonRow>
                        <IonCol style={{ textAlign: "left" }}>
                          <IonButton color="light">Take Picture</IonButton>
                        </IonCol>
                        <IonCol style={{ textAlign: "right" }}>
                          <BsFillCameraFill size="40" />{" "}
                        </IonCol>
                      </IonRow>
                      <IonButton
                        type="submit"
                        style={{ width: "100%" }}
                        color="dark"
                      >
                        Submit
                      </IonButton>
                    </IonGrid>
                  </form>
                )}
              </IonCol>
              <IonCol className="logo_card">
                <FiUserMinus size="150" />
                <hr />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default Visitor;
