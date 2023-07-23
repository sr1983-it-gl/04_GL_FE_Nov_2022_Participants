
import {WeatherAPI} from "./weather-api.js";

class WeatherApp{

  init(){

    this.addEventHandler();
  }
  
  addEventHandler(){

    const searchBoxElement = document.querySelector(".search-box");

    searchBoxElement.param1 = this;
    searchBoxElement.addEventListener("keypress", this.handleEvent);
  }

  handleEvent(event){

    if (event.key === "Enter" || event.keyCode == 13){

      const eventTarget = event.target;
      const userData = eventTarget.value;
  
      const weatherAppObj = eventTarget.param1

      const weatherAPI = new WeatherAPI(userData);
      weatherAPI.buildURL();
      weatherAPI.invokeAPI()
        .then( (responseJSON) => {

          console.log(`Response is `);
          console.log(responseJSON);

          weatherAppObj.updateUI(responseJSON)
        })  
    }
  }

  updateUI(responseJSON){

    const cityElement = document.querySelector(".location .city");
    cityElement.innerText = 
      `${responseJSON.name} , ${responseJSON.sys.country}`

      //
  }
}

export {WeatherApp};