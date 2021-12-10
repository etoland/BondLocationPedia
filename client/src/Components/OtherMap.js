import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import styled from "styled-components";
import properties from "../Data/filming-locations";
import MapStyles from "./Styles/MapStyles";
import Logo from "../Assets/007Logo.png";
import { BiCameraMovie } from "react-icons/bi";

const Map = () => {
  const [selectLocation, setSelectLocation] = useState(null);
  console.log(selectLocation, "Bond");
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 51.509865, lng: -0.118092 }}
      defaultOptions={{ styles: MapStyles }}
    >
      {properties?.map((location) => (
        <Marker
          key={location.location_id}
          position={{
            lat: location.coordinates[0],
            lng: location.coordinates[1],
          }}
          onClick={() => {
            setSelectLocation(location);
          }}
          icon={{
            url: Logo,
            scaledSize: new window.google.maps.Size(60, 25),
          }}
        />
      ))}
      {selectLocation && (
        <InfoWindow
          position={{
            lat: selectLocation.coordinates[0],
            lng: selectLocation.coordinates[1],
          }}
          onCloseClick={() => {
            setSelectLocation(null);
          }}
        >
          <div>
            <H2>Address: {selectLocation.address}</H2>
            <H3>{selectLocation.name}</H3>
            <H4>
              <BiCameraMovie /> Film: {selectLocation.film}
            </H4>
            <H5>Bond: {selectLocation.bond}</H5>
            <H6>Scene: {selectLocation.info}</H6>
            <H7 src={selectLocation.media[0].url} />
            {/* <H7 src={"../Assets/mi6.png"} /> */}
          </div>
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

const H2 = styled.p`
  font-size: 25px;
`;

const H3 = styled.p`
  font-size: 20px;
`;

const H4 = styled.p``;

const H5 = styled.p``;

const H6 = styled.p`
  font-size: 13px;
`;

const H7 = styled.img``;

export default OtherMap;
