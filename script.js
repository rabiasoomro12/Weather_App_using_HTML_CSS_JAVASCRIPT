const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', () => {
    const APIKey = '9ee1b72477d27f0ab2394aaf67bc122f';
    const city = document.querySelector('.search-box input').value;

    if (city === '') return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('City not found!');
                return;
            }

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            // Set weather image
            switch (data.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
                case 'Mist':
                case 'Haze':
                    image.src = 'images/mist.png';
                    break;
                default:
                    image.src = 'images/cloud.png';
                    break;
            }

            // Update weather details
            temperature.innerHTML = `${Math.round(data.main.temp)}<span>°C</span>`;
            description.textContent = data.weather[0].description;
            humidity.textContent = `${data.main.humidity}%`;
            wind.textContent = `${Math.round(data.wind.speed)} Km/h`;
        })
        .catch(error => {
            alert('Error fetching weather data!');
            console.error(error);
        });
});
