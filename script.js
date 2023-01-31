// const url ="https://api.openweathermap.org/data/2.5/weather?q=Røyken,no&units=metric&lang=no&appid=cda31770aeb83c15db6b9966ab82007d"
var city = document.querySelector("#søk").value;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},no&units=metric&lang=no&appid=cda31770aeb83c15db6b9966ab82007d`

fetch(url)
    .then(response => response.json())
    .then(data => {
        document.querySelector("#btn").addEventListener("click", function () {           
            
            
            document.querySelector(".by").innerHTML = data.name + ", " + data.sys.country;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
            document.querySelector(".beskrivelse").innerHTML = data.weather[0].description;
            console.log(data.main.temp);
        })

    })