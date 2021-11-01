import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Ultteam from "../media/ultTeam.JPG";
import Quadline from "../media/quadLine.JPG";
import Paintball from "../media/paintball.JPG";
import Hiking from '../media/hiking.jpg';

export default function ActivAccord(){
    return(
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <h4 className={"activityHeader"}>Ultimate Frisbee</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <img src={Ultteam} className={"activityImg"} alt={"IUPUI's ultimate frisbee team."}/>
                        <p>Club Vice President</p>
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
                        <h4 className={"activityHeader"}>Hiking</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <img src={Hiking} className={"activityImg"} alt={"Hiking Devil's tower"}/>
                        <p>One of the only things that actually keeps me active</p>
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
                        <h4 className={"activityHeader"}>Marching Band</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Quadline} className={"activityImg"} alt={"Me and my senior year quad line."}/>
                    <p>Percussion: Bass Line & Quads</p>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>
                        <h4 className={"activityHeader"}>Paintball</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Paintball} className={"activityImg"} alt={"My friends and I playing paintball."}/>
                    <p>Just a fun hobby I enjoy... maybe a little too much</p>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
