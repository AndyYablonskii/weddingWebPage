// src/components/Main.tsx
import React from "react";
import { COLORS, LOCATIONS } from "../constants/index.ts";
import { createGoogleCalendarUrl } from "../utills/callendar.ts";
import Invitation from "../assets/Invitation.png";
import Church from "../assets/church.svg";
import Link from "../assets/link-svg.svg";
import Dinner from "../assets/Dinner.svg";
import "./MainStyle.css";

interface EventSectionProps {
    icon: string;
    title: string;
    location: string;
    time: string;
}

const backgroundStyle: React.CSSProperties = {
    minHeight: '100dvh',
    width: '100%',
    backgroundImage: `url(${Invitation})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: '85px',
    paddingBottom: '40px',
};

const titleStyle: React.CSSProperties = {
    fontSize: '35px',
    fontWeight: 400,
    color: COLORS.primary,
    textAlign: 'center',
    margin: 0,
    marginBottom: '36px',
};

const rectangleMobileStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    color: COLORS.accent,
    marginBottom: '40px',
};

const rectangleDesktopStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    color: COLORS.accent,
    marginBottom: '40px',
};

const buttonStyle: React.CSSProperties = {
    height: '60px',
    width: '300px',
    fontSize: '18px',
    color: COLORS.background,
    backgroundColor: COLORS.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '32px',
    borderRadius: '30px',
    boxShadow: 'none',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
};

const eventSectionContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    padding: '24px',
    margin: '16px 0',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const eventHeaderStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px',
};

const eventTitleStyle: React.CSSProperties = {
    fontSize: '30px',
    color: COLORS.primary,
    margin: 0,
    fontWeight: 'bold',
};

const eventDetailStyle: React.CSSProperties = {
    fontSize: '16px',
    color: COLORS.primary,
    margin: '8px 0',
    display: 'flex',
    alignItems: 'center',
};

const eventLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '8px',
    textDecoration: 'none',
};

const EventSection: React.FC<EventSectionProps> = ({
    icon,
    title,
    location,
    time
}) => (
    <div style={eventSectionContainerStyle}>
        <div style={eventHeaderStyle}>
            <img
                src={icon}
                alt={`${title} icon`}
                style={{ width: '40px', height: '40px' }}
            />
            <h3 style={eventTitleStyle}>{title}</h3>
        </div>
        
        <div style={eventDetailStyle}>
            <b>Локація: </b>{location}
        </div>

        <div style={eventDetailStyle}>
            <b>Час: </b>{time}
        </div>

        <a
            style={{...eventLinkStyle, color: COLORS.primary}}
            href={LOCATIONS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={Link}
                alt="Link icon"
                style={{ width: '16px', height: '16px' }}
            />
            <b>Google Maps</b>
        </a>
    </div>
);

export const Main: React.FC = () => {
    const handleAddToCalendar = (): void => {
        const url = createGoogleCalendarUrl();
        window.open(url, "_blank");
    };

    return (
        <div className="backgroundImg" style={backgroundStyle}>
            <div className="Invite" style={titleStyle}>
                Розклад весілля
            </div>

            <div className="ractangleMobile" style={rectangleMobileStyle}>
                ______
            </div>

            <div className="ractangleDesktop" style={rectangleDesktopStyle}>
                ________________________
            </div>

            <EventSection
                icon={Church}
                title="Церемонія вінчання"
                location={LOCATIONS.ceremony}
                time="14:00"
            />

            <EventSection
                icon={Dinner}
                title="Бенкет"
                location={LOCATIONS.reception}
                time="14:00-20:00"
            />

            <button
                className="btn"
                style={buttonStyle}
                onClick={handleAddToCalendar}
            >
                Додати в Google Календар
            </button>
        </div>
    );
};