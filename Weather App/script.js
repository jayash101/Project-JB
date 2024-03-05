const container = document.querySelector(".container");
const userInput = document.querySelector(".userInput");
const cityInput = document.querySelector(".cityInput");
const submit = document.querySelector(".submit");
const errorMessage = document.querySelector(".error");

const weatherInfo = document.querySelector(".weatherInfo");
const cityName = document.querySelector(".cityName");
const temperatureDisplay = document.querySelector(".temperature");
const humidityDisplay = document.querySelector(".humidity");
const weatherLogoDisplay = document.querySelector(".weatherLogo");
const weatherImageDisplay = document.querySelector(".weatherImage");
const descriptionDisplay = document.querySelector(".description");

const apiKey = "0116655a55fb93580962ccf88aa907f8";

//* 1. Submit button event
submit.addEventListener("click", async event => {
    const city = cityInput.value;

    if (city === "") {
        displayError("SO EMPTY");
        weatherInfo.style.display = "none";
    }
    else {
        try {
            displayError("");
            const weatherData = await getWeatherData(city);
            weatherInfo.style.display = "flex";

            displayWeatherInfo(weatherData);
        }
        catch {
            displayError(error);
        }
    }
});

//* 2. Async Functuin to get weather data
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        weatherInfo.style.display = 'none';
        throw new Error(displayError("404 NOT FOUND!!"));
    }

    return await response.json();
}

//* 3. Function to display error message
function displayError(message) {
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
    errorMessage.style.fontWeight = "bold";
    errorMessage.style.display = "block";
    errorMessage.style.fontSize = "1.5rem";
}

//* 4. Function to display weather info
function displayWeatherInfo(data) {
    const {
        name: city,
        main: { temp, humidity },
        weather: [{ id, description }]
    } = data;

    cityName.textContent = `${city}`;
    temperatureDisplay.textContent = `${(temp - 273.15).toFixed(2)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;

    getWeatherEmoji(id);

    descriptionDisplay.textContent = description;
}

//* 5. Function to get weather emoji
function getWeatherEmoji(id) {
    switch (true) {
        case (id >= 200 && id < 300):
            weatherImageDisplay.src = "/Weather App/god.gif";
            break;

        case (id >= 300 && id < 500):
            weatherImageDisplay.src = "/Weather App/happy.gif";
            break;

        case (id >= 500 && id < 600):
            weatherImageDisplay.src = "/Weather App/abc.gif";
            break;

        case (id >= 600 && id < 701):
            weatherImageDisplay.src = "/Weather App/cute.gif";
            break;

        case (id > 700 && id < 800):
            weatherImageDisplay.src = "/Weather App/tenor.gif";
            break;

        case (id == 800):
            weatherImageDisplay.src = "/Weather App/clear.gif";
            break;

        case (id > 800):
            weatherImageDisplay.src = "/Weather App/cloud.gif";
            break;

        default:
            weatherImageDisplay.textContent = "❓❓";
    }
}