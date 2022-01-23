
const API_KEY = "fdb568b79dbec452976c165fe35ab3c7";

function onGeoOk(position){
    const lat = position.coords.latitude;    
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // https://openweathermap.org/api
   
    fetch(url)
   .then((reponse) => reponse.json())
   .then((data)=>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = `위치 : ${data.name}`;
        weather.innerText = `
        현재 날씨 : ${data.weather[0].main}
        기온: ${data.main.temp}도`;
       
        
    });
  
}


function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);