const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="e7db93452fa495f1c9003a04a5f3add9";
const searchbox = document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city){
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`) 

    if(responce.status === 404 ){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
    var data=await responce.json();
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    document.querySelector(".city").innerHTML=data.name;

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src = "images/clouds.png"
    }else if (data.weather[0].main =="Rain"){
        weatherIcon.src = "images/rain.png"
    }else if (data.weather[0].main =="Clear"){
        weatherIcon.src = "images/clear.png"
    }else if (data.weather[0].main =="Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }else if (data.weather[0].main =="Mist"){
        weatherIcon.src = "images/mist.png"
    }
    
    document.querySelector(".weather").style.display="block";
    }
} 

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
searchbox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchbox.value);
    }
});
