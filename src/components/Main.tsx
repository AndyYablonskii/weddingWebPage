import React from "react";
import Invitation from "../assets/Invitation.png";
import Church from "../assets/church.svg";
import Link from "../assets/link-svg.svg";
import Dinner from "../assets/Dinner.svg";


export const Main = () => {
    return (
        <>
            <div  className="backgroundImg"
            style={{
                height: '100dvh',
                width: '100%',
                backgroundImage: `url(${Invitation})`,
                position: "relative",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                
                

            }}>
                <div style={{

                }}>
                </div>
                <div className="Invite" style={{
                    display: 'flex',
                    justifySelf: 'center',
                    paddingTop: '85px',
                    fontSize: '35px',
                    fontWeight: 400,
                    color: 'rgba(73, 90, 59, 1)'
                }}>Розклад весілля</div>
                <div className="ractangleMobile"
                 style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '36px',
                    color: 'rgba(201, 203, 163, 1)',
                }}>______</div>

<div className="ractangleDesktop"
        style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '26px',
                    color: 'rgba(201, 203, 163, 1)',
                }}>________________________</div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <img style={{
                        paddingLeft: '70px'
                    }}
                        src={Church} alt="" />


                    <div style={{
                        fontSize: '30px',
                        paddingLeft: '12px',
                        paddingTop: '28px',
                        color: 'rgba(73, 90, 59, 1)'
                    }} >Церемонія
                        вінчання</div>
                </div>
                <div style={{
                    paddingLeft: '68px',
                    paddingTop: '17px',
                    fontSize: '16px',
                    color: 'rgba(73, 90, 59, 1)',
                }}>
                    <b>Локація: </b>Дім молитви с. Хутори
                </div>
                <div style={{
                    paddingLeft: '68px',
                    paddingTop: '16px',
                    fontSize: '16px',
                    color: 'rgba(73, 90, 59, 1)',
                }}><b>Час: </b>14:00</div>
                <div style={{
                    display: 'flex',
                }}>
                    <img src={Link}
                        style={{
                            paddingLeft: '70px',
                            paddingTop: '16px',
                        }}
                        alt="" />

                    <a style={{
                        color: 'rgba(73, 90, 59, 1)',
                        paddingLeft: '7px',
                        paddingTop: '17px',
                    }}
                        href="https://maps.app.goo.gl/QZ4FVSDMwn6dAHWj8" target="_blank" rel="noopener noreferrer">
                        <b> Google Maps</b>
                    </a>
                </div>

                {/* _______________________________________________________________________________________ */}

                <div style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <img style={{
                        paddingTop: '81px',
                        paddingLeft: '70px'
                    }}
                        src={Dinner} alt="" />


                    <div style={{
                        fontSize: '30px',
                        paddingLeft: '15px',
                        paddingTop: '121px',
                        color: 'rgba(73, 90, 59, 1)'
                    }} >Бенкет</div>
                </div>
                <div style={{
                    paddingLeft: '68px',
                    paddingTop: '17px',
                    fontSize: '16px',
                    color: 'rgba(73, 90, 59, 1)',
                }}>
                    <b>Локація: </b>Дім молитви с. Хутори
                </div>
                <div style={{
                    paddingLeft: '68px',
                    paddingTop: '16px',
                    fontSize: '16px',
                    color: 'rgba(73, 90, 59, 1)',
                }}><b>Час: </b>14:00-20:00</div>

                <div style={{
                    display: 'flex',
                    marginBottom: '30px',
                }}>
                    <img src={Link}
                        style={{
                            paddingLeft: '70px',
                            paddingTop: '16px',
                        }}
                        alt="" />

                    <a style={{
                        color: 'rgba(73, 90, 59, 1)',
                        paddingLeft: '7px',
                        paddingTop: '17px',
                    }}
                        href="https://maps.app.goo.gl/QZ4FVSDMwn6dAHWj8" target="_blank" rel="noopener noreferrer">
                        <b> Google Maps</b>
                    </a>
                </div>

                <button className="btn"
                    style={{
                        height: '60px',
                        width: '300px',
                        fontSize: '18px',
                        color: 'rgba(248, 244, 237, 1)',
                        backgroundColor: 'rgba(73, 90, 59, 1)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto',
                        borderRadius: '30px',
                        boxShadow: 'none',
                        border: 'none',
                        outline: 'none'
                    }}
                    onClick={() => {
                        const url = new URL("https://calendar.google.com/calendar/render");
                        url.searchParams.set("action", "TEMPLATE");
                        url.searchParams.set("text", "Наше весілля 💍");
                        url.searchParams.set("details", "Запрошуємо вас розділити з нами цей особливий день!");
                        url.searchParams.set("location", "пров.Шкільний 2а, с.Хутори");
                        url.searchParams.set("dates", "20251004T140000Z/20251004T170000Z");
                        window.open(url.toString(), "_blank");
                    }}
                >Додати в Google Календар</button>

            </div>
        </>
    )
}   