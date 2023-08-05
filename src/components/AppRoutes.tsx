import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SubjectSelection from "../pages/subjectSelection/SubjectSelection";
import QuestionContainer from "../pages/questionPage/QuestionContainer";

const AppRoutes = () => (
  <Routes>
    <Route path="/" Component={Home}></Route>
    <Route path="/subject-selection" Component={SubjectSelection}></Route>
    <Route path="/take-questions" Component={QuestionContainer}></Route>
  </Routes>
);

export default AppRoutes;
