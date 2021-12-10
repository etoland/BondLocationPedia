import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import HeaderLogo from "../Assets/HeaderLogo.png";
import gun from "../Assets/gun.png";
import LogOutButton from "./LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import SignInButton from "./SignInButton";

const Header = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <div>
      <Wrapper>
        <StyledLink to="/">
          <StyledLogo src={HeaderLogo} />
        </StyledLink>
        <div>
          <StyledLink to="/">
            <OtherLogo src={gun} />
          </StyledLink>
        </div>
        <div>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/homefeed">Feed</StyledNavLink>
          <StyledNavLink to="/map">Map</StyledNavLink>
        </div>
        {isAuthenticated ? (
          <LogOutButton />
        ) : (
          <SignInButton onClick={() => loginWithRedirect()}>
            {" "}
            Sign In
          </SignInButton>
        )}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #7e7f83;
  max-height: 150px;
  color: #ffff;
  opacity: 0.9;
  background-image: linear-gradient(lightgray, gray);
  /* &:hover {
    transform: scale(1.3);
    max-height: 100%;
    max-width: 1000%;
  } */
`;
const StyledLink = styled(Link)``;

const StyledLogo = styled.img`
  width: 40%;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #34312d;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  right: 50px;
  justify-content: space-between;
  padding: 20px;
  &:hover {
    font-weight: bolder;
  }
`;

const H1 = styled.h1`
  text-align: center;
`;

const OtherLogo = styled.img`
  display: flex;
  width: 100px;
  position: relative;
  right: 600px;
`;

export default Header;
