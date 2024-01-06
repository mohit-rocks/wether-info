export interface LatLong {
    latitude: string
    longitude: string
    lat ?: string
    lon ?: string
}

export interface LocalNames {
    [key: string]: string;
}
export interface Location {
    name: string
    local_names: LocalNames[]
    lat: string
    lon: string
    country: string
    state: string
}
export interface WeatherPrimary {
    id: number
    main: string
    description: string
    icon: string
}

export interface MainWeather {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}
export interface Clouds {
    all: number
}

export interface Wind {
    speed: number
    degree: number
    gust: number
}

export interface SunTime {
    country: string
    sunrise: number
    sunset: number
}
export interface WeatherData {
    coord: LatLong
    weather: WeatherPrimary
    base: string
    main: MainWeather
    visibility: string
    timezone: number
    timezone_offset: string
    wind: Wind
    clouds: Clouds
    cod: number
    dt: number
    id: number
    name: string
    sys: SunTime
}
