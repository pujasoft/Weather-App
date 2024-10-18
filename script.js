let cityRef = document.getElementById("city");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");
let popupResult = document.getElementById("popup-result");


let key = "c804ba5f6a69958e92e29fe8b6337e5b";

// function to fetch weather details by api  and display them
let getWeather = () => {
    
    let cityValue = cityRef.value;

    if (cityValue.length == 0) {
       
        result.innerHTML = `<h3 class="message">Please the City  Name</h3>`
     

    }
    else{

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=matric`;

        cityRef = "";

        fetch(url)
        .then((resp) => resp.json())
        .then((data) =>{
            console.log(data)
            console.log(data.name)
            console.log(data.weather[0].description)

            result.innerHTML = `
            <div class="result-container">
            <h2 class="weather-name">${data.name}</h2>
            <h4 class="weather-main">${data.weather[0].main}</h3>
            <h4 class="weather-description">${data.weather[0].description}</h4>
            <img  class="icon" src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>

            
              <h1 class="temp">${data.main.temp } &#176;</h1>
              </div>
            <div class="min-max-container">
              <h4 class='title-min'>Mix</h4>
              <h4 class='title-max'>Max</h4>
               <h3 class="tem-min">${data.main.temp_min}</h3>
               
                <h3 class="temp_max">${data.main.temp_max}</h3>
             </div>   
            `;

        }).catch(() => {
            result.innerHTML = `<h3> City Not Found</h3>`;
        });
    }
};
searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);