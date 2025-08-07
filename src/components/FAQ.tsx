import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
        question: 'General settings',
        answer: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.'
    },
    {
        id: 'panel2',
        question: 'Users',
        answer: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
        id: 'panel3',
        question: 'Advanced settings',
        answer: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.'
    },
    {
        id: 'panel4',
        question: 'Personal data',
        answer: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.'
    }
];

const containerStyle: React.CSSProperties = {
    backgroundColor: COLORS.background,
    paddingTop: '42px',
    paddingBottom: '42px',
    paddingLeft: '47px',
    paddingRight: '40px'
};

const accordionStyle: React.CSSProperties = {
    backgroundColor: COLORS.background
};

const summaryStyle: React.CSSProperties = {
    backgroundColor: COLORS.background,
    color: COLORS.primary,
};

const detailsStyle: React.CSSProperties = {
    backgroundColor: COLORS.background,
    color: COLORS.primary,
};

const answerStyle: React.CSSProperties = {
    color: COLORS.text
};

export const FAQ: React.FC = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (
        event: React.SyntheticEvent,
        isExpanded: boolean
    ): void => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={containerStyle}>
            {faqData.map((item) => (
                <Accordion
                    key={item.id}
                    expanded={expanded === item.id}
                    onChange={handleChange(item.id)}
                    style={accordionStyle}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${item.id}-content`}
                        id={`${item.id}-header`}
                    >
                        <Typography component="span" style={summaryStyle} sx={{ width: '33%', flexShrink: 0 }}>
                            {item.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={detailsStyle}>
                        <Typography style={answerStyle}>
                            {item.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default FAQ;