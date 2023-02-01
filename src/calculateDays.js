import moment from "moment";
import holidays from "./holidays.json";

export default function calculateDeadline(startDate, endDate, skipWeekends, skipHolidays) {
	let daysBetween = 0;
	daysBetween = endDate.diff(startDate, "days");
	return daysBetween;
}