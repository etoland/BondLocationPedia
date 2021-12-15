import React from "react";
import styled from "styled-components";

const CharacterCount = ({ charLength }) => {
  return (
    charLength >= 0 && (
      <>
        {charLength > 280 && (
          <p style={{ marginRight: "40px", color: "red" }}>
            You exceeded the character limit!
          </p>
        )}
        <p
          style={{
            color:
              charLength > 280 ? "red" : charLength >= 225 ? "#FFBF02" : "grey",
          }}
        >
          {280 - charLength}
        </p>
      </>
    )
  );
};

export default CharacterCount;
