import React from "react";
import { COLORS, LOCATIONS } from "../constants/index.ts";
import Invitation from "../assets/Invitation.png";
import Church from "../assets/church.svg";
import Link from "../assets/link-svg.svg";
import Dinner from "../assets/Dinner.svg";
import './MainStyle.css';


const backgroundImageStyle: React.CSSProperties = {
    height: '100dvh',
    width: '100%',
    backgroundImage: `url(${Invitation})`,
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
};

const scheduleHeadingStyle: React.CSSProperties = {
    display: 'flex',
    justifySelf: 'center',
    paddingTop: '85px',
    fontSize: '35px',
    fontWeight: 400,
    color: COLORS.primary
};

const rectangleLineStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '36px',
};

const rectangleDesktopLineStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '26px',
};

const eventSectionStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
};

const eventIconStyle: React.CSSProperties = {
    paddingLeft: '70px'
};

const eventTitleStyle: React.CSSProperties = {
    fontSize: '30px',
    paddingLeft: '12px',
    paddingTop: '28px',
    color: COLORS.primary
};

const eventDetailsStyle: React.CSSProperties = {
    paddingLeft: '68px',
    paddingTop: '17px',
    fontSize: '16px',
    color: COLORS.primary,
};

const eventTimeStyle: React.CSSProperties = {
    paddingLeft: '68px',
    paddingTop: '16px',
    fontSize: '16px',
    color: COLORS.primary,
};

const linkContainerStyle: React.CSSProperties = {
    display: 'flex',
};

const linkIconStyle: React.CSSProperties = {
    paddingLeft: '70px',
    paddingTop: '16px',
};

const linkStyle: React.CSSProperties = {
    color: COLORS.primary,
    paddingLeft: '7px',
    paddingTop: '17px',
};

const banquetIconStyle: React.CSSProperties = {
    paddingTop: '81px',
    paddingLeft: '70px'
};

const banquetTitleStyle: React.CSSProperties = {
    fontSize: '30px',
    paddingLeft: '15px',
    paddingTop: '121px',
    color: COLORS.primary
};

const finalLinkContainerStyle: React.CSSProperties = {
    display: 'flex',
    marginBottom: '30px',
};

const calendarButtonStyle: React.CSSProperties = {
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

const createGoogleCalendarEvent = () => {
    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", "Наше весілля 💍");
    url.searchParams.set("details", "Запрошуємо вас розділити з нами цей особливий день!");
    url.searchParams.set("location", "пров.Шкільний 2а, с.Хутори");
    url.searchParams.set("dates", "20251004T140000Z/20251004T170000Z");
    window.open(url.toString(), "_blank");
};

export const Main = () => {
    return (
        <>
            <div className="backgroundImg" style={backgroundImageStyle}>
                <div className="Invite" style={scheduleHeadingStyle}>Розклад весілля</div>
                
                <div className="ractangleMobile" style={rectangleLineStyle}>
                    <hr className="decorative-line decorative-line--short" style={{ backgroundColor: COLORS.accent }} />
                </div>

                <div className="ractangleDesktop" style={rectangleDesktopLineStyle}>
                    <hr className="decorative-line decorative-line--long" style={{ backgroundColor: COLORS.accent }} />
                </div>

                <div style={eventSectionStyle}>
                    <img style={eventIconStyle} src={Church} alt="Church ceremony icon" />
                    <div style={eventTitleStyle}>Церемонія вінчання</div>
                </div>
                
                <div style={eventDetailsStyle}>
                    <b>Локація: </b>{LOCATIONS.ceremony}
                </div>
                
                <div style={eventTimeStyle}>
                    <b>Час: </b>14:00
                </div>
                
                <div style={linkContainerStyle}>
                    <img src={Link} style={linkIconStyle} alt="Link icon" />
                    <a style={linkStyle} href={LOCATIONS.mapsUrl} target="_blank" rel="noopener noreferrer">
                        <b> Google Maps</b>
                    </a>
                </div>

                <div style={eventSectionStyle}>
                    <img style={banquetIconStyle} src={Dinner} alt="Dinner reception icon" />
                    <div style={banquetTitleStyle}>Бенкет</div>
                </div>
                
                <div style={eventDetailsStyle}>
                    <b>Локація: </b>{LOCATIONS.reception}
                </div>
                
                <div style={eventTimeStyle}>
                    <b>Час: </b>14:00-20:00
                </div>

                <div style={finalLinkContainerStyle}>
                    <img src={Link} style={linkIconStyle} alt="Link icon" />
                    <a style={linkStyle} href={LOCATIONS.mapsUrl} target="_blank" rel="noopener noreferrer">
                        <b> Google Maps</b>
                    </a>
                </div>

                <button className="btn" style={calendarButtonStyle} onClick={createGoogleCalendarEvent}>
                    Додати в Google Календар
                </button>

            </div>
        </>
    )
}   