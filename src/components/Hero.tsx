import React from "react";
import { WEDDING_DATE_DISPLAY } from "../constants/index.ts";
import heroImg from "../assets/Hero.png";
import frameSvg from "../assets/Frame.svg";
import "./HeroStyle.css";

const heroContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: `url(${heroImg})`,
  backgroundSize: "cover",
  backgroundPosition: "top center",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

const overlayStyle: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(209, 215, 205, 0.3)",
  zIndex: 1,
};

const contentContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  textAlign: "center",
};

const frameStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const coupleNameStyle: React.CSSProperties = {
  fontFamily: 'var(--font-hero)',
  fontWeight: 900,
  fontStyle: 'normal',
  lineHeight: '40px',
  fontSize: '36px',
  color: 'rgba(248, 244, 237, 1)',
  margin: 0,
};

const lineStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  margin: '16px 0',
};

const dateStyle: React.CSSProperties = {
  color: 'rgba(248, 244, 237, 1)',
  fontFamily: 'var(--font-accent)',
  fontSize: '20px',
  margin: 0,
};

export const Hero: React.FC = () => {
  return (
    <div className="container" style={heroContainerStyle}>
      {/* Mobile overlay - shown only on mobile */}
      <div className="mobile-overlay" style={overlayStyle} />
      
      {/* Mobile hero content */}
      <div className="heroContent" style={contentContainerStyle}>
        <img
          className="frameSvg"
          src={frameSvg}
          alt="Decorative frame"
          style={frameStyle}
        />
        <div className="couple-name" style={coupleNameStyle}>
          Andrew & Sofia
        </div>
        <div className="line" style={lineStyle}>
          <hr className="decorative-line decorative-line--short" style={{ backgroundColor: 'rgba(248, 244, 237, 1)' }} />
        </div>
        <div className="Date" style={dateStyle}>
          {WEDDING_DATE_DISPLAY}
        </div>
      </div>
      
      {/* Desktop layout - hidden on mobile */}
      <div className="desktop-hero">
        <img
          className="desktop-hero-img"
          src={heroImg}
          alt="Andrew and Sofia"
        />
        <div className="desktop-hero-text">
          <img
            className="desktop-decorative"
            src={frameSvg}
            alt="Decorative flourish"
          />
          <div className="desktop-title">
            <div className="desktop-name">Andrew</div>
            <div className="desktop-ampersand">&</div>
            <div className="desktop-name">Sofia</div>
          </div>
          <div className="desktop-date">{WEDDING_DATE_DISPLAY}</div>
        </div>
      </div>
    </div>
  );
};