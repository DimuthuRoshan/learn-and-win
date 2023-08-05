import styled from "styled-components";
import { Grid, Label } from "semantic-ui-react";

export const GridCoontainer = styled.div`
  margin: 1rem;
`;
export const QuestionsCoontainer = styled(Grid)`
  margin: 1rem !important;
  background-color: #ffffff;
  border-radius: 4px;
`;

export const QuestionCountLabel = styled(Label)``;

export const ContentRightColumn = styled(Grid.Column)`
  display: flex !important;
  justify-content: flex-end !important;
`;

export const TimeCounter = styled(Label)``;
