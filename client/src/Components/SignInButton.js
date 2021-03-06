import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";

const SignInButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledButton onClick={() => loginWithRedirect()}>
      <FiLogIn />
      Log In
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: none;
  border: none;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 20px;
  color: var(--ghostWhite);
  padding: 45px;
  cursor: pointer;
`;

export default SignInButton;
