const apiKey = "703c143b1efd5b4af08902750af42806"
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid"
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid"

async function checkWeather(cityName){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    const response = await fetch(apiUrl)
    var data = await response.json();
    console.log(data);

    const city=document.querySelector(".city")
    city.innerHTML=data.name;

    const temperature = data.main.temp
    const c_temp= temperature-273.15
    final_temp=c_temp.toFixed(0)

    document.querySelector(".degree").innerHTML= final_temp + "°C"

    const humidity= data.main.humidity
    document.querySelector(".pwh").innerHTML=humidity+"%"

    const windspeed= data.wind.speed

    windspeed1=Math.floor(windspeed)
    document.querySelector(".pwh1").innerHTML=windspeed1+"Km/h"
}

checkWeather("patiala");
