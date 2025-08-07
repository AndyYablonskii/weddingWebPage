import React from "react";
import frameSvg2 from "../assets/Frame2.svg";

export const End = () =>{
return( 
<div style={{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(248, 244, 237, 1)',
    color:'rgba(90, 98, 70, 1)',
    paddingTop:'64px',
    paddingBottom:'64px'
}}>
    <img  src={frameSvg2} alt="" />
    <span>З любов'ю, Andrew & Sofia</span>
    <span>04.10.25</span>
    </div>
)

}