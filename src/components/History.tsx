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
    fontSize: '35px',
    fontFamily: 'var(--font-heading)'
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
    textAlign: 'center',
    flexDirection: 'column',
    gap: '10px',
    lineHeight: '1.3',
    fontFamily: 'var(--font-body)'
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
                Як все починалося…<br />
                <div>
                    <b>2019 р.</b> двоє підлітків опинилися в одному  таборі, проте зовсім не помічали один одного.<br />
                </div>
                <div>
                    <b>2021 р.</b> вони знову зустрілися в таборі, проте вже в ролі лідерів. Дружили в компанії, навіть не уявляючи, <br /> що Бог запланував створити з цієї дружби щось набагато більше…<br />
                </div>
                <div>
                    <b>2022 р.</b> війна. Вона поїхала за кордон.  Вони не спілкувалися, проте при згадці один про одного <br /> в серці щось тихенько й ніжно йокало. Без думки один про одного вона молилася про духовного чоловіка, <br /> який грає на гітарі. А він — про дружину-служительку, яка знає англійську. <br /> P.s. так і вийшло<br />
                </div>
                <div>
                    <b>2023 р.</b> вона повернулася додому. Їх спілкування відновилося, проте тепер воно інше. <br /> Не наївно-дитяче, а духовне, серйозне, сповнене мудрості, обережності та тепла.<br />
                </div>
                <div>
                    <b>17.07.23</b> - перша важлива спільна дата.<br />
                </div>
                <div>
                    <b>07.03.25</b> вона сказала йому найвпевненіше «так», <br /> та усвідомила: він подарував їй казку, <br /> про яку вона навіть не мріяла.
                </div>
                <div style={{ marginTop: '10px'}}>
                    Ось так Бог написав нашу історію. <br /> Відтепер тільки разом та тільки вперед.
                </div>
            </div>
        </div>
    );
};