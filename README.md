# Weather_App_using_HTML_CSS_JAVASCRIPT
 A simple weather app that allows users to enter a city name and get current weather information, including temperature, humidity, wind speed, and weather description. The app fetches weather data from OpenWeather API and displays it with an icon representing the current weather conditions.

Features
City Search: Users can search for weather information by entering the city name.
Weather Information: Displays temperature, humidity, wind speed, and weather description.
Weather Icons: Dynamic icons representing the weather conditions (clear, rain, snow, etc.).
Responsive Design: The app is designed to look great on both desktop and mobile devices.
Technologies Used
HTML5 for structure and layout.
CSS3 for styling, including responsive design.
JavaScript for interactivity and fetching data from the OpenWeather API.
OpenWeather API for real-time weather data.
Setup Instructions
Follow these steps to run the project locally:

Prerequisites
A web browser (e.g., Chrome, Firefox).
An internet connection to fetch weather data.
Steps
Clone this repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/weather-app.git
Navigate to the project directory:

bash
Copy code
cd weather-app
Open the project in your browser: Simply open the index.html file in your preferred web browser. You can do this by double-clicking the file or right-clicking it and selecting "Open with" your browser.

Environment Setup (Optional)
If you want to customize the app further or contribute to the code, you can use a code editor like VS Code and run a local server. Alternatively, you can just edit the index.html, style.css, and script.js files directly.

How to Use
Open the app in your browser.
In the search box, enter a city name (e.g., "London").
Click the search button to get the weather details.
The app will display the temperature, weather description, humidity, and wind speed for the selected city.
API Key
This app uses the OpenWeather API to fetch weather data. An API key is required to access the data. You can replace the default API key in the script.js file with your own.

To get an API key:

Go to OpenWeather API.
Sign up and get your API key.
Replace 'YOUR_API_KEY_HERE' in the script.js file with your API key.
Code Overview
HTML
The index.html file contains the structure of the weather app, including the search box, weather display section, and icons for different weather conditions.

CSS
The style.css file contains all the styling for the app, ensuring it is responsive and visually appealing. It includes background images and styles for various weather elements.

JavaScript
The script.js file is responsible for handling the logic of the app. It listens for the user input in the search box, fetches data from the OpenWeather API, and updates the weather details dynamically.

Contributing
Contributions are welcome! If you’d like to improve or enhance the app, please fork the repository and submit a pull request.

License
This project is open-source and available under the MIT License.
