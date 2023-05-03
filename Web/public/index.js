const temperatureElement = document.querySelector("#temperature");
const humidityElement = document.querySelector("#humidity");

const dbRef = firebase.database().ref();
const temperatureRef = dbRef.child("temperatura");
const humidityRef = dbRef.child("humedad");

const temperatureData = [];
const humidityData = [];

temperatureRef.limitToLast(1).on("child_added", (snapshot) => {
  const temperatureValue = snapshot.val();
  temperatureData.push(temperatureValue)
  temperatureElement.textContent = temperatureValue;
  updateChart(temperatureData, humidityData); 
});

humidityRef.limitToLast(1).on("child_added", (snapshot) => {
    const humidityValue = snapshot.val();
    humidityData.push(humidityValue);
  
    // Actualizar el contenido del elemento HTML
    humidityElement.textContent = humidityValue;
  
    // Actualizar el gráfico
    updateChart(temperatureData, humidityData);

});



