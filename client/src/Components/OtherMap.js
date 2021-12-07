import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import styled from "styled-components";
import MapStyles from "./Styles/MapStyles";

const [selectLocation, setSelectLocation] = useState(null);

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 51.509865, lng: -0.118092 }}
      defaultOptions={{ styles: MapStyles }}
    >
      {locationData.properties.map((location) => (
        <Marker
          key={location.properties.location_id}
          position={{
            lat: location.properties.coordinates[0],
            lng: location.properties.coordinates[1],
          }}
          onClick={() => {
            setSelectLocation(location);
          }}
          icon={{
            url: "../007Logo.png",
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        />
      ))}
      {selectLocation && (
        <InfoWindow
          position={{
            lat: selectLocation.properties.coordinates[0],
            lng: selectLocation.properties.coordinates[1],
          }}
          onCloseClick={() => {
            setSelectLocation(null);
          }}
        >
          <H2>{selectLocation.properties.address}</H2>
          <H3>{selectLocation.properties.name}</H3>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const OtherMap = () => {
  console.log(OtherMap);
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

const H2 = styled.h2``;

const H3 = styled.h3``;

export default OtherMap;
