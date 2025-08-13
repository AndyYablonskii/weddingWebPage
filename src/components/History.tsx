import React from "react";
import { COLORS } from "../constants/index.ts";
import "./History.css";

const containerStyle: React.CSSProperties = {
    backgroundColor: COLORS.primary,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    color: COLORS.lightText,
    paddingTop: '62px',
};

const titleStyle: React.CSSProperties = {
    fontSize: '35px'
};

const rectangleMobileStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
};

const rectangleDesktopStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '26px',
};

const historyTextStyle: React.CSSProperties = {
    paddingTop: '38px',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingBottom: '53px',
    fontSize: '18px',
    display: 'flex',
    textAlign: 'center'
};

export const History: React.FC = () => {
    return (
        <div style={containerStyle}>
            <span style={titleStyle}>Наша Історія</span>

            <div className="ractangleMobile" style={rectangleMobileStyle}>
                <hr className="decorative-line decorative-line--short" style={{ backgroundColor: COLORS.accent }} />
            </div>

            <div className="ractangleDesktop" style={rectangleDesktopStyle}>
                <hr className="decorative-line decorative-line--long" style={{ backgroundColor: COLORS.accent }} />
            </div>

            <div className="history" style={historyTextStyle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus ligula at lacus cursus sodales. Quisque at suscipit velit. Donec volutpat risus vitae tortor ultricies, tempus tincidunt ex vehicula. Phasellus tempus varius velit, dapibus vehicula neque hendrerit a. Mauris tempus lobortis ex, id laoreet nibh ornare et. Sed viverra nulla sed sapien luctus, sit amet vehicula eros varius. <br />
                Nullam blandit mollis ligula eget sodales. Sed vel malesuada ipsum. Sed mollis efficitur leo. Quisque id dictum nunc.
                Ut sit amet odio a neque sagittis pellentesque. Pellentesque posuere, quam at luctus molestie, neque arcu ornare orci, ut pharetra enim ligula eu massa. Nulla quam metus, blandit in ipsum nec, luctus commodo felis. Aenean et felis gravida, consectetur eros eu, placerat ipsum. Aliquam sodales pharetra lectus ac lobortis. In hac habitasse platea dictumst.
            </div>
        </div>
    );
};