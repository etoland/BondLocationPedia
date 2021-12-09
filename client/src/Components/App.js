import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyles";
import SignInPage from "./SignInPage";
import Home from "./NavBar/Home";
import { useAuth0 } from "@auth0/auth0-react";
import Map from "./NavBar/Map";
import Bookmarks from "./NavBar/Bookmarks";
import AboutUs from "./NavBar/AboutUs";
import VillainQuiz from "./NavBar/VillainQuiz";
import Profile from "./NavBar/Profile";
import Homefeed from "./NavBar/Homefeed";

const App = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homefeed" element={<Homefeed />} />
        <Route path="/sign-in-page" element={<SignInPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="villain-quiz" element={<VillainQuiz />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
