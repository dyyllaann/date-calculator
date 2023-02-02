export default function calculateDeadline(startDate, endDate) {
	let daysBetween = 0;
	daysBetween = endDate.diff(startDate, "days");
	return daysBetween;
}