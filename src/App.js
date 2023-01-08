import React from 'react';
import modeButton from './mode-button.png';
import './App.css';
import moment from "moment";
import ToDate from './ToDate';

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
				<header className="App-header">
					<img src={modeButton} className="logoButton" alt="Change mode." />
				</header>
				{/* <div className="calendarInput">
					<h1>Enter start date</h1>
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<DatePicker
							className="datePicker"
							label="Date"
							value={null}
							renderInput={(params) => <TextField size="small" {...params} />}
						/>
					</LocalizationProvider>
				</div>
				<div className="calendarInput">
					<h1>Enter end date</h1>
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<DatePicker
							className="datePicker"
							label="Date"
							value={null}
							renderInput={(params) => <TextField size="small" {...params} />}
						/>
					</LocalizationProvider>
				</div> */}
				<ToDate />
			</div>
		</ThemeProvider>
	);
}

export default App;
