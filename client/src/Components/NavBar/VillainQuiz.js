import React, { useState } from "react";
import styled from "styled-components";
import questions from "./VillainQuizData";
import villianbackground from "./villainbackground.png";
import fontvillain from "./fontvillain.png";
import Header from "../Header";
import { FiEdit } from "react-icons/fi";

const VillainQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (value) => {
    console.log(value);
    //Put condition in here for score update - add value together for every question//
    // if(value )

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setScore(score + value);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      <Header />
      <Img src={villianbackground} />
      <OtherTitle src={fontvillain} />
      <Wrapper>
        <div>
          <App>
            <div className="app">
              {showScore ? (
                <div>
                  <ScoreSection>
                    <div className="score-section">
                      <Score>
                        You scored <Points>{score} </Points>points out of{" "}
                        {questions.length} questions
                      </Score>
                      <Title>
                        This is what your score says about which Villain you
                        are:
                      </Title>
                      <Pics>
                        <Marco
                          src={
                            "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639435153/Marco_Sciarra_-_Profile_uphaxo.png"
                          }
                        />
                        <White
                          src={
                            "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639435960/Mr._White_-_Profile_wplmhb.png"
                          }
                        />
                        <Ernst
                          src={
                            "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639436257/donald-pleasance-blofeld-you-only-live-twice-113502_gnj5kh.jpg"
                          }
                        />
                        <Stavro
                          src={
                            "https://res.cloudinary.com/emma-mandat-toland/image/upload/v1639436473/Blofeld__Christoph_Waltz__-_Profile_gj1ouu.png"
                          }
                        />
                      </Pics>
                      <P1>
                        <PointText>10-15 Points: Marco Sciarra</PointText> Sorry
                        but just like this wannabe Bond villain... you just
                        arent memorable. Seen in the movie Spectre, Marco is
                        chased around the Mexican Day of the Dead celebration by
                        Bond till he is quickly gunned down - resulting in an
                        immediate death.{" "}
                      </P1>
                      <P2>
                        <PointText>15-20 Points: Mr. White</PointText> Like this
                        reappearing Bond character and Spectre member, you use
                        your intelligence and connections to get by - however in
                        the end you still cant make it past the ways of Mr. Bond
                      </P2>
                      <P3>
                        <PointText>
                          20-25 Points: Ernst Stavro Blofeld
                        </PointText>
                        You're so evil they wanted you in multiple Bond
                        franchises! Others should beware... You arent one to be
                        trifled with
                      </P3>
                    </div>
                  </ScoreSection>
                </div>
              ) : (
                <>
                  <div className="question-section">
                    <div className="question-count">
                      <Span>
                        Question {currentQuestion + 1}/{questions.length}
                      </Span>
                    </div>
                    <Div className="question-text">
                      {questions[currentQuestion].questionText}
                    </Div>
                  </div>
                  <div className="answer-section">
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <Button
                          onClick={(ev) =>
                            handleAnswerButtonClick(answerOption.value)
                          }
                        >
                          {answerOption.answerText}
                        </Button>
                      )
                    )}
                  </div>
                </>
              )}
            </div>
          </App>
        </div>
      </Wrapper>
    </div>
  );
};

const Pics = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Points = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  background-color: gray;
  color: white;
  font-weight: bold;
`;

const Ernst = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const Stavro = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const Marco = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const White = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

const PointText = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
`;

const Score = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  background-color: gray;
  font-size: 25px;
  padding-bottom: 10px;
`;
const Div = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  text-align: center;
  font-weight: bold;
`;

const OtherTitle = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 900px;
  height: 80px;
  padding-top: 30px;
`;

const Img = styled.img`
  position: absolute;
  z-index: -1;
  opacity: 0.4;
  width: 100%;
  height: 100%;
`;

const Span = styled.p`
  font: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-align: center;
  color: white;
  font-weight: bold;
`;

const Wrapper = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 100px;
`;

const Button = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  z-index: 1;
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: black;
  border-radius: 10px;
  display: inline-block;
  padding: 10px;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  &:hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    background: rgb(166, 16, 30);
    padding: 15px 40px;
    border-radius: 4px;
    font-weight: normal;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
  }
`;

const App = styled.div`
  z-index: 1;
  background-color: gray;
  width: 450px;
  min-height: 300px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`;

const ScoreSection = styled.div`
  z-index: 1;
  background-color: gray;
`;

const Title = styled.h1`
  z-index: 1;
  font-family: Arial, Helvetica, sans-serif;
  background-color: gray;
  font-size: 15px;
  font-weight: bold;
`;

const P1 = styled.p`
  z-index: 1;
  font-family: Arial, Helvetica, sans-serif;
`;

const P2 = styled.p`
  z-index: 1;
  font-family: Arial, Helvetica, sans-serif;
`;

const P3 = styled.p`
  z-index: 1;
  font-family: Arial, Helvetica, sans-serif;
`;
export default VillainQuiz;
