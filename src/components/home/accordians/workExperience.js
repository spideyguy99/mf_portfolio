import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function WorkAccord(){
    return(
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <h4>IUPUI: School of Engineering and Technology</h4>
                        <h4 style={{fontStyle:"italic"}}>Assistant to the Webmaster</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>January 2020 - December 2020</p>
                        <ul>
                            <li>Developed Engineering and Technology Website using Trello (Kanban) </li>
                            <li>Built website using Cascade CMS</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>
                        <h4>IUPUI: Multidisciplinary Undergraduate Research Institute</h4>
                        <h4 style={{fontStyle:"italic"}}>Researcher / Developer</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <p>May 2019 - August 2019</p>
                        <ul>
                            <li>Researched and Developed a mobile application with React Native</li>
                            <li>Present total research findings at CRL Summer Symposium at IUPUI</li>
                            <li>Developed application using a broken version of Agile in a small group setting</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>
                        <h4>Best Buy - Geek Squad</h4>
                        <h4 style={{fontStyle:"italic"}}>Advanced Repair Agent</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p>October 2020 - Present</p>
                    <ul>
                        <li>Consult clients on various computer, phone, and miscellaneous technology issuesThen troubleshoot multiple solutions for the given technical issue.</li>
                        <li>Perform repairs on Apple products and complete tickets using GSX/AST.</li>
                    </ul>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>
                        <h4>IUPUI: University Information Technology Services</h4>
                        <h4 style={{fontStyle:"italic"}}>Consultant Supervisor</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p>August 2018 - October 2020</p>
                    <ul>
                        <li>Trained and oversaw constultants</li>
                        <li>Assisted with both First and Second Tier IT Support for IUPUI Students</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
