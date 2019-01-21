import React, { Component } from 'react';
import { Grid, Col } from "react-bootstrap";

const api_key = "3e7a6ba7218095907d2e8f8882626c5d"

class Weather extends Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
      }
    
      getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=imperial`);
        const data = await api_call.json();
    
        if (city && country){
          this.setState({
            temp: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          });
        } else {
          this.setState({
            temp: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter correct values."
          });
        }
      }
    
      render() {

        const weatherStyle ={
          backgroundColor: 'white',
          border: 'black solid 2px',
          paddingBottom: '50px',
          margin: '50px'
        }

        const weatherInfo = {
          marginTop: '18px'
        }

        return (
          <Grid>
            <Col sm={8} style={weatherStyle}>
            <div>
                <h1>Weather Finder</h1>
                <p>Find out temperature, conditions, and more</p>
            </div>
            <div>
                <form onSubmit={this.getWeather}>
                    <input type="text" name="city" placeholder="City..."></input>
                    <input type="text" name="country" placeholder="Country..."></input>
                    <button>Get Weather</button>
                </form>
            </div>
            <div style={weatherInfo}>
                {this.state.city && this.state.country && <p><span >Location:</span> {this.state.city}, {this.state.country}</p>}  
                {this.state.temp && <p><span >Temperature:</span> {this.state.temp} F</p>}
                {this.state.humidity && <p><span >Humidity:</span> {this.state.humidity}%</p>}
                {this.state.description && <p><span >Conditions:</span> {this.state.description}</p>}
                {this.state.error && <p>{this.state.error}</p>}
            </div>
            </Col>
          </Grid>
        );
      }

}

export default Weather;