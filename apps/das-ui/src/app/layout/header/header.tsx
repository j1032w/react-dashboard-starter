import GitHubIcon from '@mui/icons-material/GitHub';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {AppBar, Badge, IconButton, Toolbar, Tooltip, Typography} from '@mui/material';
import * as React from 'react';
import {FC} from 'react';

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
          sx={{flexGrow: 1}}
        >
          React Dashboard Starter
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon/>
          </Badge>
        </IconButton>

        <Tooltip title="Go to GitHub project page">
          <IconButton color="inherit" href="https://github.com/j1032w/react-dashboard-starter"
                      target="_blank" rel="noopener noreferrer">
            <GitHubIcon></GitHubIcon>
          </IconButton>
        </Tooltip>


      </Toolbar>
    </AppBar>
  );
};
