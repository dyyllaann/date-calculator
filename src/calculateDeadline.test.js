import calculateDeadline from "./calculateDeadline";
import moment from "moment";

test("returns unmodified date when options are false", () => {
  const date = new Date(2023, 7, 12);
  const skipWeekends = false;
  const skipHolidays = false;
  const result = calculateDeadline(date, 0, skipWeekends, skipHolidays); // call foo
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns unmodified date when skipWeekends is true", () => {
  const date = new Date(2023, 7, 12);
  const skipWeekends = true;
  const skipHolidays = false;
  const result = calculateDeadline(date, 0, skipWeekends, skipHolidays); // call foo
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns unmodified date when skipHolidays is true", () => {
  const date = new Date(2023, 7, 12);
  const skipWeekends = false;
  const skipHolidays = true;
  const result = calculateDeadline(date, 0, skipWeekends, skipHolidays); // call foo
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns unmodified date when options are true", () => {
  const date = new Date(2023, 7, 12);
  const skipWeekends = true;
  const skipHolidays = true;
  const result = calculateDeadline(date, 0, skipWeekends, skipHolidays); // call foo
	const expected = moment(date);
  expect(result).toEqual(expected);
});