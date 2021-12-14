import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";
import CurrrentUserContext from "../CurrentUserContext";
import Header from "../Header";
import profilebackground from "./profilebackground.png";

const Profile = () => {
  const { currentUser } = useContext(CurrrentUserContext);
  console.log(currentUser, "gelato");
  return (
    <>
      <div>
        <Div>
          <Header />
          <Img src={profilebackground} />
          <div>
            <Wrapper>
              <ImgCont>
                <Banner src={currentUser.bannerSrc} />
              </ImgCont>
              <HeaderInfo>
                <SIS
                  src={
                    "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639446802/Screen_Shot_2021-12-13_at_8.51.56_PM-removebg-preview_cyjwwz.png"
                  }
                />
                <Level>lvl:</Level>
                <Clearance> {currentUser.level}</Clearance>
                <Avatar src={currentUser.avatarSrc} />
                <TextInfo>
                  <P1>Agent ID: {currentUser.agentId} </P1>
                  <P2>Field Name: {currentUser.displayName}</P2>
                  <P3>Code Name: @{currentUser.handle}</P3>
                  <P4>Location: {currentUser.location}</P4>
                  <P5>Mission: {currentUser.bio}</P5>
                  <Code
                    src={
                      "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639448956/qrcode_www.youtube.com_mo8nua.png"
                    }
                  />
                </TextInfo>
              </HeaderInfo>
              <MoreInfo></MoreInfo>
              <EvenMore>
                <Bar
                  src={
                    "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639449416/image-removebg-preview_1_suslp0.png"
                  }
                />
              </EvenMore>
              <Footer>
                Property of the British Secret Service, M Branch. For Her
                Majesty's Eyes Only.
              </Footer>
            </Wrapper>
          </div>
        </Div>
      </div>
    </>
  );
};

const HeaderInfo = styled.div`
  width: 700px;
  height: 200px;
`;

const Img = styled.img`
  position: absolute;
  z-index: -1;
  opacity: 0.6;
  width: 100%;
  height: 100%;
`;
const SIS = styled.img`
  display: flex;
  position: relative;
  height: 70px;
  width: 300px;
  z-index: 0;
`;

const Div = styled.div``;

const Wrapper = styled.div`
  border-radius: 15px;
  border: 2px solid black;
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  background-color: gray;
  opacity: 0.9;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  justify-content: space-evenly;
  margin-top: 60px;
`;
const Level = styled.p`
  font-family: "Special Elite", cursive;
  font-size: 20px;
  margin-top: -23px;
  margin-left: 550px;
`;
const Clearance = styled.div`
  margin-left: 600px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: -20px;
  font-size: x-large;
  font-weight: bolder;
`;
const Avatar = styled.img`
  position: relative;
  margin-top: 10px;
  margin-left: 20px;
  height: 150px;
  width: 120px;
  border: solid white 5px;
  z-index: 5;
`;
const ImgCont = styled.div`
  overflow: hidden;
  width: 700px;
  height: 150px;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;
const Banner = styled.img`
  display: flex;
  width: 700px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  height: 300px;
  top: -2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const TextInfo = styled.div`
  margin-left: 250px;
  margin-top: -155px;
  font-family: "Special Elite", cursive;
  font-size: large;
`;

const P1 = styled.p`
  padding: 10px;
`;

const P2 = styled.p`
  padding: 10px;
`;

const P3 = styled.p`
  padding: 10px;
`;

const P4 = styled.p`
  padding: 10px;
`;

const P5 = styled.p`
  padding: 10px;
  overflow: hidden;
`;

const MoreInfo = styled.div`
  width: 700px;
  height: 100px;
`;

const EvenMore = styled.div`
  width: 700px;
  height: 100px;
`;

const Footer = styled.footer`
  width: 700px;
  height: 40px;
  padding-top: 10px;
  text-align: center;
  font-family: "Special Elite", cursive;
`;

const Code = styled.img`
  position: relative;
  width: 100px;
  margin-left: 320px;
  margin-top: -5px;
`;

const Bar = styled.img`
  position: relative;
  width: 300px;
  /* margin-left: 100px; */
  margin-top: -50px;
  overflow: hidden;
`;
export default Profile;
