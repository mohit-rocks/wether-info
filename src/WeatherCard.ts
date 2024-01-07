import {WeatherData} from "./WeatherInterfaces";

export function printWeather(weatherdata: WeatherData) {
    // Multiply timestamp since it is in milliseconds.
    let date = new Date(weatherdata.dt * 1000).toDateString();
    console.log(date);
    let content = `<div class="weather" id="weather-card">` +
        `<div class="flex flex-wrap">` +
            `<div class="w-full px-2 bg-gray-900 text-white relative min-w-0 break-words rounded-lg">` +
                `<div class="flex mb-4 justify-between items-center"><div>` +
                    `<h5 class="mb-0 font-medium text-xl">${weatherdata.name}</h5>` +
                    `<h6 class="mb-0">${date}</h6>` +
                    `<small>Clouds: ${weatherdata.clouds.all}</small>` +
                `</div>` +
                `<div class="text-center">` +
                    `Temperature: <h6 class="font-bold text-4xl mb-0"><span>${weatherdata.main.temp}</span></h6>` +
                    `Min Temp: <h6 class="font-bold text-4xl mb-0"><span>${weatherdata.main.temp_min}</span></h6>` +
                    `Max Temp: <h6 class="font-bold text-4xl mb-0"><span>${weatherdata.main.temp_max}</span></h6>` +
                    `Feels like: <h6 class="font-bold text-4xl mb-0"><span>${weatherdata.main.feels_like}</span></h6>` +
                `</div>` +
                `</div>` +
            `</div>` +
        `</div>` +
    `</div>`;
    (document.getElementById('weather-card') as InnerHTML).innerHTML = content;
}
