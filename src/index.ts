import "./style.css";
import {printWeather} from "./WeatherCard";
import {LatLong} from "./WeatherInterfaces";
import {WeatherData} from "./WeatherInterfaces";
import {Location} from "./WeatherInterfaces";
import dotenv from 'dotenv';

dotenv.config();
const geoApiBaseUrl = "http://api.openweathermap.org/geo/1.0/direct"
const weatherApiBaseUrl = "https://api.openweathermap.org/data/2.5/weather"

function renderWeather(weatherData: WeatherData) {
    if (!weatherData) {
        (document.getElementById("weather-card") as InnerHTML).innerHTML = "No weather data found";
    }
    printWeather(weatherData);
}

async function fetchWeather(latlon: LatLong): Promise<WeatherData> {
    // Make an API call to fetch the weather.

    const apiKey = process.env.WEATHER_APP_ID;
    if (!apiKey) throw Error('Api key not found.');
    const url = new URL(weatherApiBaseUrl);
    url.search = new URLSearchParams({
        lat: latlon.latitude,
        lon: latlon.longitude,
        units: "metric",
        appid: apiKey
    }).toString();
    const response = await fetch(url);
    const items = await response.json();
    console.log(items);
    return items;
}

async function fetchLatLong(location: string): Promise<LatLong> {
    // Make an API call to fetch the data.
    const apiKey = process.env.WEATHER_APP_ID;
    if (!apiKey) throw Error('Api key not found.');
    const url = new URL(geoApiBaseUrl);
    url.search = new URLSearchParams({
        q: location,
        limit: '1',
        appid: apiKey
    }).toString();
    const response = await fetch(url);
    const items: Location[] = await response.json();
    const locationData: Location = items[0];
    return {latitude: locationData.lat, longitude: locationData.lon};
}

function init() {
    const searchButton = document.getElementById("search");
    if (!searchButton) throw new Error("No search button");
    searchButton.addEventListener("click", () => {
        let location = (document.getElementById("city") as HTMLInputElement).value;
        if (!location) throw new Error("Location field is required");

        // Make an API request.
        fetchLatLong(location).then(latLong => {
            fetchWeather(latLong).then(weatherData => {
                renderWeather(weatherData);
            })
        })
    });
}

init();
