import React, { useEffect, useState } from "react";
import "./index.css";

export default function StopWatch() {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let timer;

  useEffect(() => {
    // eslint-disable-next-line
    timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    if (seconds === 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }
    return () => clearInterval(timer);
  });

  const resetTimer = () => {
    setMinutes(0);
    setHours(0);
    setSeconds(0);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "60px",
        }}
      >
        Stopwatch
      </h1>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "100px",
        }}
      >
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <button onClick={resetTimer}>
          Reset
        </button>
        <button onClick={stopTimer}>
          Stop
        </button>
      </div>
    </>
  );
}
