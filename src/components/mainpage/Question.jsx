import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import './style.css'
import Image from '../../images/Union.png'

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{
            display: "flex",
            flexDirection: { xs: 'column', sm: 'row' },
            width: "97%",
            bgcolor: "#E8EEE7",
            m: "32px auto",
            borderRadius: "1rem"
        }}>
            <Box sx={{
                width: { xs: '100%', sm: '50%' },
                marginRight: { sm: '1rem' },
            }}>
                <Box sx={{
                    pl: "5rem",
                    py: "3.5rem",
                }}>
                    <Typography variant='h6' sx={{
                        fontFamily: "Covered By Your Grace",
                        fontSize: "32px",
                        fontWeight: 400,
                        lineHeight: '35.2px',
                        letterSpacing: '-0.02em',
                        textAlign: 'left',

                    }}>
                        What's on your mind
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontFamily: "Manrope",
                        fontSize: "60px",
                        fontWeight: 600,
                        lineHeight: '66px',
                        letterSpacing: '-1%',
                        textAlign: 'left',
                    }}>
                        Ask Questions
                    </Typography>
                </Box>
                <Box>
                    <img src={Image} alt="Union" width={"476.49px"} height={"300.61px"} style={{
                        width: "491px",
                        height: "300.61px",
                        top: "274px",
                        gap: "0px",
                        opacity: "0.4px"
                    }} />
                </Box>
            </Box>
            <div style={{ width: '40%', padding: "5rem 1rem 2rem" }}> {/* Ensure the accordion takes full width */}
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{
                    backgroundColor: "#E8EEE7",
                    border: "none",
                    borderBottom: "1px solid #D7D7D7",
                    p: "1rem 0rem",
                    mb: "1rem",

                }}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel1' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            Do you offer freelancers?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{
                    backgroundColor: "#E8EEE7",
                    border: "none",
                    borderBottom: "1px solid #D7D7D7",
                    mb: "1rem",
                    p: "1rem 0rem"
                }}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel2' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>What’s the guarantee that I will be satisfied
                            with the hired talent?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{
                    backgroundColor: "#E8EEE7",
                    border: "none",
                    borderBottom: "1px solid #D7D7D7",
                    mb: "1rem",
                    p: "1rem 0rem"
                }}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel3' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>Can I hire multiple talents at once?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{
                    backgroundColor: "#E8EEE7",
                    border: "none",
                    borderBottom: "1px solid #D7D7D7",
                    mb: "1rem",
                    p: "1rem 0rem"
                }}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel4' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>Why should I not go to an agency directly?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} sx={{
                    backgroundColor: "#E8EEE7",
                    border: "none",
                    borderBottom: "1px solid #D7D7D7",
                    mb: "1rem",
                    p: "1rem 0rem"
                }}>
                    <AccordionSummary
                        expandIcon={expanded === 'panel5' ? <RemoveIcon /> : <AddIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>Who can help me pick a right skillset
                            and duration for me?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Box>
    );
}
