document.addEventListener('DOMContentLoaded',()=>{
    const cityInput = document.getElementById('city-input');
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const weatherInfo = document.getElementById('weather-info');
    const cityNameDisplay = document.getElementById('city-name');
    const temperatureDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description');
    const errorMessageDisplay = document.getElementById('error-message');

    const API_KEY = "4c0c98f31778936d0c9686eb94c333c8";

    getWeatherBtn.addEventListener('click',async ()=>{
        const city = cityInput.value.trim();
        if(!city) return // because "" empty string is a falcy value

        try {
            const weatherData = await fetchWeatherData(city)
            displayWeatherData(weatherData)
        } catch (error) {
            displayErrorMsg()
        }
    })

    async function fetchWeatherData(city){
        //gets the data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

        const response = await fetch(url);
        // console.log(typeof response);
        // console.log(response);
        if(!response.ok){
            // throw new Error('City not found');
            displayErrorMsg()//23:02
        }
        const data = await response.json()
        return data;
    }


    function displayWeatherData(pakoda){
        //display the data
        console.log(pakoda);
        const {name,main,weather} = pakoda;
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature: ${main.temp}`
        descriptionDisplay.textContent = `Weather: ${weather[0].description}`

        //unlock the display
        weatherInfo.classList.remove('hidden')
        errorMessageDisplay.classList.add('hidden')
        
    }
    function displayErrorMsg(){
        weatherInfo.classList.add('hidden');
        errorMessageDisplay.classList.remove('hidden');
    }
})