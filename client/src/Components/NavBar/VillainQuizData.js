const questions = [
  //The lower you score the less of a villain you are: value1(Marco Sciarra), value2(Mr. White), value3(Ernst Stavro Bloefeld)
  {
    questionText:
      "Do you like to step up and take charge in group assignments?",
    answerOptions: [
      { answerText: "Meh sounds like a lot of work", value: 2 },
      { answerText: "If no one else steps up, sure", value: 3 },
      {
        answerText: "I am the the first one to volunteer as leader always",
        value: 5,
      },
    ],
  },
  {
    questionText: "How do you usually resolve conflict?",
    answerOptions: [
      {
        answerText: "I usually sit back and wait for it to blow over",
        value: 2,
      },
      {
        answerText:
          "I speak my opinion but dont get too caught up in immediate resolution",
        value: 3,
      },
      {
        answerText:
          "Shouting and raising my voice usually occur... ive definitley been told about my temper before",
        value: 5,
      },
    ],
  },
  {
    questionText: "If you were to have a favourite accessory, it would be...?",
    answerOptions: [
      {
        answerText: "Dressing nicely is all i can do... sorry",
        value: 2,
      },
      {
        answerText:
          "I only need my intelligence, and weapons of mass destruction of course",
        value: 3,
      },
      {
        answerText:
          "Its all about the accessories for me... probably a pet or evil henchman will do",
        value: 5,
      },
    ],
  },
  {
    questionText: "How do you interact with your family?",
    answerOptions: [
      {
        answerText: "We get along, im not a bad person",
        value: 2,
      },
      {
        answerText: "Havent seen them in years! I couldnt tell you",
        value: 3,
      },
      {
        answerText: "Hahaha what is family?",
        value: 5,
      },
    ],
  },
  {
    questionText: "Bond has infiltrated your lair, how do you retaliate?",
    answerOptions: [
      {
        answerText: "You run for your life...with a gun too of course",
        value: 2,
      },
      {
        answerText:
          "My organization will have my back, but i can also protect myself",
        value: 3,
      },
      {
        answerText: "Oh... my fleet of personal guards will take care of that",
        value: 5,
      },
    ],
  },
  {
    questionText: "Who is your favourite Bond?",
    answerOptions: [
      {
        answerText: "Timothy Dalton",
        value: 2,
      },
      {
        answerText: "Daniel Craig",
        value: 3,
      },
      {
        answerText: "Sean Connery",
        value: 5,
      },
    ],
  },
  {
    questionText: "What would be your ideal occupation?",
    answerOptions: [
      {
        answerText: "A marine biologist, I love giving back",
        value: 2,
      },
      {
        answerText: "International Banker",
        value: 3,
      },
      {
        answerText: "What is work? I have enough money to do whatever I want",
        value: 5,
      },
    ],
  },
];

export default questions;
