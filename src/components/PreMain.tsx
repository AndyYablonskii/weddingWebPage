import React from "react";
import { COLORS } from "../constants/index.ts";
import './PreMainStyle.css';

const containerStyle: React.CSSProperties = {
  backgroundColor: COLORS.darkBrown,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: COLORS.background,
  paddingLeft: '40px',
  paddingRight: '40px',
  paddingTop: '20px',
  paddingBottom: '20px',
  fontSize: '18px',
};

export const PreMain: React.FC = () => {
  return (
    <div className="premainDesktop">
      {/* <div style={{...containerStyle, paddingTop: '20px', fontSize: '32px'}}>
        04.10.25
      </div> */}
      <div style={containerStyle}>
        <div>
          На особливі події запрошують особливих людей. <br />
          Ми неймовірно щасливі запросити вас на наше довгоочікуване весілля!
        </div>
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '2px', marginBottom: '2px' }}>04.10.25</div>
        <div>
          Ми скажемо один одному «так», <br />
          і дуже хочемо, щоб ви були  <br />
          поруч у цю мить!
        </div>
      </div>
    </div>
  );
};