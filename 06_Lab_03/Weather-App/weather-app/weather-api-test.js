
import {WeatherAPI} from "./weather-api.js";

function testBuildURL(){

  const weatherAPI = new WeatherAPI("France");

  weatherAPI.buildURL();

}

testBuildURL();