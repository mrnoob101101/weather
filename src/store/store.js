import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from "./root.reducer";
import autoCompleteSaga from "./weatherForecast.slice/weatherForecast.sagas";
import createSagaMiddleware from 'redux-saga';

const saga = createSagaMiddleware();
export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
});

saga.run(autoCompleteSaga);




