const apiKey = '9b3abd72af5e8ee4c215adb53b59b0e5';

let form = document.querySelector('.weather-form');
let weatherInfo = document.querySelector('.weather-info');

let button = document.querySelector('.button')
button.addEventListener('click', weather)

form.addEventListener('submit', weather )

function weather(event) {
    event.preventDefault();
    let city = document.querySelector('.city').value;
    getWeather(city);
};

async function getWeather(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        let data = await response.json();
        console.log(data)

        let card = `
            <div class="card m-4" style="width: 18rem;">
                <img src="./weatherapp.jpg" class="card-img-top" alt="weather" height="200px" width="200px">
                <div class="card-body color">
                    <h5 class="card-title">${data.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Temp: ${(data.main.temp-273.15).toFixed()}&deg;C</li>
                    <li class="list-group-item">Feels Like: ${(data.main.feels_like-273.15).toFixed()}&deg;C</li>
                    <li class="list-group-item">Pressure: ${data.main.pressure}</li>
                </ul>
            </div>
        `;
        weatherInfo.innerHTML = card;
    } catch (error) {
        console.error('error fetching the weather data');
    }
}