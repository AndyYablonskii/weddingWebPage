import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const targetDate = new Date("2025-10-04T00:00:00");
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();
  let timeLeft = {
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  };
  if (difference > 0) {
    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
  }
  return timeLeft;
};

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>
        {`
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
        `}
      </style>
      <div className="timer-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '',
        background: 'rgba(186, 162, 126, 1)',
        padding: '40px 0',
      }}>
        <div className="timer-title" style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '36px',
          color: '#fff',
          textAlign: 'center',
          
        }}>
          OUR FOREVER<br />BEGINS IN
        </div>
        <div className="timer-value" style={{
          gap:'20px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          fontFamily: 'Playfair Display, serif',
          fontSize: '64px',
          color: '#fff',
          margin: '0 0 0 0',
        }}>
          {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </div>
        <div className="timer-labels" style={{

          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          fontFamily: 'Playfair Display, serif',
          fontSize: '18px',
          color: '#fff',
          marginTop: '8px',
        }}>
        </div>
      </div>
    </>
  );
}; 