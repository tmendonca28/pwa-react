import axios from 'axios';

const URL = "https://api.openweathermap.org/data/2.5/weather";
// TODO
const API_KEY = "41df90d1e93f8687f99b17d7f627a8d3";

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