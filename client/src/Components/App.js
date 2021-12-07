import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import GlobalStyle from "./Components/Styles/GlobalStyles";
import SignInPage from "./SignInPage";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { user } = useAuth0();
  console.log(user);
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in-page" element={<SignInPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
