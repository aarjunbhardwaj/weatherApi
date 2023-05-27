Weather API
This is a weather application that fetches weather data from the OpenWeatherMap API. It displays information such as temperature, humidity, pressure, weather mood, city name, wind speed, country, and sunset time.

API Source
The weather data is obtained from the OpenWeatherMap API (https://api.openweathermap.org). You will need to obtain an API key by signing up on their website.

Technologies Used
React: JavaScript library for building user interfaces.
useState Hook: Used for managing state within functional components.
useEffect Hook: Used to fetch data from the API and handle side effects.
Async/Await: Used for asynchronous operations, simplifying error handling with try/catch blocks.
Weather Icons: Weather icons are obtained from cloudfare.com, providing visual representation of different weather conditions.
Google Fonts: Typography is enhanced using Google Fonts to improve the visual presentation of the application.
Installation
Clone the repository or download the source code.
Navigate to the project directory.
Run npm install to install the project dependencies.
Create a .env file in the root directory and add your OpenWeatherMap API key

REACT_APP_API_KEY=your_api_key
Run npm start to start the development server.
Open the application in your browser at http://localhost:3000.
Usage
Upon launching the application, it will automatically fetch the weather data for your current location.
You can also search for weather information for other cities by entering the city name in the search bar.
The weather data, including temperature, humidity, pressure, weather mood, wind speed, country, and sunset time, will be displayed.
Feel free to explore and experiment with the application!

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
The weather data is provided by OpenWeatherMap API.
Weather icons are obtained from cloudfare.com.
Typography is enhanced using Google Fonts.
