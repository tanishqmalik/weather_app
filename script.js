const apiKey = "703c143b1efd5b4af08902750af42806"
// const apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=703c143b1efd5b4af08902750af42806"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid"
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?"
async function checkWeather(){
    const response = await fetch(apiUrl+ `=${apiKey}`);
    var data = await response.json();
    console.log(data);
}
checkWeather();