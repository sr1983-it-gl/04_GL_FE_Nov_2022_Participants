
import {WeatherAPI} from "./weather-api.js";

class WeatherApp{

  addEventHandler(){

    const searchBoxElement = document.querySelector(".search-box");

    // Add event
    
  }

  handleEvent(event){

    const eventTarget = event.target;
    const userData = eventTarget.value;

    const weatherAPI = new WeatherAPI(userData);
    const responseJSON = weatherAPI.invokeAPI();
    // call the API

    this.updateUI(responseJSON)
  }

  updateUI(responseJSON){

    const cityElement = document.querySelector(".location .city");
    cityElement.innerText = 
      `${responseJSON.name} , ${responseJSON.sys.country}`

      //
  }
}