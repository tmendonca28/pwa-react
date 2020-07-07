import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
// TODO
const API_KEY = "XXXXXXXXXXXXXXX";

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            appid: API_KEY,
        }
    });

    return data;
}