import React from "react";
import {
  SubjectSelectionContainer,
  SubjectCard,
} from "./SubjectSelection.styled.components";
import { isMobile } from "react-device-detect";
import { subjects } from "./Constant";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SubjectSelection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleOnSubjectSelection = (subject: string) => {
    console.log("On subject selection", subject);
    navigate("/take-questions", { state: { subject } });
  };

  return (
    <SubjectSelectionContainer isMobileView={isMobile}>
      {subjects.map((subject) => {
        return (
          <SubjectCard
            header={t("subjectSelectionPage." + subject.key + ".name")}
            meta={t("subjectSelectionPage." + subject.key + ".meta")}
            color="red"
            description={t(
              "subjectSelectionPage." + subject.key + ".description"
            )}
            onClick={() => handleOnSubjectSelection(subject.key)}
          />
        );
      })}
    </SubjectSelectionContainer>
  );
};

export default SubjectSelection;
