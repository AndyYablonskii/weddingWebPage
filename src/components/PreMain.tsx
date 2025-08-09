import React from "react";
import { COLORS } from "../constants/index.ts";
import './PreMainStyle.css';

const containerStyle: React.CSSProperties = {
  backgroundColor: COLORS.darkBrown,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: COLORS.background,
  paddingTop: '20px',
  paddingLeft: '50px',
  paddingRight: '50px',
  paddingBottom: '20px',
  fontSize: '24px'
};

export const PreMain: React.FC = () => {
  return (
    <div className="premainDesktop">
      <div style={containerStyle}>
        Surging waters cannot quench love, floodwaters cannot overflow it
      </div>
      <div style={containerStyle}>
        Song of Solomon 8:7
      </div>
    </div>
  );
};