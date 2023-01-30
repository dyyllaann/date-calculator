import React from "react";
import modeButton from "./mode-button.png";
import "./App.css";
import moment from "moment";

/* MUI IMPORTS */
// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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

function ToDays() {
	return (
		<section className="flex-column">
			<div className="input-container">
				<span className="section-title">Enter start date</span>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DatePicker
						className="input-container--input"
						label="Date"
						value={null}
						renderInput={(params) => (
							<TextField {...params} sx={{ mt: 3.75 }} />
						)}
					/>
				</LocalizationProvider>
			</div>
			<div className="input-container input-container--end-date-input">
				<span className="section-title">Enter end date</span>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DatePicker
						className="input-container--input"
						label="Date"
						value={null}
						renderInput={(params) => (
							<TextField {...params} sx={{ mt: 3.75 }} />
						)}
					/>
				</LocalizationProvider>
			</div>
			<div className="options-container">
				<div className="options-container--option">
					<Switch />
					<Typography color="text.primary">Skip weekends</Typography>
				</div>
				<div className="options-container--option">
					<Switch />
					<Typography color="text.primary" justifyContent="center">
						Skip holidays
					</Typography>
				</div>
				<div className="options-container--actions">
					<Button className="optionsButton">Settings</Button>
					<Button className="optionsButton">OK</Button>
				</div>
			</div>
			<div className="output-container">
				<span className="section-title output-container--output">
					47 Days
				</span>
			</div>
		</section>
	);
}

export default ToDays;
