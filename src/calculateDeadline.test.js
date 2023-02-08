import calculateDeadline from "./calculateDeadline";
import moment from "moment";

test("returns unmodified date when options are false", () => {
  const date = new Date(2023, 7, 12);
  const options = { skipWeekends: false, skipHolidays: false, nextBusinessDay: false };
  const result = calculateDeadline(date, 0, options);
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns unmodified date when skipWeekends is true", () => {
  const date = new Date(2023, 7, 12);
  const options = { skipWeekends: true, skipHolidays: false, nextBusinessDay: false };
  const result = calculateDeadline(date, 0, options);
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns unmodified date when skipHolidays is true", () => {
  const date = new Date(2023, 7, 12);
  const options = { skipWeekends: false, skipHolidays: true, nextBusinessDay: false };
  const result = calculateDeadline(date, 0, options);
	const expected = moment(date);
  expect(result).toEqual(expected);
});

test("returns date + 2 when start date is Saturday, add amount is 0, and options are true", () => {
  const date = new Date(2023, 7, 12);
  const options = { skipWeekends: true, skipHolidays: true, nextBusinessDay: true };
  const result = calculateDeadline(date, 0, options);
	const expected = moment(date).add(2, "days");
  expect(result).toEqual(expected);
});

test("returns date + 1 day when options are false", () => {
  const date = new Date(2023, 7, 12);
  const options = { skipWeekends: false, skipHolidays: false, nextBusinessDay: false };
  const result = calculateDeadline(date, 1, options);
  const expected = moment(date).add(1, "Days");
  expect(result).toEqual(expected);
});

test("returns date + 4 day when skipWeekends is true", () => {
  const date = new Date(2023, 5, 30);
  const options = { skipWeekends: true, skipHolidays: false, nextBusinessDay: false };
  const result = calculateDeadline(date, 2, options);
  const expected = moment(date).add(4, "days");
  expect(result).toEqual(expected);
});

test("returns date + 2 day when skipHolidays is true", () => {
  const date = new Date(2023, 11, 24);
  const options = { skipWeekends: false, skipHolidays: true, nextBusinessDay: false };
  const result = calculateDeadline(date, 1, options);
  const expected = moment(date).add(2, "days");
  expect(result).toEqual(expected);
});

test("returns date + 5 days when options are true", () => {
  const date = new Date(2023, 0, 12);
  const options = { skipWeekends: true, skipHolidays: true, nextBusinessDay: false };
  const result = calculateDeadline(date, 2, options);
  const expected = moment(date).add(5, "days");
  expect(result).toEqual(expected);
});

test("returns 01-17-2023 when nextBusinessDay is true", () => {
  const date = new Date(2023, 0, 15);
  const options = { skipWeekends: false, skipHolidays: false, nextBusinessDay: true };
  const result = calculateDeadline(date, 1, options);
  const expected = moment(date).add(2, "days");
  expect(result).toEqual(expected);
});

test("returns 01-17-2023 when nextBusinessDay is true", () => {
  const date = new Date(2023, 0, 14);
  const options = { skipWeekends: false, skipHolidays: false, nextBusinessDay: true };
  const result = calculateDeadline(date, 1, options);
  const expected = moment(date).add(3, "days");
  expect(result).toEqual(expected);
});