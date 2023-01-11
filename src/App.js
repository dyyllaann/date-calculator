import React from 'react';
import modeButton from './mode-button.png';
import './App.css';
import moment from "moment";
import ToDate from './ToDate';
import ToDays from './ToDays';

/* MUI IMPORTS */
// import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import DeleteIcon from "@mui/icons-material/Delete";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
  return (
		<ThemeProvider theme={darkTheme}>
			<div className="App">
				<section className="appHeader">
						<img src={modeButton} className="logoButton" alt="Change mode." />
				</section>
				<ToDate />
				{/* <ToDays /> */}
			</div>
		</ThemeProvider>
	);
}

export default App;
