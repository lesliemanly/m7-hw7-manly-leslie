var myCity = document.querySelectorAll('#city-wrapper h1 span');

var myWeather = document.querySelectorAll('#weather-wrapper h2 span');


var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here
        var city = document.createTextNode(apiResult.name);
        myCity[0].appendChild(city);

        var weather = document.createTextNode(apiResult.weather[0].description);
        myWeather[0].appendChild(weather);








    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=77351,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
