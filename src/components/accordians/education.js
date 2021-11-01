import React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function EduAccord(){
    return(
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <h3 className={"headername"}>Indiana University Purdue University Indianapolis - IUPUI</h3>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <h4>Purdue School of Engineering and Technology </h4>
                        <p>Bachelor of Science Computer and Information Technology</p>
                        <p>Concentration: Web/Application Development</p>
                        <p>Attended: August 2018 - present</p>
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
                        <h3 className={"headername"}>Indiana University Kokomo</h3>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <h4>Indiana University School of Sciences</h4>
                        <p>School of Science New Media</p>
                        <p>Attended: August 2017 - May 2018</p>
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
                        <h3 className={"headername"}>Fishers High School</h3>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <p>Core 40</p>
                    <p>Attended: August 2013 - May 2017</p>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
