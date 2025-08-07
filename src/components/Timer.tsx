import React, { useEffect, useState } from "react";
import { calculateTimeLeft, TimeLeft } from "../utills/timer.ts";

const timerStyles = `
  @media (min-width: 1024px) {
    .timer-container {
      padding: 60px 0 !important;
    }
    .timer-title {
      font-size: 48px !important;
    }
    .timer-value {
      font-size: 64px !important;
    }
    .timer-labels {
      font-size: 24px !important;
    }
  }
`;

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(186, 162, 126, 1)',
  padding: '40px 0',
};

const titleStyle: React.CSSProperties = {
  fontFamily: 'Playfair Display, serif',
  fontSize: '36px',
  color: '#fff',
  textAlign: 'center',
};

const valueStyle: React.CSSProperties = {
  gap: '20px',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  fontFamily: 'Playfair Display, serif',
  fontSize: '64px',
  color: '#fff',
  margin: '0 0 0 0',
};

const labelsStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  fontFamily: 'Playfair Display, serif',
  fontSize: '18px',
  color: '#fff',
  marginTop: '8px',
};

export const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{timerStyles}</style>
      <div className="timer-container" style={containerStyle}>
        <div className="timer-title" style={titleStyle}>
          OUR FOREVER<br />BEGINS IN
        </div>
        <div className="timer-value" style={valueStyle}>
          {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </div>
        <div className="timer-labels" style={labelsStyle} />
      </div>
    </>
  );
};