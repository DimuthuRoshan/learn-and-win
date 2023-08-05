import styled from "styled-components";
import { Button } from "semantic-ui-react";

export const InstructionContainer = styled.div`
  padding: 1rem;
`;

export const InstructionContainerHeader = styled.div``;

export const InstructionHeaderTitle = styled.p`
  font-family: Sinhala Sangam MN !important;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0rem 0rem 1rem 0rem;
`;

export const InstructionContainerBody = styled.div`
  font-family: Sinhala Sangam MN !important;
  font-size: 1rem;
  background-color: #ffffff;
  padding: 1rem;
`;
export const InstructionContainerFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StartButton = styled(Button)`
  margin: 1rem 0rem 0rem 0rem !important;
`;
