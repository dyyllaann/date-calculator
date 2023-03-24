// create a Settings component that will be used in both ToDays and ToDate to change theme and other settings
//
// src/Settings.js
import React from 'react';
import { Switch, Typography } from '@mui/material';

function Settings() {
  return (
    <div className="options-container">
      <div className="options-container--option">
        <Typography>Dark Mode</Typography>
        <Switch />
      </div>
    </div>
  );
}

export default Settings;
