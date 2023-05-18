import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/Home";
import Tab2 from "./pages/Visitor";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home";
import Visitor from "./pages/Visitor";
import Exit from "./pages/Exit";
import Index from "./pages/Index";
import LoginContext from "./context/login";
import { useContext, useState } from "react";
import User from "./pages/User";
import AccessLog from "./components/AccessLog";
import AccessLogContext from "./context/log";
import Registration from "./pages/Registration";
import Video from "./pages/Video";

setupIonicReact();

function App() {
  const [user, setUser]: any = useState("");
  const [log, setLog]: any = useState("");

  return (
    <IonApp>
      <IonReactRouter>
        <LoginContext.Provider value={{ user, setUser }}>
          <AccessLogContext.Provider value={{ log, setLog }}>
            <IonTabs>
              <IonRouterOutlet>
                <Route exact path="/index">
                  <Index />
                </Route>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route exact path="/visitor">
                  <Visitor />
                </Route>
                <Route exact path="/registration">
                  <Registration />
                </Route>
                <Route exact path="/user">
                  <User />
                </Route>
                <Route exact path="/exit">
                  <Exit />
                </Route>
                <Route exact path="/video">
                  <Video />
                </Route>
                <Route path="/tab3">
                  <Tab3 />
                </Route>
                <Route exact path="/">
                  <Redirect to="/index" />
                </Route>
              </IonRouterOutlet>
              <IonTabBar style={{ display: "none" }} slot="bottom"></IonTabBar>
            </IonTabs>
          </AccessLogContext.Provider>
        </LoginContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
