import React, { useContext, useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header";
import CurrrentUserContext from "../CurrentUserContext";
import NewMessage from "./NewMessage";
import { CircularProgress } from "@material-ui/core";
import Error from "../Error";
import phone from "./phone.png";
import { FiEdit } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import moment from "moment";
import message from "./message.png";

const Homefeed = () => {
  const [newsFeed, setNewsFeed] = useState(false);
  const { isAuthenticated } = useAuth0();
  const { currentUser, update } = useContext(CurrrentUserContext);
  const [error, setError] = useState(false);
  const [updateFeed, setUpdateFeed] = useState(false);
  // const history = useHistory();
  const [load, setLoad] = useState(false);
  console.log(isAuthenticated, "fruitloops");

  useEffect(() => {
    fetch("/home-feed")
      .then((res) => res.json())
      .then((data) => {
        setNewsFeed(data.posts);
        console.log(data, "orange");
      })
      .catch((err) => {
        console.log(err, "potato");
        setError(!error);
      })
      .finally(() => {
        setLoad(false);
        console.log(newsFeed);
      });
  }, [update, updateFeed]);

  if (error) {
    return <Error />;
  } else {
    return (
      <div>
        <Header />
        <Background>
          <Img
            src={
              "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639602362/james-bond-film-series-firearm-logo-gun-png-favpng-c81nkENpkweyR9D6TfrAnWG24-removebg-preview_odu0yl.png"
            }
          />
          <Div>
            <InputStyle>
              {isAuthenticated && (
                <NewMessage
                  updateFeed={updateFeed}
                  setUpdateFeed={setUpdateFeed}
                />
              )}
            </InputStyle>
            {!newsFeed ? (
              <CircularLoad>
                <CircularProgress />
                Loading
              </CircularLoad>
            ) : (
              <>
                {newsFeed.map((message) => {
                  return (
                    <MessageDiv>
                      <InfoBox>
                        <Avatar
                          src={
                            "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639446802/Screen_Shot_2021-12-13_at_8.51.56_PM-removebg-preview_cyjwwz.png"
                          }
                        ></Avatar>
                        <OtherHeader>@ {message.displayName}</OtherHeader>
                        <Time>
                          . {moment(message.timeStamp).format("MMM Do")}
                        </Time>
                      </InfoBox>
                      <Content>
                        <MessageText>{message.status}</MessageText>
                        <Media src={message.displayMedia}></Media>
                      </Content>
                    </MessageDiv>
                  );
                })}
              </>
            )}
          </Div>
        </Background>
      </div>
    );
  }
};

const Img = styled.img`
  width: 350px;
  position: absolute;
  z-index: -1;
  margin-top: 100px;
`;

const Background = styled.div`
  background-color: gray;
  opacity: 0.9;
`;

const Media = styled.img`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: gray;
`;

const Avatar = styled.img`
  width: 150px;
`;
const Content = styled.div`
  padding: 10px;
  background-color: white;
  opacity: 0.9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const InputStyle = styled.div`
  display: flex;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

const MessageDiv = styled.div`
  width: 700px;
  border-radius: 10px;
  display: inline-block;
  margin-top: 20px;
  border: 2px solid black;
`;

const OtherHeader = styled.p`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Special Elite", cursive;
`;

const MessageText = styled.p`
  font-family: "Special Elite", cursive;
`;

const CircularLoad = styled.div``;

const Time = styled.p`
  font-family: "Special Elite", cursive;
  margin-left: -550px;
`;

export default Homefeed;
