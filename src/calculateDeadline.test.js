import calculateDeadline from "./calculateDeadline";
import moment from "moment";

test("returns unmodified date when options are false", () => {
  const date = new Date(2023, 7, 12);
  const skipWeekends = false;
  const skipHolidays = false;
  const result = calculateDeadline(date, 0, skipWeekends, skipHolidays);
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns unmodified date when skipWeekends is true", () => {
  const date = new Date(2023, 7, 12);
  const skipWeekends = true;
  const skipHolidays = false;
  const result = calculateDeadline(date, 0, skipWeekends, skipHolidays);
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns unmodified date when skipHolidays is true", () => {
  const date = new Date(2023, 7, 12);
  const skipWeekends = false;
  const skipHolidays = true;
  const result = calculateDeadline(date, 0, skipWeekends, skipHolidays);
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns unmodified date when options are true", () => {
  const date = new Date(2023, 7, 12);
  const skipWeekends = true;
  const skipHolidays = true;
  const result = calculateDeadline(date, 0, skipWeekends, skipHolidays);
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns date + 1 day when options are false", () => {
  const date = new Date(2023, 7, 12);
  const skipWeekends = false;
  const skipHolidays = false;
  const result = calculateDeadline(date, 1, skipWeekends, skipHolidays);
  const expected = moment(date).add(1, "days");
  expect(result).toEqual(expected);
});

test("returns date + 4 day when skipWeekends is true", () => {
  const date = new Date(2023, 5, 30);
  const skipWeekends = true;
  const skipHolidays = false;
  const result = calculateDeadline(date, 2, skipWeekends, skipHolidays);
  const expected = moment(date).add(4, "days");
  expect(result).toEqual(expected);
});

test("returns date + 2 day when skipHolidays is true", () => {
  const date = new Date(2023, 11, 24);
  const skipWeekends = false;
  const skipHolidays = true;
  const result = calculateDeadline(date, 1, skipWeekends, skipHolidays);
  const expected = moment(date).add(2, "days");
  expect(result).toEqual(expected);
});

test("returns date + 5 days when options are true", () => {
  const date = new Date(2023, 0, 12);
  const skipWeekends = true;
  const skipHolidays = true;
  const result = calculateDeadline(date, 2, skipWeekends, skipHolidays);
  const expected = moment(date).add(5, "days");
  expect(result).toEqual(expected);
});