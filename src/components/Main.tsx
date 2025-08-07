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
    paddingTop?: string;
}

const backgroundStyle: React.CSSProperties = {
    height: '100dvh',
    width: '100%',
    backgroundImage: `url(${Invitation})`,
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

const titleStyle: React.CSSProperties = {
    display: 'flex',
    justifySelf: 'center',
    paddingTop: '85px',
    fontSize: '35px',
    fontWeight: 400,
    color: COLORS.primary
};

const rectangleMobileStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '36px',
    color: COLORS.accent,
};

const rectangleDesktopStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '26px',
    color: COLORS.accent,
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
    margin: '0 auto',
    borderRadius: '30px',
    boxShadow: 'none',
    border: 'none',
    outline: 'none'
};

const EventSection: React.FC<EventSectionProps> = ({
    icon,
    title,
    location,
    time,
    paddingTop = '0px'
}) => (
    <>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <img
                style={{ paddingLeft: '70px', paddingTop }}
                src={icon}
                alt={`${title} icon`}
            />
            <div style={{
                fontSize: '30px',
                paddingLeft: paddingTop ? '15px' : '12px',
                paddingTop: paddingTop ? '40px' : '28px',
                color: COLORS.primary
            }}>
                {title}
            </div>
        </div>

        <div style={{
            paddingLeft: '68px',
            paddingTop: '17px',
            fontSize: '16px',
            color: COLORS.primary,
        }}>
            <b>Локація: </b>{location}
        </div>

        <div style={{
            paddingLeft: '68px',
            paddingTop: '16px',
            fontSize: '16px',
            color: COLORS.primary,
        }}>
            <b>Час: </b>{time}
        </div>

        <div style={{ display: 'flex' }}>
            <img
                src={Link}
                style={{ paddingLeft: '70px', paddingTop: '16px' }}
                alt="Link icon"
            />
            <a
                style={{
                    color: COLORS.primary,
                    paddingLeft: '7px',
                    paddingTop: '17px',
                }}
                href={LOCATIONS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <b>Google Maps</b>
            </a>
        </div>
    </>
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
                paddingTop="81px"
            />

            <div style={{ marginBottom: '30px' }} />

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