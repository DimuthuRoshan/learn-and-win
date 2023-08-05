import styled from "styled-components";
import { Card } from "semantic-ui-react";

interface ISubjectSelectionContainerProps {
  isMobileView: boolean;
}

export const SubjectSelectionContainer = styled.div<ISubjectSelectionContainerProps>`
  background-color: #ffffff;
  margin: 1rem;
  border-radius: 4px;
  display: ${(props) => (props.isMobileView ? "grid" : "flex")};
`;

export const SubjectCard = styled(Card)`
  margin: 1rem 1rem 1rem 0.5rem !important;
  cursor: pointer;
  &:hover {
    box-shadow: 0.25rem 0.25rem !important;
  }
`;
