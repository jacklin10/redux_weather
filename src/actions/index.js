import axios from 'axios';

const API_KEY = 'b59034bd1a8a9bd8957247ea8eb0dc1e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;

  // promise returned from axios
  const request = axios.get(url);

  console.log("Action -> Request: ", request);

  // NOTE: We are putting the promise in the state. Weird because the promise doesn't really
  // have data.  What happens though is the redux-promise middle ware manipulates it 
  // and when it gets to the reducer_weather it will be an object with the api data at that point.
  return {
    type: FETCH_WEATHER, 
    payload: request
  };

}
