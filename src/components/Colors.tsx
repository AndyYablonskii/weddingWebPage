import React from "react";
import Img from "../assets/img.png";
import './Colors.css';

export const Colors = () => {
    return (
<>
        <img className="hideImg"
        style={{
            width:'100%',
            height:'386px',
            objectFit:'cover'   
        }} 
        src={Img} alt="" />

        <div style={{
            backgroundColor:'rgba(248, 244, 237, 1)',
        }}>
        <div className="title" style={{
            
            display:'flex',
            justifyContent:'center',
            color:'rgba(73, 90, 59, 1)',
            fontSize:'35px',
            paddingTop: '46px',
        }
        }>
            Кольорова гамма
        </div>
        <div className="ractangleMobile"
        style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '26px',
                    color: 'rgba(201, 203, 163, 1)',
                }}>______</div>
    <div className="ractangleDesktop"
        style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '26px',
                    color: 'rgba(201, 203, 163, 1)',
                }}>________________________</div>

        <span className="request" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '24px',
                  color: 'rgba(90, 98, 70, 1)',
                  fontSize:'16px'
        }}>Просимо підтримати кольорову гамму нашого весілля</span>
        
        <div className="addGaps"
         style={{
            paddingTop:'40px',
            paddingBottom:'67px',
            display:'flex',
            flexDirection:'row',
            gap:'12px',
            justifyContent:'center'
        }}>
<div style={{
    width:'62px',
    height:'62px',
    borderRadius:'50%',
    backgroundColor: 'rgba(90, 98, 70, 1)',
}}> </div>
<div style={{
    width:'62px',
    height:'62px',
    borderRadius:'50%',
    backgroundColor: 'rgba(73, 90, 59, 1)',
}} > </div>
<div style={{
    width:'62px',
    height:'62px',
    borderRadius:'50%',
    backgroundColor: 'rgba(201, 203, 163, 1)',
}} > </div>
<div style={{
    width:'62px',
    height:'62px',
    borderRadius:'50%',
    backgroundColor: 'rgba(237, 227, 210, 1)',
}} > </div>
<div style={{
    width:'62px',
    height:'62px',
    borderRadius:'50%',
    backgroundColor: 'rgba(181, 156, 122, 1)',
    
}} > </div>
        </div>
        
        
        </div>
        </>
    )
}