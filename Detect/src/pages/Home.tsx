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

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard className="main_card">
          <RiBuilding2Fill size="100" color="dark" />
          <br />
          <br />
          <ModalCheckAccess />
          <ModalExitAccess />
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;