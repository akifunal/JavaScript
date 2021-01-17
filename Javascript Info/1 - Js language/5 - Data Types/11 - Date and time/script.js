"use strict";
//* Create a date
//! Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
//! Show it using alert.
let time = new Date(2012, 1, 20, 3, 12);
alert(time);

let time2 = new Date("February 20, 2012 3:12");
console.log(time2);

//* Show a weekday
//! Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
//! For instance:
function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getWeekDay(date)); // should output "TU"

//* European weekday
//! European countries have days of week starting with Monday (number 1), then Tuesday (number 2)
//! and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.
function getLocalDay(date) {
  day = date.getDay();
  let days = ["", "MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  if (day === 0) {
    day = 7;
  }

  return days[day];
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getLocalDay(date));
alert(getLocalDay(date)); // tuesday, should show 2

//* Which day of month was many days ago?
//! Create a function getDateAgo(date, days) to return the day of month days ago from the date.
//! For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
//! Should work reliably for days=365 or more:

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2, 5);
console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

//* Last day of month?
//! Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
//! Parameters:
//!     year – four-digits year, for instance 2012.
//!     month – month, from 0 to 11.
//! For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//* How many seconds have passed today?
//! Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
//! For instance, if now were 10:00 am, and there was no daylight savings shift, then:

getSecondsToday() == 36000; // (3600 * 10)

//! The function should work in any day. That is, it should not have a hard-coded value of “today”.

function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0);
  let test = (now - today) / 1000;
  console.log(Math.round(test));
}

function getSecondsToday2() {
  let now = new Date();
  return (
    now.getHours() * 3600 +
    now.getMinutes() * 60 +
    now.getSeconds() +
    Math.round(now.getMilliseconds() / 1000)
  );
}

getSecondsToday();
console.log(getSecondsToday2());

//* How many seconds till tomorrow?
//! Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
//! For instance, if now is 23:00, then:

getSecondsToTomorrow() == 3600;

//! P.S. The function should work at any day, the “today” is not hardcoded.

function getSecondsTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now;
  return Math.round(diff);
}

getSecondsTomorrow();
