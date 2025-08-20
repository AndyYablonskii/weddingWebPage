import React, { useState } from 'react';
import { COLORS } from '../constants/index.ts';
import './FAQStyle.css';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 'panel1',
        question: 'Чи потрібно підтверджувати свою присутність?',
        answer: 'Ні, підтвердження не обов’язкове. Проте якщо ви не зможете бути, просимо попередити нас заздалегідь. Це допоможе нам у плануванні.'
    },
    {
        id: 'panel2',
        question: 'Що подарувати молодятам?',
        answer: 'Найціннішим для нас є ваша присутність! Також ми маємо багато сімейних потреб, тож найбільш доречним подарунком буде конверт. Просимо не дарувати квіти, адже ми не встигнемо насолодитися їхньою красою.'
    },
    {
        id: 'panel3',
        question: 'Чи можна приходити з дітьми?',
        answer: 'На жаль, ні. Ми дуже любимо діток, проте через обмежену кількість місць святкування відбудеться лише для дорослих гостей. Сподіваємося на ваше розуміння.'
    },
    {
        id: 'panel4',
        question: 'Коли краще приходити, щоб нічого не пропустити?',
        answer: 'Просимо прибути за 10-15 хвилин до початку вінчання та бенкету. Велике прохання не запізнюватися.'
    },
    {
        id: 'panel5',
        question: 'Коли я зможу привітати молодят особисто?',
        answer: 'Ми будемо раді прийняти ваші привітання після завершення церемонії вінчання, або під час вільного часу на бенкеті.'
    },
    // {
    //     id: 'panel6',
    //     question: '',
    //     answer: ''
    // },
    // {
    //     id: 'panel1',
    //     question: 'Lorem Imsum...',
    //     answer: 'Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... '
    // },
    // {
    //     id: 'panel2',
    //     question: 'Lorem Imsum...',
    //     answer: 'Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... '
    // },
    // {
    //     id: 'panel3',
    //     question: 'Lorem Imsum...',
    //     answer: 'Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... '
    // },
    // {
    //     id: 'panel4',
    //     question: 'Lorem Imsum...',
    //     answer: 'Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... '
    // },
    // {
    //     id: 'panel5',
    //     question: 'Lorem Imsum...',
    //     answer: 'Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... '
    // },
    // {
    //     id: 'panel6',
    //     question: 'Lorem Imsum...',
    //     answer: 'Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... Lorem Ipsum... '
    // }
];

const faqContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.background
};

const containerStyle: React.CSSProperties = {
    backgroundColor: COLORS.background,
    paddingTop: '60px',
    paddingBottom: '60px',
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto'
};

const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 600,
    textAlign: 'center',
    color: COLORS.primary,
    marginBottom: '16px',
    fontFamily: 'var(--font-body)',
};

const dividerStyle: React.CSSProperties = {
    width: '80px',
    height: '3px',
    backgroundColor: COLORS.primary,
    margin: '0 auto 48px auto',
    borderRadius: '2px'
};

const faqItemStyle: React.CSSProperties = {
    borderBottom: `1px solid rgba(0, 0, 0, 0.1)`,
    marginBottom: '0',
    width: '100%',
    maxWidth: '600px',
};

const questionButtonStyle: React.CSSProperties = {
    width: '100%',
    padding: '24px 0',
    backgroundColor: 'transparent',
    border: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 500,
    color: COLORS.primary,
    textAlign: 'left',
    fontFamily: 'var(--font-body)',
    outline: 'none'
};

const iconStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: `2px solid ${COLORS.primary}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: COLORS.primary,
    flexShrink: 0,
    marginLeft: '16px'
};

const answerStyle: React.CSSProperties = {
    padding: '0 0 24px 0',
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
    fontFamily: 'var(--font-body)'
};

const faqItemsContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: '0'
};

const mobileStyles = `
  @media (max-width: 768px) {
    .faq-container {
      padding-left: 16px !important;
      padding-right: 16px !important;
      padding-top: 40px !important;
      padding-bottom: 40px !important;
    }
    
    .faq-title {
      font-size: 32px !important;
      margin-bottom: 12px !important;
    }
    
    .faq-question {
      font-size: 16px !important;
      padding: 20px 0 !important;
    }
    
    .faq-answer {
      font-size: 14px !important;
      padding-bottom: 20px !important;
    }
    
    .faq-item {
      max-width: 100% !important;
    }
    
    .faq-icon {
      width: 20px !important;
      height: 20px !important;
      font-size: 14px !important;
    }
  }
`;

export const FAQ: React.FC = () => {
    const [expandedItem, setExpandedItem] = useState<string>('panel1');

    const toggleItem = (itemId: string): void => {
        setExpandedItem(expandedItem === itemId ? '' : itemId);
    };

    return (
        <div className="faqContainer" style={faqContainerStyle}>
            <style>{mobileStyles}</style>
            <div className="faq-container" style={containerStyle}>
                <h2 className="faq-title" style={titleStyle}>FAQ</h2>
                <div style={dividerStyle} />

                <div className="faq-items" style={faqItemsContainerStyle}>
                    {faqData.map((item) => {
                        const isExpanded = expandedItem === item.id;

                        return (
                            <div key={item.id} className="faq-item" style={faqItemStyle}>
                                <button
                                    className="faq-question"
                                    style={questionButtonStyle}
                                    onClick={() => toggleItem(item.id)}
                                    aria-expanded={isExpanded}
                                    aria-controls={`answer-${item.id}`}
                                >
                                    <span>{item.question}</span>
                                    <div className="faq-icon" style={iconStyle}>
                                        {isExpanded ? '−' : '+'}
                                    </div>
                                </button>

                                {isExpanded && (
                                    <div
                                        id={`answer-${item.id}`}
                                        className="faq-answer"
                                        style={answerStyle}
                                    >
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};