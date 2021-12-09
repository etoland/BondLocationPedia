import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledButton onClick={() => logout({ returnTo: window.location.origin })}>
      <FiLogOut />
      Log Out
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
  cursor: pointer;
`;
export default LogoutButton;
