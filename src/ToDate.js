import React from "react";
import "./App.css";
import moment from "moment";
import calculateDeadline from "./calculateDeadline";

/* MUI IMPORTS */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Switch, Typography } from "@mui/material";

function ToDate() {
	const [startDate, setStartDate] = React.useState(null);
	const [days, setDays] = React.useState(null);
	const [result, setResult] = React.useState(null);
	const [options, setOptions] = React.useState({
		skipWeekends: false,
		skipHolidays: false,
		nextBusinessDay: false,
	});

	const startDateHandler = (newValue) => {
		setStartDate(newValue);
	};

	const optionsHandler = () => {
		let date = calculateDeadline(startDate, days, options);
		const formatted = moment(date).format("dddd, MMMM Do YYYY");
		setResult(formatted);
	};

  return (
		<section className="flex-column">
			<div className="input-container">
				<span className="section-title">Enter start date</span>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DatePicker
						className="input-container--input"
						label="Date"
						value={startDate || null}
						onChange={startDateHandler}
						renderInput={(params) => <TextField {...params} sx={{ mt: 2 }} />}
					/>
				</LocalizationProvider>
			</div>
			<div className="input-container input-container--days-input">
				<span className="section-title">Enter number of days</span>
				<TextField
					sx={{ mt: 2 }}
					className="input-container--input"
					id="outlined-number"
					label="Number"
					type="number"
					onChange={(e) => setDays(e.target.value)}
				/>
			</div>
			<div className="options-container">
				<div className="options-container--option">
					<Switch 
						checked={skipWeekends}
						onChange={() => setOptions({ ...options, skipWeekends: !skipWeekends })}
					/>
					<Typography color="text.primary">Skip weekends</Typography>
				</div>
				<div className="options-container--option">
					<Switch 
						checked={skipHolidays}
						onChange={() => setOptions({ ...options, skipHolidays: !skipHolidays })}
					/>
					<Typography color="text.primary">
						Skip holidays
					</Typography>
				</div>
				<div className="options-container--option">
					<Switch 
						checked={nextBusinessDay}
						onChange={() => setOptions({ ...options, nextBusinessDay: !nextBusinessDay })}
					/>
					<Typography color="text.primary">
						Next Business Day
					</Typography>
				</div>
				<div className="options-container--actions">
					<Button className="optionsButton">Settings</Button>
					<Button className="optionsButton" onClick={optionsHandler}>OK</Button>
				</div>
			</div>
			<div className="output-container">
				<span className="section-title output-container--output">
					{result}
				</span>
			</div>
		</section>
	);
}

export default ToDate;