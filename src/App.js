import React from "react";
import modeButton from "./mode-button.png";
import "./App.css";
import ToDate from "./ToDate";
import ToDays from "./ToDays";

/* MUI IMPORTS */
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
					background: {
						default: prefersDarkMode ? "#302d38" : "#fafafa",
					},
					text: {
						primary: prefersDarkMode ? "#e6e1e5" : "#49454f",
					},
				},
			}),
		[prefersDarkMode]
	);
	
	const [view, setView] = React.useState("toDate");
	// const [theme, setTheme] = React.useState(lightTheme);

	const clickHandler = () => {
		if (view === "toDate") {
			setView("toDays");
		} else {
			setView("toDate");
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ 
				backgroundColor: "background.default",
				color: "text.primary", 
				}} className="App">
				<section className="App-header">
					<img src={modeButton} className="logoButton" alt="Change mode." onClick={clickHandler} />
				</section>
				{view === "toDate" ? (
					<ToDate setView={setView} theme={theme}/>
				) : (
					<ToDays setView={setView} />
				)}
			</Box>
		</ThemeProvider>
	);
}

export default App;
