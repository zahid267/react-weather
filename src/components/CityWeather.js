import React from 'react';
import { Component } from 'react';
import { getCityWeather } from '../utils/API';  /// include this line for live search from the given site
import { fetchDailyForecast }  from '../utils/API'; 
import DayWeather from './DayWeather';
import '../styles/weather.css';
const { REACT_APP_IMGURL } = process.env;


class CityWeather extends Component{
  cities = ["ottawa","toronto","calgary"];
    state = {
        city:this.cities[0],
        results: {},
        current:{},
    };
   
    // include this block for live search from the given site
    componentDidMount = () => {
        this.searchCity(this.state.city);
    }
    searchCity = (city) => {
        getCityWeather(city)
        .then(response => {
          const {data} = response;
          this.searchDailyFC(data.coord.lat, data.coord.lon);
        })
        .catch(err => console.log(err));
       
       //console.log("get data suspended : " + city);
       
    };
    searchDailyFC = (lat,lon) => {
        fetchDailyForecast(lat, lon)
        .then(res => {
          const {data} = res;
          const { current } = data.current;
          this.setState({results:data, current:current});
        })
        .catch(err => console.log(err));
    };
    
    render(){
        return (
            <div className="container">
                <ul>
                {this.cities.map((cityname,index) =>(
                    <li
                     key={index}
                     className={this.state.city === cityname ? "selected" : ''}
                     onClick={ () =>this.searchCity(cityname) }>{cityname.toUpperCase()}</li>
                ))
                }
                </ul>
                {this.state.results.current ? (
                
                  <div className="today">
                        <h2>Today</h2>
                        <div className='today-temp'>
                            <img 
                                alt={this.state.results.current.weather[0].description}
                                src={`${REACT_APP_IMGURL}${this.state.results.current.weather[0].icon}.png`}
                            />
                            <div>
                                <h2 className='temperature'>{this.state.results.current.temp.toFixed(0)}</h2>
                                <p title={this.state.results.current.weather[0].description}
                                >{this.state.results.current.weather[0].main}</p>
                            </div>
                        </div>

                   
                        <div className="nextblock">
                        {this.state.results.daily.slice(0, 4).map((day) =>(
                            
                            <DayWeather day={day} key={day.dt} />
                            
                        ))
                        }

                        </div>
                    </div>  
                  

                ):(
                    <p>No Results to Display</p>
                )}

            </div>
        );

    }

}

export default CityWeather;