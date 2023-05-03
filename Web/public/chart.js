let temperatureChart;
let humidityChart;
function updateChart(temperatureData, humidityData) {
    // Crear el gráfico de temperatura si no existe
    if (!temperatureChart) {
      const ctx = document.getElementById("temperatureChart").getContext("2d");
      const data = {
        labels: Array.from({ length: temperatureData.length }, (_, i) => i + 1),
        datasets: [
          {
            label: "Temperature",
            data: temperatureData,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      };
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      temperatureChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options,
      });
    } else {
      // Actualizar los datos del gráfico de temperatura existente
      temperatureChart.data.labels = Array.from({ length: temperatureData.length }, (_, i) => i + 1);
      temperatureChart.data.datasets[0].data = temperatureData;
      temperatureChart.update();
    }
  
    // Crear el gráfico de humedad si no existe
    if (!humidityChart) {
      const ctx = document.getElementById("humidityChart").getContext("2d");
      const data = {
        labels: Array.from({ length: humidityData.length }, (_, i) => i + 1),
        datasets: [
          {
            label: "Humidity",
            data: humidityData,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      };
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      humidityChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options,
      });
    } else {
      // Actualizar los datos del gráfico de humedad existente
      humidityChart.data.labels = Array.from({ length: humidityData.length }, (_, i) => i + 1);
      humidityChart.data.datasets[0].data = humidityData;
      humidityChart.update();
    }
  }