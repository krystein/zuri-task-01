// Declare variables for the day of the week and UTC time
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

// Function to format a timestamp as a human-readable string in AM/PM format
function formatTime(timestamp) {
  const date = new Date(timestamp);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const amPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedSeconds = date.getUTCSeconds().toString().padStart(2, "0");

  return `${formattedHours}:${minutes}:${formattedSeconds} ${amPm} GMT +1`;
}

// Function to update the current day of the week and UTC time
function updateDateTime() {
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];

  // Adjust the timestamp for GMT +1 (1 hour ahead of UTC)
  now.setHours(now.getHours() + 1);

  const utcTime = formatTime(now.getTime());

  dayOfWeekElement.textContent = ` ${dayOfWeek}`;
  utcTimeElement.textContent = ` ${utcTime}`;
}

// Update the date and time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);
