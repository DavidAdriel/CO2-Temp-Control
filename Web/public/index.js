const temperatureElement = document.querySelector("#temperature");
const humidityElement = document.querySelector("#humidity");

const dbRef = firebase.database().ref();
const temperatureRef = dbRef.child("temperatura");
const humidityRef = dbRef.child("humedad");

temperatureRef.limitToLast(1).on("child_added", (snapshot) => {
  temperatureElement.textContent = snapshot.val();
});

humidityRef.limitToLast(1).on("child_added", (snapshot) => {
  humidityElement.textContent = snapshot.val();
});