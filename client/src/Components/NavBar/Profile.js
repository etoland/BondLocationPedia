import React, { useContext, useState } from "react";
import styled from "styled-components";
import CurrrentUserContext from "../CurrentUserContext";
import Header from "../Header";
import profilebackground from "./profilebackground.png";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});
  const [postDetails, setPostDetails] = useState({});
  const { currentUser } = useContext(CurrrentUserContext);
  console.log(currentUser, "gelato");
  return (
    <>
      <div>
        <Header />
        <Img src={profilebackground} />
        <div>
          <Wrapper>
            <Banner src={currentUser.bannerSrc} />
          </Wrapper>
        </div>
      </div>
    </>
  );
};

const Img = styled.img`
  position: absolute;
  z-index: -1;
  opacity: 0.6;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  border-radius: 10px;
  border: 5px red solid;
  width: 800px;
  height: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  /* z-index: 1;
  background-color: gray;
  width: 450px;
  min-height: 300px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly; */
`;

const Banner = styled.img`
  display: flex;
  width: 400px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
export default Profile;
