import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SkillsAccord(){
    return(
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <h4 className={"skillheader"}>Programming Languages</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>JavaScript</li>
                            <ul>
                                <li>Vue</li>
                                <li>JQuery</li>
                            </ul>
                            <li>React JS</li>
                            <ul>
                                <li>Material UI</li>
                                <li>Bootstrap</li>
                                <li>Redux</li>
                                <li>Firebase</li>
                            </ul>
                            <li>React Native</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <ul>
                                <li>SASS</li>
                                <li>Less</li>
                            </ul>
                            <li>Java</li>
                            <li>C++</li>
                            <li>Visual Basic</li>
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
                        <h4>Software</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>Microsoft Office Suite</li>
                            <ul>
                                <li>Word</li>
                                <li>Powerpoint</li>
                                <li>Excel</li>
                            </ul>
                            <li>Adobe Suite</li>
                            <ul>
                                <li>Illustrator</li>
                                <li>Photoshop</li>
                                <li>Premiere</li>
                            </ul>
                            <li>GitHub</li>
                            <li>Git</li>
                            <li>Google Cloud Platform</li>
                            <li>Google Firebase</li>
                            <li>Netlify</li>
                            <li>Node</li>
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
                        <h4>Operating Systems</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>Microsoft Windows</li>
                        <li>Apple MacOS and iOS</li>
                        <li>Linux</li>
                        <ul>
                            <li>Ubuntu</li>
                            <li>Kali</li>
                        </ul>
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
                        <h4>IDE's</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>WebStorm</li>
                        <li>Codepen</li>
                        <li>Brackets</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
