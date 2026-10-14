fetch("https://api.open-meteo.com/v1/forecast?latitude=13.7563&longitude=100.5018&hourly=temperature_2m,rain,weather_code,relative_humidity_2m")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let temperature = data.hourly.temperature_2m[0];
        let humidity = data.hourly.relative_humidity_2m[0];
        let rain = data.hourly.rain[0];
        let weatherCode = data.hourly.weather_code[0];

        document.getElementById("temperature").textContent =
            temperature + "°C";

        document.getElementById("humidity").textContent =
            "Humidity: " + humidity + "%";

        document.getElementById("rain").textContent =
            "Rain: " + rain + " mm";

        let condition = "Cloudy";

        if (weatherCode === 0) {
            condition = "Sunny";
        } else if (weatherCode === 1 || weatherCode === 2) {
            condition = "Partly cloudy";
        } else if (weatherCode === 3) {
            condition = "Overcast";
        } else if (weatherCode >= 51 && weatherCode <= 99) {
            condition = "Rainy or stormy";
        }

        document.getElementById("condition").textContent = condition;
    })
    .catch((error) => {
        console.log("Weather error:", error);
    });