const slackUserNameElement = document.querySelector(
  '[data-testid="slackUserName"]'
);
const currentDayOfTheWeekElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

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
  currentDayOfTheWeekElement.textContent = `Current Day of the Week: ${daysOfWeek[dayIndex]}`;
}

function updateCurrentUTCTime() {
  const now = new Date();
  const formattedTime = now.toISOString();
  currentUTCTimeElement.textContent = `${formattedTime}`;
}

updateCurrentUTCTime();
setInterval(updateCurrentUTCTime, 1000);

getCurrentDayOfWeek();
setInterval(getCurrentDayOfWeek, 1000);
