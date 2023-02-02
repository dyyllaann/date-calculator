import React from "react";
import modeButton from "./mode-button.png";
import "./App.css";
import ToDate from "./ToDate";
import ToDays from "./ToDays";

/* MUI IMPORTS */
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	const [view, setView] = React.useState("toDate");

	const clickHandler = () => {
		if (view === "toDate") {
			setView("toDays");
		} else {
			setView("toDate");
		}
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<div className="App">
				<section className="App-header">
					<img src={modeButton} className="logoButton" alt="Change mode." onClick={clickHandler} />
				</section>
				{view === "toDate" ? (
					<ToDate setView={setView} />
				) : (
					<ToDays setView={setView} />
				)}
			</div>
		</ThemeProvider>
	);
}

export default App;
