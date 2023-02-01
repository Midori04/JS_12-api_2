// const url ="https://api.openweathermap.org/data/2.5/weather?q=Røyken,no&units=metric&lang=no&appid=cda31770aeb83c15db6b9966ab82007d"



var btn = document.querySelector("#btn")
btn.addEventListener("click", function () {
    
    var city = document.querySelector("#søk").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=no&appid=cda31770aeb83c15db6b9966ab82007d`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.name);

            console.log(data.sys.country);

            document.querySelector(".by").innerHTML = data.name +", "+ data.sys.country;

            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";

            document.querySelector(".beskrivelse").innerHTML = data.weather[0].description;

            document.querySelector(".min").innerHTML = data.main.temp_min

            document.querySelector(".max").innerHTML = data.main.temp_max

        })
})

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         document.querySelector("#btn").addEventListener("click", function () {           
            
            
//             document.querySelector(".by").innerHTML = data.name + ", " + data.sys.country;
//             document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
//             document.querySelector(".beskrivelse").innerHTML = data.weather[0].description;
//             console.log(data.main.temp);
//         })

//     })