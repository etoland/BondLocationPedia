import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import CurrrentUserContext from "../CurrentUserContext";
import NewMessage from "./NewMessage";
import { CircularProgress } from "@material-ui/core";

const Homefeed = () => {
  const [newFeed, setNewsFeed] = useState(false);
  const { currentUser } = useContext(CurrrentUserContext);

  // return (
  //   <div>
  //     <Header />
  //     <Wrapper>
  //       <H1>007 Feed</H1>
  //       {!newFeed ? (
  //         <CircularLoad>
  //           <CircularProgress />
  //           Loading
  //           </CircularLoad>
  //       ) : (
  //       )}
  //     </Wrapper>
  //   </div>
  // );
};

const H1 = styled.h1``;

const Wrapper = styled.div``;

const CircularLoad = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: xx-large;
`;

export default Homefeed;
