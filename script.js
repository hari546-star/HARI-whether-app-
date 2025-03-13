document.addEventListener('DOMContentLoaded', function() {
    const cityNames = [
        "Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Kurnool", 
        "Rajahmundry", "Kakinada", "Tirupati", "Anantapur", "Eluru", 
        "Kadapa", "Machilipatnam", "Vizianagaram", "Srikakulam", "Ongole", 
        "Chittoor", "Adoni", "Bhimavaram", "Hindupur", "Tenali"
    ];

    new Awesomplete(document.querySelector("#city"), {
        list: cityNames,
        minChars: 1,
        maxItems: 5,
        autoFirst: true
    });
});

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '4fffb1629e7c83413ad02579bb2ac019'; 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            const weather = `
                <p><strong>City:</strong> ${data.name}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            `;
            document.getElementById('weather-result').innerHTML = weather;
        } else {
            document.getElementById('weather-result').innerHTML = `<p>City not found</p>`;
        }
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Error fetching weather data</p>`;
    }
}
