import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  console.log("reducer: action received", action);
  switch (action.type) {
    case FETCH_WEATHER:
      console.log("FETCH_WEATHER")
      // return state.concat([action.payload.data]); // same way to do it
      return [action.payload.data, ...state]; // [ city, city , city ]
  }

  return state;
}
