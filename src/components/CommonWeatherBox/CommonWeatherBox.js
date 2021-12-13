import {StyledCommonWeatherBox} from "./CommonWeatherBox.styles";
import {PlacesAutocompleteSearch} from "../Search/PlacesAutocompleteSearch";
import {WeatherCard} from "../WeatherCard/WeatherCard";

export const CommonWeatherBox = () => {


    return (
        <StyledCommonWeatherBox>
            <PlacesAutocompleteSearch/>
            <WeatherCard/>
        </StyledCommonWeatherBox>

    )
}
