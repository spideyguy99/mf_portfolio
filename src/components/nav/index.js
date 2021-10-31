import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import Resume from '../home';
import Projects from '../projects';
import About from '../about';


import {styled} from "@mui/material/styles";




const Root = styled('div')(({ theme }) => ({
//Global
    ".topNav":{
        top:0,
        backgroundColor:'#121212',
        width:'100%',
        padding:5,
        position:"fixed",
        zIndex:5,
        height:40,
        paddingTop:15,
        fontSize:"large",
        fontWeight:"bold"
    },
    ".link":{
        color:'white',
        textDecoration: "none"
    },
    ".list":{
        listStyle:"none",
    },
    ".listItem":{
        display:'inline',
        marginRight:25
    },
    ".menu":{
        color:"white"
    },
//Phones and small tablets
    [theme.breakpoints.down('md')]: {
        ".menu":{
            display:"inline"
        },
        ".list":{
            display:"none"
        }
    },
//Tablets
    [theme.breakpoints.up('md')]: {
        ".menu":{
            display:"none"
        },
        ".list":{
            display:"inline"
        }
    },
//Desktops
    [theme.breakpoints.up('lg')]: {
        ".menu":{
            display:"none"
        },
        ".list":{
            display:"inline",
        }
    },
}));

export default function Navigation(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Root>
            <Router>
                <nav className={"topNav"}>
                    <ul className={"list"}>
                        <li className={"listItem"}>
                            <Link className={"link"} to={"/"}>Resume</Link>
                        </li>
                        <li className={"listItem"}>
                            <Link className={"link"} to={"/projects"}>Projects</Link>
                        </li>
                        <li className={"listItem"}>
                            <Link className={"link"} to={"/about"}>About</Link>
                        </li>
                    </ul>
                    <MenuIcon
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        fontSize={"large"}
                        className={"menu"}
                    />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link className={"link"} to={"/"}>Resume</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link className={"link"} to={"/projects"}>Projects</Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>About Me</MenuItem>
                    </Menu>
                </nav>


                <Switch>
                    <Route path={"/"} exact component={Resume}/>
                    <Route path={"/projects"} component={Projects}/>
                    <Route path={"/about"} component={About}/>
                </Switch>
            </Router>
        </Root>
    )
}
