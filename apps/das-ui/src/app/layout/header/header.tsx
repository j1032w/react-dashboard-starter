import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { FC } from 'react';
import './header.scss';

export const AppHeader: FC = () => {
  return (
    <AppBar position="static" className="app-header">


      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >

        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          React Dashboard Starter
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
