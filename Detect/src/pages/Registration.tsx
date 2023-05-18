import {
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";

import { useContext, useState } from "react";
import LoginForm from "../components/LoginForm";
import { MdArrowBack } from "react-icons/md";
import Swal from "sweetalert2";
import { AiOutlineUserAdd } from "react-icons/ai";
import "../components/LoginForm";
import "./Registration.css";
import LoginContext from "../context/login";

function Registration() {
  const [ui_Update, set_ui_Update] = useState(false);

  //UserData
  const [name, setName]: any = useState("");
  const [surname, setSurname]: any = useState("");
  const [cell, setCell]: any = useState("");
  const [id, setID]: any = useState("");
  const [address, setAddress]: any = useState("");
  const [code, setCode]: any = useState("");
  const [email, setEmail]: any = useState("");
  const [password, setPassword]: any = useState("");
  const { user, setUser }: any = useContext(LoginContext);

  //Form validation
  const [validatename, setValidatename]: any = useState("");
  const [validatesurname, setValidatesurname]: any = useState("");
  const [validatecell, setValidatecell]: any = useState("");
  const [validateid, setValidateid]: any = useState("");
  const [validateaddress, setValidateaddress]: any = useState("");
  const [validatecode, setValidatecode]: any = useState("");
  const [validateemail, setValidateemail]: any = useState("");
  const [validatepassword, setValidatepassword]: any = useState("");

  const dataUser: any = {
    name: name,
    surname: surname,
    email: email,
    cell: cell,
    id: id,
    code: code,
    password: password,
    address: address,
  };

  //Update profile
  async function RegisterEmployee(e: any) {
    e.preventDefault();
    console.log(name);
    console.log(password);
    set_ui_Update(true);

    //https://facedectection.co.za/api/add
    const data = fetch("https://www.facedectection.co.za/api/addEmp", {
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
        //Assgn error var

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
        //Alert
        const validation = await response.json();
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

        setUser(validation);

        Toast.fire({
          icon: "success",
          title: "Employee registerd successfully!",
        });

        set_ui_Update(false);
        console.log(response);
      }
    });
  }

  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="btn_">
          <IonButton href="/" color="dark" className="back">
            <MdArrowBack /> Back
          </IonButton>
        </div>
        <br />
        <br />
        <br />
        <IonList className="form-emp">
          <br />
          <br />
          <IonTitle style={{ textAlign: "center", padding: "5%" }}>
            <AiOutlineUserAdd size="60" /> <br /> Employee data{" "}
          </IonTitle>

          <form onSubmit={(e: any) => RegisterEmployee(e)}>
            <IonItem style={{ margin: "5%" }}>
              {validatename == "" ? (
                <IonLabel position="floating">Employee name</IonLabel>
              ) : (
                <IonLabel color="danger" position="floating">
                  {validatename}
                </IonLabel>
              )}
              <IonInput
                placeholder="Enter name"
                value={name}
                onInput={(e: any) => setName(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem style={{ margin: "5%" }}>
              {validatesurname == "" ? (
                <IonLabel position="floating">Employee surname</IonLabel>
              ) : (
                <IonLabel color="danger" position="floating">
                  {validatesurname}
                </IonLabel>
              )}

              <IonInput
                placeholder="Enter surname"
                value={surname}
                onInput={(e: any) => setSurname(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonItem style={{ margin: "5%" }}>
              {validateemail == "" ? (
                <IonLabel position="floating">Employee email</IonLabel>
              ) : (
                <IonLabel color="danger" position="floating">
                  {validateemail}
                </IonLabel>
              )}

              <IonInput
                placeholder="Enter email"
                value={email}
                onInput={(e: any) => setEmail(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonItem style={{ margin: "5%" }}>
              {validatepassword == "" ? (
                <IonLabel position="floating">Employee password</IonLabel>
              ) : (
                <IonLabel color="danger" position="floating">
                  {validatepassword}
                </IonLabel>
              )}

              <IonInput
                placeholder="Enter password"
                value={password}
                onInput={(e: any) => setPassword(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonItem style={{ margin: "5%" }}>
              {validateaddress == "" ? (
                <IonLabel position="floating">Employee address</IonLabel>
              ) : (
                <IonLabel color="danger" position="floating">
                  {validateaddress}
                </IonLabel>
              )}

              <IonInput
                placeholder="Enter address"
                value={address}
                onInput={(e: any) => setAddress(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonItem style={{ margin: "5%" }}>
              {validatecode == "" ? (
                <IonLabel position="floating">Employee postal code</IonLabel>
              ) : (
                <IonLabel color="danger" position="floating">
                  {validatecode}
                </IonLabel>
              )}

              <IonInput
                placeholder="Enter code"
                value={code}
                onInput={(e: any) => setCode(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonItem style={{ margin: "5%" }}>
              {validatecell == "" ? (
                <IonLabel position="floating">Employee cell no</IonLabel>
              ) : (
                <IonLabel color="danger" position="floating">
                  {validatecell}
                </IonLabel>
              )}

              <IonInput
                placeholder="Enter cell"
                value={cell}
                onInput={(e: any) => setCell(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonItem style={{ margin: "5%" }}>
              {validateid == "" ? (
                <IonLabel position="floating">Employee ID Number</IonLabel>
              ) : (
                <IonLabel color="danger" position="floating">
                  {validateid}
                </IonLabel>
              )}

              <IonInput
                placeholder="Enter id"
                value={id}
                type="number"
                onInput={(e: any) => setID(e.target.value)}
              ></IonInput>
            </IonItem>

            <IonButton className="updateBtn" color="dark" type="submit">
              Add Employeee
            </IonButton>
          </form>
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default Registration;
