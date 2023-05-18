import React from "react";
import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyB-rBuXmHhbY6ItvWtbpIguL84R0xtNcMg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
