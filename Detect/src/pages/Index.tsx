import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { RiBuilding2Fill } from "react-icons/ri";
import { GiCctvCamera } from "react-icons/gi";
import ModalCheckAccess from "../components/ModalCheckAccess";
import { Camera } from "@capacitor/camera";
import ModalExitAccess from "../components/ModalExitAccess";
import LoginForm from "../components/LoginForm";
import ProfileComponent from "../components/ProfileComponent";
import { useContext } from "react";
import LoginContext from "../context/login";
import { MdArrowBack } from "react-icons/md";
import Swal from "sweetalert2";
import ProfileVisitorComponent from "../components/ProfileVisitorComponent";

function Index() {
  const { user, setUser }: any = useContext(LoginContext);

  function logOut() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: "Session over!",
    });
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {user.employee ? (
          <>
            <IonButton
              onClick={() => logOut()}
              href="/"
              style={{ position: "absolute" }}
              color="dark"
            >
              <MdArrowBack />
              Employee Logout
            </IonButton>
            <br />
          </>
        ) : user.visitor ? (
          <>
            <IonButton
              onClick={() => logOut()}
              href="/"
              style={{ position: "absolute" }}
              color="dark"
            >
              <MdArrowBack />
              Visitor Logout
            </IonButton>
            <br />
          </>
        ) : (
          ""
        )}
        <br />
        <IonCard className="main_card">
          <RiBuilding2Fill size="100" color="dark" />
          <br />
          <br />

          {user.employee ? (
            <ProfileComponent />
          ) : user.visitor ? (
            <ProfileVisitorComponent />
          ) : (
            <LoginForm />
          )}
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default Index;
