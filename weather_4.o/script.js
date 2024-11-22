async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'your_openweathermap_api_key'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById('weather').innerHTML = `
                <p>Weather: ${weatherDescription}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
        } else {
            document.getElementById('weather').innerHTML = `<p>City not found.</p>`;
        }
    } catch (error) {
        document.getElementById('weather').innerHTML = `<p>Error fetching weather data.</p>`;
    }
}
