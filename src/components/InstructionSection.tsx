import React from "react";
import {
  InstructionContainer,
  InstructionContainerHeader,
  InstructionContainerBody,
  InstructionContainerFooter,
  InstructionHeaderTitle,
  StartButton,
} from "./Component.styled";
import { useTranslation } from "react-i18next";
import { instructionPoints } from "../Utils";

import { useNavigate } from "react-router-dom";

const InstructionSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleStart = () => navigate('/subject-selection');

  return (
    <InstructionContainer data-testid={"instruction-section"}>
      <InstructionContainerHeader>
        <InstructionHeaderTitle>
          {t("instructionPage.title")}
        </InstructionHeaderTitle>
      </InstructionContainerHeader>
      <InstructionContainerBody>
        <ul>
          {instructionPoints.map((option) => (
            <li key={option.trnslationKey}>{t(option.trnslationKey)}</li>
          ))}
        </ul>
      </InstructionContainerBody>
      <InstructionContainerFooter>
        <StartButton primary onClick={handleStart}>
          {t("instructionPage.startButton")}
        </StartButton>
      </InstructionContainerFooter>
    </InstructionContainer>
  );
};

export default InstructionSection;
