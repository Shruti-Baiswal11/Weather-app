
var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('.add');
var city = document.querySelector('.cityoutput');
var description = document.querySelector('#description');
var temperatureOutput = document.querySelector('#temperature');
var wind = document.querySelector('#wind');

// Our own API key we fetch from the website data
var apik = "3ee8ff4be501c77ee7a7ce22a12fb0cd";

// Convert Kelvin to Celsius
function conversion(val) {
    // To convert Kelvin to Celsius: temperature in Celsius = temperature in Kelvin - 273.15
    return (val - 273.15).toFixed(2);
}

btn.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&appid=${apik}`)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var description = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            description.innerHTML = `Sky conditions: <span>${description}</span>`;
            temperatureOutput.innerHTML = `Temperature: <span>${conversion(temperature)}°C</span>`;
            wind.innerHTML = `Wind speed: <span>${windspeed} km/h</span>`;
        })
        .catch(err => {
            console.log('Error:', err);
            city.innerHTML = "Error: Please enter a valid city name.";
            description.innerHTML = "";
            temperatureOutput.innerHTML = "";
            wind.innerHTML = "";
        });
});
