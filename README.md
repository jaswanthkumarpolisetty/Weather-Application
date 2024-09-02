# Weather Application

This Weather Application allows users to check the current weather conditions for any city by entering the city name. The app provides information such as temperature, humidity, wind speed, and weather conditions. The app also includes error handling for invalid city names.

## Features

- **City-Based Weather Search**: Enter the name of any city to retrieve the current weather data.
- **Temperature Display**: Shows the current temperature in Celsius.
- **Humidity Display**: Displays the current humidity percentage.
- **Wind Speed Display**: Displays the wind speed in km/h.
- **Weather Icon**: Dynamically changes the weather icon based on the weather conditions (e.g., Clouds, Rain, Clear, Drizzle, Mist).
- **Error Handling**: Displays an error message if the city name is not found or if an invalid city name is entered.
- **Responsive UI**: Weather information is hidden and the error message is shown if the city is not found. When valid city data is fetched, the weather information is displayed.

## Getting Started

### Prerequisites

- A modern web browser
- Internet connection to fetch weather data from the OpenWeatherMap API

### Installation

1. Clone the repository or download the source code.

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. Make sure to have an API key from [OpenWeatherMap](https://openweathermap.org/api).

3. Replace the `apiKey` variable in `script.js` with your own API key.

    ```javascript
    const apiKey = "your_api_key_here";
    ```

4. The app is now ready to use. You can open the `index.html` file in your browser to start checking the weather.

### File Structure

```bash
weather-app/
│
├── images/                     # Folder containing weather icons
│   ├── clouds.png
│   ├── clear.png
│   ├── drizzle.png
│   ├── mist.png
│   └── rain.png
│
├── index.html                  # Main HTML file
├── style.css                   # CSS for styling the app
└── script.js                   # JavaScript file containing the main logic
