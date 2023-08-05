import React from "react";
import { useLocation } from "react-router-dom";
import {
  QuestionsCoontainer,
  GridCoontainer,
  QuestionCountLabel,
  ContentRightColumn,
} from "./QuestionContainer.styled.components";
import TimeCountDown from "./TimeCountDown";

const QuestionContainer = () => {
  const location = useLocation();
console.log("QuestionContainer")
  return (
    <GridCoontainer>
      <QuestionsCoontainer padded columns={3}>
        <QuestionsCoontainer.Column>
          Question {location.state.subject}
        </QuestionsCoontainer.Column>
        <QuestionsCoontainer.Column>
          Question {location.state.subject}
        </QuestionsCoontainer.Column>
        <ContentRightColumn>
          <QuestionCountLabel tag={true} size={"large"}>
            1/10 Questions
          </QuestionCountLabel>
          <TimeCountDown/>
        </ContentRightColumn>
      </QuestionsCoontainer>
    </GridCoontainer>
  );
};

export default QuestionContainer;
