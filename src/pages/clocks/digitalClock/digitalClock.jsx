import React, { useEffect, useState } from 'react';
import './digitalClock.css';

export default function DigitalClock() {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <h1 className="main">{currentTime}</h1>
    </>
  );
}
