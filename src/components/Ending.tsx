import React from "react";
import { COLORS, WEDDING_DATE_DISPLAY } from "../constants/index.ts";
import frameSvg2 from "../assets/Frame2.svg";

const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    color: COLORS.secondary,
    paddingTop: '64px',
    paddingBottom: '64px'
};

export const Ending: React.FC = () => {
    return (
        <div style={containerStyle}>
            <img src={frameSvg2} alt="Decorative frame" />
            <span>З любов'ю, Andrew & Sofia</span>
            <span>{WEDDING_DATE_DISPLAY}</span>
        </div>
    );
};