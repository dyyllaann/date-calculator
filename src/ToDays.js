import React from "react";
import "./App.css";
import calculcateDays from "./calculateDays";

/* MUI IMPORTS */
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { Switch, Typography } from "@mui/material";

function ToDays() {
	const [startDate, setStartDate] = React.useState(null);
	const [endDate, setEndDate] = React.useState(null);
	const [result, setResult] = React.useState(null);
	// const [skipWeekends, setSkipWeekends] = React.useState(false);
	// const [skipHolidays, setSkipHolidays] = React.useState(false);

	const startDateHandler = (newValue) => {
		setStartDate(newValue);
	};

	const endDateHandler = (newValue) => {
		setEndDate(newValue);
	};

	const optionsHandler = () => {
		let days = calculcateDays(startDate, endDate);
		days === 1 ? setResult(`${days} day`) : setResult(`${days} days`);
	};

	return (
		<section className="flex-column">
			<div className="input-container">
				<Typography color="text.primary" sx={{ fontSize: "2em" }}>
					Enter start date
				</Typography>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					{/* <DatePicker
						className="input-container--input"
						label="Date"
						value={startDate || null}
						onChange={startDateHandler}
						renderInput={(params) => <TextField {...params} sx={{ mt: 2 }} />}
					/> */}
					<MobileDatePicker
						className="input-container--input"
						label="Date"
						value={startDate || null}
						onChange={startDateHandler}
						renderInput={(params) => <TextField {...params} sx={{ mt: 2 }} />}
					/>
				</LocalizationProvider>
			</div>
			<div className="input-container input-container--end-date-input">
				<Typography color="text.primary" sx={{ fontSize: "2em" }}>
					Enter end date
				</Typography>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					{/* <DatePicker
						className="input-container--input"
						label="Date"
						value={endDate || null}
						onChange={endDateHandler}
						renderInput={(params) => <TextField {...params} sx={{ mt: 2 }} />} */}
					<MobileDatePicker
						className="input-container--input"
						label="Date"
						value={endDate || null}
						onChange={endDateHandler}
						renderInput={(params) => <TextField {...params} sx={{ mt: 2 }} />}
					/>
				</LocalizationProvider>
			</div>
			<div className="options-container">
				<div className="options-container--option hidden">
					<Switch />
					<Typography color="text.primary">Skip weekends</Typography>
				</div>
				<div className="options-container--option hidden">
					<Switch />
					<Typography color="text.primary">Skip holidays</Typography>
				</div>
				<div className="options-container--option hidden">
					<Switch />
					<Typography color="text.primary">Next Business Day</Typography>
				</div>
				<div className="options-container--actions">
					{/* <Button className="optionsButton">Settings</Button> */}
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

export default ToDays;
