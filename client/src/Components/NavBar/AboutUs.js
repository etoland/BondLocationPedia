import React from "react";
import styled from "styled-components";
import XOXO from "./XOXO.png";
import Heart from "./Heart.png";
import HeartBackground from "./HeartBackground.png";
import Header from "../Header";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <StyleHeart src={HeartBackground} />
      <Wrapper>
        <H1>About Us</H1>
        <P>
          Here at Bond Voyage we believe that the life of James Bond is not just
          a 3 hour action packed thriller - but rather a lifelong journey.
        </P>
        <P2>
          We are here to help guide you on that voyage, pinpoint your
          adventures, laugh at your mishaps... and so forth. A lot of reviews
          have called us "humble", but we truly are not.
        </P2>
        <P3>
          {"\u00a0"}
          {"\u00a0"}
          {"\u00a0"}Join us as we document your borderline creepy obsession with
          James Bond - while we sip on a dry martini and watch... you get a
          restraining order against you by THE Daniel Craig himself.
        </P3>
        <P4>
          To which we now personally call him - Danny C'you No More'raig , or
          our favourite Daniel C'You From a Distance'raig #SorryNotSorry
          #TheIncident #TheOnlyThingRestrainingMeisYouSayingNo{" "}
        </P4>
        <P5>
          We hope you love our site, and that it brings you closer to your James
          Bond fantasy - well not too close.... #DannyNeverCallsNoMore{" "}
          {"\u00a0"}
          {"\u00a0"}
          Also if anyones interested, Timothy Dalton doesn't file charges!! Just
          goodluck finding him in London!
        </P5>
        <Img src={XOXO} />
        <ImgTwo src={Heart} />
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  padding-bottom: 20px;
  justify-content: center;
  text-align: center;
`;

const P = styled.p`
  font-family: "Playfair Display", serif;
  padding-bottom: 10px;
  text-align: center;
`;

const P2 = styled.p`
  font-family: "Playfair Display", serif;
  padding-bottom: 10px;
  text-align: center;
`;

const StyleHeart = styled.img`
  position: absolute;
  z-index: -1;
  opacity: 0.4;
  width: 100%;
  height: 150%;
`;

const P3 = styled.p`
  font-family: "Playfair Display", serif;
  padding-bottom: 10px;
  text-align: center;
`;

const P4 = styled.p`
  font-family: "Playfair Display", serif;
  padding-bottom: 10px;
  text-align: center;
`;

const P5 = styled.p`
  font-family: "Playfair Display", serif;
  padding-bottom: 10px;
  text-align: center;
`;

const Img = styled.img`
  display: flex;
  z-index: 0;
  padding-left: 400px;
  padding-top: 100px;
  width: 1000px;
`;

const ImgTwo = styled.img`
  display: flex;
  position: absolute;
  padding-left: 200px;
  align-items: center;
  z-index: 1;
  opacity: 0.4;
  padding-top: 200px;
`;
export default AboutUs;
