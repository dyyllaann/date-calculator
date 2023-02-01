import React from "react";
import "./App.css";
import moment from "moment";
import holidays from "./holidays.json";

/* MUI IMPORTS */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme } from "@mui/material/styles";
import { Switch, Typography } from "@mui/material";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function ToDate() {
	const [startDate, setStartDate] = React.useState(null);
	const [days, setDays] = React.useState(null);
	const [result, setResult] = React.useState(null);
	const [skipWeekends, setSkipWeekends] = React.useState(false);
	const [skipHolidays, setSkipHolidays] = React.useState(false);

	const handleStartDateChange = (newValue) => {
		setStartDate(newValue);
	};

	const clickHandler = () => {
		let date = calculateDeadline(startDate, days);
		const formatted = moment(date).format("dddd, MMMM Do YYYY");
		setResult(formatted);
	};

function calculateDeadline(date, dayNum) {
	let endDate = moment(date);

	function dayAdd() {
		endDate.add(1, "Days");
		dayNum -= 1;
	}

	function saturdayCheck() {
		if (endDate.weekday() === 6) {
			dayNum += 1;
		}
	}

	function sundayCheck() {
		if (endDate.weekday() === 0) {
			dayNum += 1;
		}
	}

	function holidayCheck() {
		if (Object.values(holidays[0][endDate.year()]).includes(endDate.dayOfYear())) {
			dayNum += 1;
			dayAdd();
		}
	}

	for (var i in { dayNum }) {
		while (dayNum > 0) {
			dayAdd();
			if (skipWeekends) {
				saturdayCheck();
				sundayCheck();
			}
			if (skipHolidays) {
				holidayCheck();
			}
		}
	}
	return endDate;
}

  return (
		<section className="flex-column">
			<div className="input-container">
				<span className="section-title">Enter start date</span>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<DatePicker
						className="input-container--input"
						label="Date"
						value={startDate || null}
						onChange={handleStartDateChange}
						renderInput={(params) => <TextField {...params} sx={{ mt: 3.75 }} />}
					/>
				</LocalizationProvider>
			</div>
			<div className="input-container input-container--days-input">
				<span className="section-title">Enter number of days</span>
				<TextField
					sx={{ mt: 3.75 }}
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
						onChange={() => setSkipWeekends(!skipWeekends)}
					/>
					<Typography color="text.primary">Skip weekends</Typography>
				</div>
				<div className="options-container--option">
					<Switch 
						checked={skipHolidays}
						onChange={() => setSkipHolidays(!skipHolidays)}
					/>
					<Typography color="text.primary" justifyContent="center">
						Skip holidays
					</Typography>
				</div>
				<div className="options-container--actions">
					<Button className="optionsButton">Settings</Button>
					<Button className="optionsButton" onClick={clickHandler}>OK</Button>
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