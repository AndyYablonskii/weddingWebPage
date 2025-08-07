import React from "react";
import { WEDDING_DATE_DISPLAY } from "../constants/index.ts";
import heroImg from "../assets/Hero.png";
import frameSvg from "../assets/Frame.svg";
import "./HeroStyle.css";

const heroContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "100dvh",
  position: "relative",
  backgroundImage: `url(${heroImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(209, 215, 205, 0.3)",
  zIndex: 1,
};

const frameStyle: React.CSSProperties = {
  display: 'flex',
  justifySelf: 'center',
  position: 'center',
  zIndex: 3,
  paddingTop: '580px',
};

const coupleNameStyle: React.CSSProperties = {
  fontFamily: 'Playfair Display',
  fontWeight: 900,
  fontStyle: 'normal',
  display: 'flex',
  justifySelf: 'center',
  position: 'center',
  lineHeight: '40px',
  fontSize: '36px',
  color: 'rgba(248, 244, 237, 1)'
};

const lineStyle: React.CSSProperties = {
  display: 'flex',
  position: 'center',
  justifySelf: 'center',
  color: 'rgba(248, 244, 237, 1)'
};

const dateStyle: React.CSSProperties = {
  display: 'flex',
  justifySelf: 'center',
  paddingTop: '44px',
  color: 'rgba(248, 244, 237, 1)',
  fontFamily: 'Cormorant Garamond',
  fontSize: '20px'
};

export const Hero: React.FC = () => {
  return (
    <div className="container" style={heroContainerStyle}>
      <div className="zIndexForImg" style={overlayStyle} />
      <div className="heroContent">
        <img
          className="frameSvg"
          src={frameSvg}
          alt="Decorative frame"
          style={frameStyle}
        />
        <div className="Andrew & Sofia" style={coupleNameStyle}>
          Andrew & Sofia
        </div>
        <div className="line" style={lineStyle}>
          _________
        </div>
        <div className="Date" style={dateStyle}>
          {WEDDING_DATE_DISPLAY}
        </div>
      </div>
    </div>
  );
};