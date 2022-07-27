import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import resorts from '../forecast';

const restEndpoint = "https://api.weatherunlocked.com/api/resortforecast/716001?app_id=6990cc68&app_key=12c60c4bf71270b327f6c5c0e038e79c";

// const forecastData = async () => {
//     const response = await fetch(restEndpoint);
//     const jsonResponse = await response.json();
//     console.log(jsonResponse);
//     //return JSON.stringify(jsonResponse);
//     const arrayOfLists = forecast.map(
//       forecast =>  
//       <div>
//         <h2><b>{forecast.date}</b> {forecast.time}</h2>
//         <p><b>Snow:</b> {forecast.snow_in} in</p>  

//       </div>
//     )
//     return arrayOfLists;
// };

// function RenderResult() {
//   const [apiResponse, setApiResponse] = useState("*** now loading ***");

//   useEffect(() => {
//       callRestApi().then(
//           result => setApiResponse(result));
//   },[]);

const forecastData = []
resorts.forEach(resort => {
  let forecasts = [];
  resort.forecast.forEach(forecast => {
    forecasts.push(
    <div key={forecast.id}>
      <h2><b>{forecast.date}</b> {forecast.time}</h2>
      <p><b>Snow:</b> {forecast.snow_in} in</p> 
    </div>
  )
  });
  forecastData.push(
      <div key={resort.id}>
        {resort.name}
        {forecasts}
       </div>
  )
});

const Planning = () => {
  return(
      <div>
          <h1>Start Planning</h1>
          <div>
            {forecastData}
        </div>
      </div>
  );
};
  
export default Planning;