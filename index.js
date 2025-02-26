const apikey = "5d50cb77a4d850371ce5a430e31c9b24"
const weatherDataEl = document.getElementById('weather-data')
const cityInputEl = document.getElementById('city-input')
const formEl = document.querySelector('form')

const getWeatherData = (cityValue)=>{
    console.log('city', cityValue)
}

formEl.addEventListener('submit', (event)=>{
    event.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue)
})