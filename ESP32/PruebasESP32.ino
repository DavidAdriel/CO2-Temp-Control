#include <WiFi.h>
#include <FirebaseESP32.h>
#include <DHT.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>

#include "addons/TokenHelper.h"
// Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

#define WIFI_SSID "CLARO1_B6FC07"
#define WIFI_PASSWORD "139s6wnQLH"
#define FIREBASE_HOST "https://prueba-fa6e7-default-rtdb.firebaseio.com/"
#define FIREBASE_AUTH "Meq42T4F186L3C23J8eMDvInldj4DCOjxwfUjK2l"
#define USER_EMAIL "sm18043@gmail.com"
#define USER_PASSWORD "16276ochopuntos"

#define DHTPIN 16     // Pin GPIO seleccionado para el sensor DHT22
#define DHTTYPE DHT22 // Tipo de sensor DHT22

DHT dht(DHTPIN, DHTTYPE);

FirebaseData firebaseData;

void setup() {
  Serial.begin(9600);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Conectando a WiFi...");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(1000);
  }
  Serial.println("Conectado a WiFi");
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  dht.begin();
}

void loop() {
  delay(2000);
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  Serial.print("Temperatura: ");
  Serial.print(temperature);
  Serial.println(" °C");
  Serial.print("Humedad: ");
  Serial.print(humidity);
  Serial.println(" %");

  Firebase.pushFloat(firebaseData, "/temperatura", temperature);
  Firebase.pushFloat(firebaseData, "/humedad", humidity);
  if (firebaseData.dataAvailable()) {
    Serial.println(firebaseData.errorCode());
    Serial.println(firebaseData.stringData());
  }
}
