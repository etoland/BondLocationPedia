import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import CurrrentUserContext from "../CurrentUserContext";

const Homefeed = () => {
  const [newFeed, setNewsFeed] = useState(false);
  const { currentUser } = useContext(CurrrentUserContext);
  return (
    <div>
      <Header />
      <Wrapper></Wrapper>
    </div>
  );
};

const Wrapper = styled.div``;

export default Homefeed;
