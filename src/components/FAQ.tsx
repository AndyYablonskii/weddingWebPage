import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQStyle.css';

export default function FAQ() {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div style={{ backgroundColor: '#f8f4ed', paddingTop: '42px', paddingBottom: '42px', paddingLeft: '47px', paddingRight: '40px' }}>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                style={{ backgroundColor: '#f8f4ed' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography style={
                        {
                            backgroundColor: 'rgba(248, 244, 237, 1)',
                            color: 'rgba(74, 90, 59, 1)',
                        }
                    } component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        General settings
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        {/* text */}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{
                    backgroundColor: 'rgba(248, 244, 237, 1)',
                    color: 'rgba(74, 90, 59, 1)',
                }}>
                    <Typography style={
                        {
                        color:'    rgba(138, 146, 131, 1)'
                        }
                    }>
                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                        Aliquam eget maximus est, id dignissim quam.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
                style={{ backgroundColor: '#f8f4ed' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography style={{color:'rgba(74, 90, 59, 1)'}} component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        Users
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        {/* text */}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={
                        {
                        color:'    rgba(138, 146, 131, 1)'
                        }
                    }>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                        laoreet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
                style={{ backgroundColor: '#f8f4ed' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography style={{color:'rgba(74, 90, 59, 1)'}}  component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        Advanced settings
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        {/* text */}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={
                        {
                        color:'    rgba(138, 146, 131, 1)'
                        }
                    }>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')}
                style={{ backgroundColor: '#f8f4ed' }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography style={{color:'rgba(74, 90, 59, 1)'}}  component="span" sx={{ width: '33%', flexShrink: 0 }}>
                        Personal data
                    </Typography >
                </AccordionSummary>
                <AccordionDetails>
                    <Typography style={{
                        color:'rgba(138, 146, 131, 1)'
                    }
                    }>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
         
            </div>
        
    );
}