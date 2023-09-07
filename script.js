const nameElement = document.querySelector('[data-testid="name"]');
const ageElement = document.querySelector('[data-testid="age"]');
const currentTimeElement = document.querySelector(
  '[data-testid="current-time"]'
);
const dataChartElement = document.querySelector('[data-testid="data-chart"]');
const changeDataButton = document.querySelector(
  '[data-testid="change-data-button"]'
);

function updateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  currentTimeElement.textContent = formattedTime;
}

updateTime();
setInterval(updateTime, 1000);

const chart = new Chart(dataChartElement, {
  type: "pie",
  data: {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Data Points",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

changeDataButton.addEventListener("click", () => {
  const newData = Array.from({ length: 5 }, () =>
    Math.floor(Math.random() * 20)
  );
  chart.data.datasets[0].data = newData;
  chart.update();
});
