import React, { useState, useEffect, useRef } from "react";
import { TimeCounter } from "./QuestionContainer.styled.components";
import { Icon } from "semantic-ui-react";

const TimeCountDown = () => {
  const [minutes, setMinutes] = useState(2);
  const [seconds, seSeconds] = useState(60);

  let intervalRef = useRef<any>();

  const runCounter = () => {
    if (seconds <= 60) {
      seSeconds((previousSeconds) => previousSeconds == 0 ? 60 :  previousSeconds - 1);
      console.log(seconds)
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(runCounter, 1000);

    return () => clearInterval(intervalRef?.current);
  }, []);
  //console.log(seconds);
  return (
    <TimeCounter color={"red"} size={"large"}>
      <Icon name="clock outline" />{" "}
      {`${minutes}:${seconds == 60 ? "00" : seconds}`}
    </TimeCounter>
  );
};

export default TimeCountDown;
