import React, { useContext, useState } from "react";
import CurrentUserContext from "../CurrentUserContext";
import Error from "../Error";
import styled from "styled-components";
import CharacterCount from "../CharacterCount";
import { GiPistolGun } from "react-icons/gi";

const NewMessage = ({ setUpdateFeed, updateFeed }) => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState(false);
  const [postInfo, setPostInfo] = useState("");
  const { currentUser } = useContext(CurrentUserContext);

  const postMessage = (ev) => {
    ev.preventDefault();
    fetch("/message", {
      method: "POST",
      body: JSON.stringify({
        status: postInfo,
        likedBy: [],
        timeStamp: new Date(),
        email: currentUser.name,
        displayName: currentUser.handle,
        displayUser: currentUser.avatarSrc,
        displayMedia: [],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUpdateFeed(!updateFeed);
      })
      .catch((err) => {
        setError(!error);
      });
  };

  if (error) {
    return <Error />;
  }
  return (
    <FormStyle onSubmit={postMessage}>
      {currentUser ? <Avatar src={currentUser.avatarSrc}></Avatar> : []}
      <TextArea
        placeholder="Spill Your Secrets..."
        onChange={(ev) => {
          setPostInfo(ev.target.value);
        }}
      ></TextArea>
      <BottomCont>
        <CharInfo>
          <CharacterCount charLength={postInfo.length} />
        </CharInfo>
        <Button type="submit">
          Shoot{"\u00a0"}
          <GiPistolGun />
        </Button>
      </BottomCont>
    </FormStyle>
  );
  //   const postDetails = () => {
  //     const data = new FormData();
  //     data.append("file", image);
  //     data.append("upload_preset", "bond-voyage");
  //     data.append("cloud_name", "emma-mandat-toland");
  //     fetch("https://api.cloudinary.com/v1_1/emma-mandat-toland/image/upload", {
  //       method: "post",
  //       body: data,
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
};

const Other = styled.div``;
const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  resize: none;
  padding-top: 10px;
  width: 700px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  resize: none;
  outline: none;
  overflow: auto;
  border: none;
  padding-top: 10px;
  width: 600px;
  height: 200px;
  font-family: Arial;
  font-weight: bold;
  font-size: large;
  margin-left: 90px;
  margin-top: -70px;
  background-color: white;
  padding-bottom: 20px;
`;

const CharInfo = styled.div`
  margin-left: 500px;
  position: absolute;
`;

const BottomCont = styled.div``;

const Button = styled.button`
  align-self: flex-end;
  text-decoration: none;
  margin-top: -200px;
  margin-left: 550px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 20px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: black;
  cursor: pointer;
`;

const Avatar = styled.img`
  width: 70px;
  border-radius: 10px;
  margin-left: 10px;
`;
export default NewMessage;
