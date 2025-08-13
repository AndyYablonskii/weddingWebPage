import React from "react";
import { COLORS } from "../constants/index.ts";
import Img from "../assets/img.png";
import './Colors.css';

interface ColorCircleProps {
    color: string;
}

const colorPalette = [
    COLORS.primary,
    COLORS.tertiary,
    COLORS.accent,
    COLORS.lightText,
    COLORS.darkBrown,
];

const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '386px',
    objectFit: 'cover'
};

const containerStyle: React.CSSProperties = {
    backgroundColor: COLORS.background,
};

const titleStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    color: COLORS.primary,
    fontSize: '35px',
    paddingTop: '46px',
};

const rectangleMobileStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '26px',
};

const rectangleDesktopStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '26px',
};

const requestStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '24px',
    color: COLORS.secondary,
    fontSize: '16px'
};

const colorsContainerStyle: React.CSSProperties = {
    paddingTop: '40px',
    paddingBottom: '67px',
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    justifyContent: 'center'
};

const ColorCircle: React.FC<ColorCircleProps> = ({ color }) => (
    <div style={{
        width: '62px',
        height: '62px',
        borderRadius: '50%',
        backgroundColor: color,
    }} />
);

export const Colors: React.FC = () => {
    return (
        <>
            <img
                className="hideImg"
                style={imageStyle}
                src={Img}
                alt="Wedding colors inspiration"
            />

            <div style={containerStyle}>
                <div className="title" style={titleStyle}>
                    Кольорова гамма
                </div>

                <div className="ractangleMobile" style={rectangleMobileStyle}>
                    <hr className="decorative-line decorative-line--short" style={{ backgroundColor: COLORS.accent }} />
                </div>

                <div className="ractangleDesktop" style={rectangleDesktopStyle}>
                    <hr className="decorative-line decorative-line--long" style={{ backgroundColor: COLORS.accent }} />
                </div>

                <span className="request" style={requestStyle}>
                    Просимо підтримати кольорову гамму нашого весілля
                </span>

                <div className="addGaps" style={colorsContainerStyle}>
                    {colorPalette.map((color, index) => (
                        <ColorCircle key={index} color={color} />
                    ))}
                </div>
            </div>
        </>
    );
};