const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayOfWeekElement = document.getElementById("dayOfWeek");
const utcTimeElement = document.getElementById("utcTime");

function formatTime(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedSeconds = date.getUTCSeconds().toString().padStart(2, "0");

  return `${formattedHours}:${minutes}:${formattedSeconds} ${amPm} GMT +1`;
}

function updateDateTime() {
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];

  now.setHours(now.getHours() + 1);

  const utcTime = formatTime(now.getTime());

  dayOfWeekElement.textContent = ` ${dayOfWeek}`;
  utcTimeElement.textContent = ` ${utcTime}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
