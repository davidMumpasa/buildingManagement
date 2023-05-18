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
import { AiOutlineUser } from "react-icons/ai";
import ModalCheckAccess from "../components/ModalCheckAccess";
import { Camera } from "@capacitor/camera";
import ModalExitAccess from "../components/ModalExitAccess";
import LoginForm from "../components/LoginForm";
import ProfileComponent from "../components/ProfileComponent";
import { MdArrowBack } from "react-icons/md";

const User: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton href="/" style={{ position: "absolute" }} color="dark">
          <MdArrowBack /> Logout
        </IonButton>
        <br />
        <IonCard className="main_card">
          <AiOutlineUser size="100" color="dark" />
          <br />
          <br />
          <ProfileComponent />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default User;
