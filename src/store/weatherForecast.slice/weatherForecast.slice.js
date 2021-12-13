import {createSlice} from "@reduxjs/toolkit";


const weatherForecastSlice = createSlice({
        name: "weatherForecast",
        initialState: {
            locationForecast: {},
            status: "",
            LatLng: {},
        },
        reducers: {
            getLatLngFromLibrary(state, action) {
                state.LatLng = action.payload;
                state.status = "loading";
            },
            getForecastSuccess(state, action) {
                state.status = "success";
                state.locationForecast = action.payload;
            },
            getForecastError(state, action) {
                state.status = "error";
                console.log(action.payload);
            }

        }
    }
)

export const {
    getLatLngFromLibrary,
    getForecastSuccess,
    getForecastError
} = weatherForecastSlice.actions;
export default weatherForecastSlice.reducer;
