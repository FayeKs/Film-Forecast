# Film Forecast
Film Forecast is a weather app that recommends movies based on the current weather conditions in your city. Simply input your city, and the app will display the current weather forecast along with movie recommendations tailored to the weather.


## Features
* City Search: Input your city to get real-time weather information.
* Weather Data: Displays the current temperature in Fahrenheit, chance of rain, wind speed, and humidity.
* Movie Recommendations: Based on the weather conditions, the app suggests relevant movie genres:
    * Clear: Action Movies
    * Cloudy: Thriller Movies
    * Snowy: Comedy Movies
    * Rainy: Romance Movies
* Responsive Design: Mobile and desktop-friendly UI.

## API Integration
This project uses two APIs:

OpenWeather API for weather data:
  * Provides the current weather for a given city, including temperature, chance of rain, wind speed, and humidity.

The Movie Database (TMDb) API for movie recommendations:
  * Provides movie information and genres based on weather conditions.

## Technologies Used
* HTML: Structure and layout of the weather app.
* CSS: Styling for responsive design.
* React: JavaScript library for building the user interface.
* TypeScript: For type safety and better code organization.
* Axios: For making API requests.
* Vite: Build tool for fast development and bundling.
* NPM: For dependency management and scripts.  

## Usage
1. Enter the name of the city you want to check the weather for.
2. The app will display the current weather information, including temperature, wind speed, humidity, and chance of rain.
3. Based on the weather conditions, it will recommend movies from a specific genre:
  * Clear: Action
  * Cloudy: Thriller
  * Snowy: Comedy
  * Rainy: Romance

## Acknowledgements
* OpenWeather API for weather data.
* The Movie Database (TMDb) API for movie recommendations.
* Thanks to the open-source community for providing the tools and libraries that made this project possible.
