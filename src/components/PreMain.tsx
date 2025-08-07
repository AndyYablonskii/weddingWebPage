import React from "react";
import { COLORS } from "../constants/index.ts";
import './PreMainStyle.css';

const containerStyle: React.CSSProperties = {
  backgroundColor: COLORS.background,
  display: 'flex',
  textAlign: 'center',
  color: COLORS.primary,
  paddingTop: '27px',
  paddingLeft: '51px',
  paddingRight: '49px',
  paddingBottom: '20px',
  fontSize: '24px'
};

export const PreMain: React.FC = () => {
  return (
    <div className="premainDesktop">
      <div style={containerStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
        porro ex, <br />
        magni dolorum corporis neque blanditiis exercitationem adipisci.
      </div>
    </div>
  );
};