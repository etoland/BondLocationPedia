import React from "react";
import OtherMap from "../OtherMap";
import styled from "styled-components";
import Sidebar from "../Sidebar";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #7e7f83;
`;

export default Home;
