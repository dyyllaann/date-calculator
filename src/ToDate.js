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

function ToDate(props) {
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
				<Typography color="text.primary" sx={{ fontSize: "2em" }}>
					Enter start date
				</Typography>
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
				<Typography color="text.primary" sx={{ fontSize: "2em" }}>
					Enter number of days
				</Typography>
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
						checked={options.skipWeekends}
						onChange={() =>
							setOptions({ ...options, skipWeekends: !options.skipWeekends })
						}
					/>
					<Typography color="text.primary">Skip weekends</Typography>
				</div>
				<div className="options-container--option">
					<Switch
						checked={options.skipHolidays}
						onChange={() =>
							setOptions({ ...options, skipHolidays: !options.skipHolidays })
						}
					/>
					<Typography color="text.primary">Skip holidays</Typography>
				</div>
				<div className="options-container--option">
					<Switch
						checked={options.nextBusinessDay}
						onChange={() =>
							setOptions({
								...options,
								nextBusinessDay: !options.nextBusinessDay,
							})
						}
					/>
					<Typography color="text.primary">Next Business Day</Typography>
				</div>
				<div className="options-container--actions">
					<Button className="optionsButton">Settings</Button>
					<Button className="optionsButton" onClick={optionsHandler}>
						OK
					</Button>
				</div>
			</div>
			<div className="output-container">
				<Typography
					sx={{
						fontSize: "150%",
						margin: "auto 0",
						flex: 1,
						textAlign: "center",
					}}
					color="text.primary"
				>
					{result}
				</Typography>
			</div>
		</section>
	);
}

export default ToDate;