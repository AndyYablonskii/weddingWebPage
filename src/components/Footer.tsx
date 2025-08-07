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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '48px',
      background: 'rgba(186, 162, 126, 1)',
      borderRadius: '16px',
      padding: '40px 0',
    }}>
      <div style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '36px',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '24px',
      }}>
        OUR FOREVER<br />BEGINS IN
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        fontFamily: 'Playfair Display, serif',
        fontSize: '48px',
        color: '#fff',
        margin: '0 0 0 0',
      }}>
        {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '48px',
        fontFamily: 'Playfair Display, serif',
        fontSize: '18px',
        color: '#fff',
        marginTop: '8px',
      }}>
        <span>days</span>
        <span>hours</span>
        <span>minutes</span>
        <span>seconds</span>
      </div>
    </div>
  );
};