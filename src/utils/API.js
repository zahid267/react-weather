import axios from 'axios';
const { REACT_APP_BASEURL, REACT_APP_APIKEY } = process.env;


export const getCityWeather = (city) => {
    return axios.get(`${ REACT_APP_BASEURL}weather?q=${city}&cnt=4&APPID=${REACT_APP_APIKEY}`);
}

export const fetchDailyForecast = (lat, lon) => {
    return axios.get(`${ REACT_APP_BASEURL}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,hourly&appid=${REACT_APP_APIKEY}`);
}
