import React, { useEffect, useState } from "react";
import "./HeroStyle.css";
import heroImg from "../assets/Hero.png";
import frameSvg from "../assets/Frame.svg";
import LineSvg from "../assets/Rectangle.svg"


export const Hero = () => {
 

  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "100dvh",
        position: "relative",
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="zIndexForImg"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(209, 215, 205, 0.3)",
          zIndex: 1,
        }}
      />
      <div className="heroContent">
      <img className="frameSvg"
       src={frameSvg} alt="" style={{
        display: 'flex',
        justifySelf: 'center',
        position:'center',
        zIndex: 3,
        paddingTop: '580px',
      }} />
      <div className=" Andrew & Sofia" style={{
        fontFamily: 'Playfair Display',
        fontWeight: '900',
        fontStyle: 'normal',
        display: 'flex',
        justifySelf: 'center',
        position:'center',
        lineHeight: '40px',
        fontSize: '36px',
        color: 'rgba(248, 244, 237, 1)'
      }}>
        Andrew & Sofia
      </div>

      <div  className="line"
      style={{
        display: 'flex',
        position:'center',
        justifySelf: 'center',
        color: 'rgba(248, 244, 237, 1)'
      }}>_________</div>

      <div className="Date" style={{
        display: 'flex',
        justifySelf: 'center',
        paddingTop: '44px',
        color: 'rgba(248, 244, 237, 1)',
fontFamily: 'Cormorant Garamond',
fontSize:'20px'
      }}>04.10.2025</div>
      </div>

       
    
    </div >

  );
};





