import React from "react";
import styled from "styled-components";
import { BiMessageError } from "react-icons/bi";

const Error = () => {
  return (
    <>
      <Wrapper>
        <BiMessageError size={100} />
        <MessDiv>
          <strong>An unknown error has occured...</strong>
        </MessDiv>
        <Refresh>
          Please try refreshing the page, or <a href="">contact support </a>if
          the problem persists.
        </Refresh>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1000px;
  height: 500px;
`;

const MessDiv = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  text-align: center;
`;

const Refresh = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
`;
export default Error;
