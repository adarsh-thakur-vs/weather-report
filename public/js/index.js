/* fetching api data using async await */
// import { fetchData} from "./api/weatherData.js";

/*fetching api dat using promises*/
import { fetchDataByPromise } from "../../api/weatherData.js";

/* importing weaherView that has all variable element from html file */
import { weatherView } from "./weatherView.js";

/* importing error message from utilities */
import { location_error } from "../../utilities/errorMessage.js";

const searchField=document.querySelector(".searchField");
const form=document.querySelector("form");

/* default location to be shown on page */
let target="new delhi";

/* updating page after getting weather api data by importing fetchData using async await */
// const weatherFetchedData=async()=>{
//     try {
//         const data=await fetchData(target);
//         updateWeatherViews(data,weatherView);
//     } catch (error) {
//         alert(location_error);
//     }
// }

/* updating page after getting weather api data by importing fetchDataByPromise using promises */
const weatherFetchDatabyPromise=()=>{
    fetchDataByPromise(target).then((data)=>{
    updateWeatherViews(data,weatherView);
    }).catch((error)=>{
        alert(location_error);
    })
}

/* function to set new values */
const updateWeatherViews = (data, weatherViews) => {
    weatherViews.forEach((view, index) => {
        const forecast = data.forecast.forecastday[index].day;
        const date = data.forecast.forecastday[index].date;

        view.tempField.innerText = forecast.avgtemp_c + '°C';
        view.cityField.innerText = data.location.name;
        view.emojiField.src = forecast.condition.icon;
        view.weatherField.innerText = forecast.condition.text;
        view.dateField.innerText = date;
    });
};

/* api call for default location using async await */
// weatherFetchedData(target);

/* api call for default location using promise */
weatherFetchDatabyPromise(target);

/* handling after form submission */
form.addEventListener("submit",(e)=>{
e.preventDefault();
target=searchField.value;
// weatherFetchedData(target);
weatherFetchDatabyPromise(target); 
searchField.value="";
})