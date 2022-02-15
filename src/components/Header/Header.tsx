import { Button, Toolbar } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Menu } from '@material-ui/icons';
import React from 'react';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6" >
                    Tasks
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default Header;