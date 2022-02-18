import React from 'react';    ///useReducer, 
import '../styles/weather.css';
import moment from "moment";
const { REACT_APP_IMGURL } = process.env;

function DayWeather({ day }){
   
    return(
            
            <div className='comingDays' key={day.dt}>

                <h3 title={moment.unix(day.dt).format("MMMM D, YYYY")}>{moment.unix(day.dt).format("ddd")}</h3>
                <img
                    alt={day.weather[0].description}
                    src={`${REACT_APP_IMGURL}${day.weather[0].icon}.png`}
                />
                <p className='temperature'>{day.temp.day.toFixed(0)}</p>
                
            </div>
            
    )

}

export default DayWeather;
