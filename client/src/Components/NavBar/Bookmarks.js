import React from "react";
import styled from "styled-components";
import Header from "../Header";

const Bookmarks = () => {
  return (
    <div>
      <Header />
      <Img
        src={
          "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639600617/kg9q90i3rzq41_u3zf7q.jpg"
        }
      />
    </div>
  );
};

const Img = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

export default Bookmarks;
