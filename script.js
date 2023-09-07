function getCurrentDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}

function updateCurrentUTCTime() {
  const currentDate = new Date();
  const currentUTCTime = currentDate.toUTCString();
  return currentUTCTime;
}

const slackUserNameElement = document.querySelector(
  '[data-testid="slackUserName"]'
);
const currentDayOfTheWeekElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

slackUserNameElement.textContent = "Nworah Christian";
currentDayOfTheWeekElement.textContent = `Current Day of the Week: ${getCurrentDayOfWeek()}`;
currentUTCTimeElement.textContent = `Current UTC Time: ${updateCurrentUTCTime()}`;
