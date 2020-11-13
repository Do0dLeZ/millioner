/* eslint-disable  */
import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import uniqid from "uniqid";

import ListItem from "./QuestionsListItem";

import {
  QuestionsList,
  Question,
  Wrapper,
} from "../../styles/components/playground/playground";

const PlayGround = ({ question, onAnswerClick, isMenuOpen }) => {
  const [answerIndex, setAnswerIndex] = useState(-1);

  useEffect(() => {
    if (answerIndex >= 0) {
      const timeout = setTimeout(() => {
        onAnswerClick(question.rightAnswer === answerIndex);
        setAnswerIndex(-1);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  });

  const setAnswerState = (index) => {
    if (answerIndex === index && index === question.rightAnswer) return 1;
    if (answerIndex === index && index !== question.rightAnswer) return 0;
    if (answerIndex > 0 && index === question.rightAnswer) return 1;
    return -1;
  };

  return (
    <Wrapper isMenuOpen={isMenuOpen ? "none" : "flex"}>
      <Question>{question.question}</Question>
      <QuestionsList>
        {question.answers.map((item, index) => (
          <ListItem
            key={uniqid()}
            answer={item}
            index={index}
            state={setAnswerState(index)}
            onAnswerClick={(clickedIndex) => setAnswerIndex(clickedIndex)}
          />
        ))}
      </QuestionsList>
    </Wrapper>
  );
};

PlayGround.defaultProps = {
  question: {
    error: "Empty question...",
  },
};

PlayGround.propTypes = {
  isMenuOpen: propTypes.bool.isRequired,
  question: propTypes.shape({
    question: propTypes.string,
    answers: propTypes.arrayOf(propTypes.string),
    rightAnswer: propTypes.number,
  }),
  onAnswerClick: propTypes.func.isRequired,
};

export default PlayGround;
