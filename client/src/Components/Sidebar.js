import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import OtherMap from "./OtherMap";
import { FiHome, FiBookmark, FiLogOut } from "react-icons/fi";
import {
  GiPistolGun,
  GiSpy,
  GiEvilEyes,
  GiPlagueDoctorProfile,
} from "react-icons/gi";
import { BsPinMapFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import LogOutButton from "./LogOutButton";
import SignInButton from "./SignInButton";
import Logo from "../Assets/007Logo.png";
import Background from "../Assets/Background.png";
import CurrentUserContext from "./CurrentUserContext";

const Sidebar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const { currentUser } = useContext(CurrentUserContext);
  console.log(user, "pizza");
  useEffect(() => {
    if (isAuthenticated) {
      fetch("/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: user.email,
          name: user.name,
          role: "client",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);
  return (
    <Div>
      <OtherImg src={Background} />
      <NavBar>
        <Span>
          <Img src={Logo} />
          <NavigationLink to="/homefeed">
            <FiHome /> {"\u00a0"}Home
          </NavigationLink>
          <NavigationLink to="/map">
            <BsPinMapFill /> {"\u00a0"}Map
          </NavigationLink>
          <NavigationLink to="/bookmarks">
            <FiBookmark />
            {"\u00a0"}
            Bookmarks
          </NavigationLink>
          <NavigationLink to="/about-us">
            <GiSpy />
            {"\u00a0"} About us
          </NavigationLink>
          <NavigationLink to="villain-quiz">
            <GiEvilEyes />
            {"\u00a0"}
            Villain Quiz
          </NavigationLink>
          <NavigationLink to="/homefeed">
            <GiPistolGun /> {"\u00a0"}Shoot off a message
          </NavigationLink>
          {isAuthenticated && currentUser ? (
            <NavigationLink to={`/profile/${currentUser.name}`}>
              <GiPlagueDoctorProfile />
              {"\u00a0"}
              Profile
            </NavigationLink>
          ) : null}
          <Zindex>
            {isAuthenticated && currentUser ? (
              <LogOutButton />
            ) : (
              <SignInButton onClick={() => loginWithRedirect()}>
                {" "}
                Sign In
              </SignInButton>
            )}
          </Zindex>
        </Span>
      </NavBar>
    </Div>
  );
};

const Span = styled.ul`
  padding: 50px;
  border-radius: 10px;
  /* max-width: 300px; */
  justify-content: space-around;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  height: 100%;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Zindex = styled.div`
  z-index: 1;
  justify-content: center;
`;
const OtherImg = styled.img`
  position: absolute;
  z-index: 0;
  opacity: 0.4;
  width: 100%;
  height: 100%;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  position: sticky;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  --c: #34312d;
  color: var(--c);
  font-size: 16px;
  border: 0.3em solid var(--c);
  border-radius: 0.5em;
  width: 16em;
  height: 4em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 1em;
  position: relative;
  z-index: 1;
  transition: 0.5s;
  margin: 1em;
  &:hover {
    border: 2px solid rgba(0, 160, 80, 0);
    color: #fff;
  }

  *::before,
  *::after {
    width: 100%;
    height: 100%;
    z-index: 3;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    transition: 0.5s;
  }

  *:before {
    border-bottom: 3px solid #fff;
    border-left: 3px solid #fff;
  }

  *:after {
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
  }
`;

const Img = styled.img`
  display: flex;
  position: relative;
  text-align: center;
  align-items: center;
  width: 150px;
  margin-left: 80px;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export default Sidebar;
