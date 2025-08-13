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
        question: 'Is there a free trial available?',
        answer: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
    {
        id: 'panel2',
        question: 'Can I change my plan later?',
        answer: 'Of course! Our service was built with your business in mind. As your business grows, you can upgrade your plan at any time.'
    },
    {
        id: 'panel3',
        question: 'What is your cancellation policy?',
        answer: 'We understand that things change. You can cancel your plan at any time and we\'ll refund you the difference already paid.'
    },
    {
        id: 'panel4',
        question: 'Can other info be added to an invoice?',
        answer: 'Yes, you can add custom fields to your invoices including tax information, purchase order numbers, and other business details.'
    },
    {
        id: 'panel5',
        question: 'How does billing work?',
        answer: 'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.'
    },
    {
        id: 'panel6',
        question: 'How do I change my account email?',
        answer: 'You can change your account email from your profile settings. Go to Account Settings > Profile > Email Address to update it.'
    }
];

const containerStyle: React.CSSProperties = {
    backgroundColor: COLORS.background,
    paddingTop: '60px',
    paddingBottom: '60px',
    paddingLeft: '20px',
    paddingRight: '20px',
    maxWidth: '800px',
    margin: '0 auto'
};

const titleStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 600,
    textAlign: 'center',
    color: COLORS.primary,
    marginBottom: '16px',
    fontFamily: 'var(--font-body)'
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
    marginBottom: '0'
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

const mobileStyles = `
  @media (max-width: 768px) {
    .faq-container {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }
    
    .faq-title {
      font-size: 32px !important;
    }
    
    .faq-question {
      font-size: 16px !important;
      padding: 20px 0 !important;
    }
    
    .faq-answer {
      font-size: 14px !important;
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
        <>
            <style>{mobileStyles}</style>
            <div className="faq-container" style={containerStyle}>
                <h2 className="faq-title" style={titleStyle}>FAQ</h2>
                <div style={dividerStyle} />

                <div>
                    {faqData.map((item) => {
                        const isExpanded = expandedItem === item.id;

                        return (
                            <div key={item.id} style={faqItemStyle}>
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
        </>
    );
};