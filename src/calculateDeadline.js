import moment from "moment";
import holidays from "./holidays.json";

export default function calculateDeadline(date, dayNum, skipWeekends, skipHolidays) {
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
		if (
			Object.values(holidays[0][endDate.year()]).includes(endDate.dayOfYear())
		) {
			dayNum += 1;
			dayAdd();
		}
	}

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
	
	return endDate;
}