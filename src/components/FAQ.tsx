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
        question: 'Яке дрес-код на весілля?',
        answer: 'Просимо дотримуватися елегантного стилю одягу. Кольорова гамма нашого весілля: зелені, бежеві та світлі відтінки. Уникайте білого кольору, будь ласка.'
    },
    {
        id: 'panel2',
        question: 'Чи потрібно підтверджувати свою присутність?',
        answer: 'Так, будь ласка, підтвердіть свою присутність до 1 вересня 2025 року. Це допоможе нам краще організувати захід та підготувати достатньо місць для всіх гостей.'
    },
    {
        id: 'panel3',
        question: 'Де відбудеться весілля?',
        answer: 'І церемонія вінчання, і бенкет відбудуться в одному місці - Дім молитви с. Хутори. Це зручно для всіх гостей, адже не потрібно переїжджати з одного місця в інше.'
    },
    {
        id: 'panel4',
        question: 'О котрій годині почнеться захід?',
        answer: 'Церемонія вінчання розпочнеться о 14:00. Рекомендуємо прибути за 15-20 хвилин до початку. Бенкет триватиме з 14:00 до 20:00.'
    },
    {
        id: 'panel5',
        question: 'Чи будуть діти на весіллі?',
        answer: 'Так, діти вітаються на нашому весіллі! Ми будемо раді бачити всю вашу родину. Просимо лише врахувати це при підтвердженні присутності.'
    },
    {
        id: 'panel6',
        question: 'Що подарувати молодятам?',
        answer: 'Найкращий подарунок для нас - ваша присутність на цьому особливому дні. Якщо ви хочете зробити подарунок, будемо вдячні за будь-який внесок у наше спільне майбутне.'
    }
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