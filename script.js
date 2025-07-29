const apiKey = 'f2e4bc9fe1f7eb4b386b7776d61a664b';
const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('get-weather');
const weatherInfo = document.getElementById('weather-info');

getWeatherButton.addEventListener('click', getWeather);

function getWeather() {
    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error:', error));
}

function displayWeather(data) {
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;

    const weatherHtml = `
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Feels like: ${feelsLike}°C</p>
        <p>Humidity: ${humidity}%</p>
    `;

    weatherInfo.innerHTML = weatherHtml;
}
