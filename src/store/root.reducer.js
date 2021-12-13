import {combineReducers} from "@reduxjs/toolkit";
import weatherForecastSlice from "./weatherForecast.slice/weatherForecast.slice";


export const rootReducer = combineReducers({
    forecast: weatherForecastSlice,
})
