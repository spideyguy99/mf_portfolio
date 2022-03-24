import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Ultteam from "../../media/ultTeam.JPG";
import Quadline from "../../media/quadLine.JPG";
import Paintball from "../../media/paintball.JPG";
import Hiking from '../../media/hiking.jpg';
import Mypc from '../../media/myPC.jpg';

export default function ActivAccord(){
    return(
        <div>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>
                        <h4 className={"activityHeader"}>PC Enthusiast</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={Mypc} className={"activityImg"} alt={"My latest computer build."}/>
                    <p>Pretty much where all my money goes these day. This is my latest build as of 2021.</p>
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
                        <p>One of the only things that actually keeps me active. This is me near the base of Devil's Tower in Wyoming.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>

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
                        <p>Club Vice President (circa 2018-2020)</p>
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
                    <p>Percussion: Bass Line & Quads (circa 2015-2017)</p>
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
                    <p>Just a fun hobby I enjoy... maybe a little too much.</p>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
