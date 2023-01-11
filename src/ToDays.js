import React from "react";
import modeButton from "./mode-button.png";
import "./App.css";
import moment from "moment";

/* MUI IMPORTS */
// import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import DeleteIcon from "@mui/icons-material/Delete";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Typography } from "@mui/material";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function ToDate() {
  return (
		<section>
			<div className="inputContainer">
				<div className="inputHeader">
					<h1>Enter start date</h1>
				</div>
				<div className="inputInput">
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<DatePicker
							className="input"
							label="Date"
							value={null}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>
			</div>
			<div className="inputContainer">
				<div className="inputHeader">
					<h1>Enter end date</h1>
				</div>
				<div className="inputInput">
					<LocalizationProvider dateAdapter={AdapterMoment}>
						<DatePicker
							className="input"
							label="Date"
							value={null}
							renderInput={(params) => <TextField {...params} />}
						/>
					</LocalizationProvider>
				</div>
			</div>
			<div className="optionsContainer">
				<div className="optionsWeekend">
					<Switch />
					<Typography color="text.primary">Skip weekends</Typography>
				</div>
				<div className="optionsHoliday">
					<Switch />
					<Typography color="text.primary" justifyContent="center">
						Skip holidays
					</Typography>
				</div>
				<div className="optionsActions">
					<Button className="optionsButton">Settings</Button>
					<Button className="optionsButton">OK</Button>
				</div>
			</div>
			<div className="outputContainer">
				<h1>47 Days</h1>
			</div>
		</section>
	);
}

export default ToDate;