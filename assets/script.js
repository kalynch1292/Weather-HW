var apiKey = "f995491dcfa29374ca151d9bc78445df"


$("#searchButton").on("click", function (event) {
    var city = $("#search").val().trim()
    // Here we are building the URL we need to query the database
    var dailyQueryURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial&cnt=6&appid=" + APIKey;

    $.ajax({
        url: dailyQueryURL,
        method: "GET",




        sucess: function (data) {
            var todaysTemp = data.list[0].temp.day;
            var citySearched = data.city.name
            var todaysHumidity = data.list[0].humidity
            var todaysWind = data.list[0].speed

            var dayOneW = data.list[1].weather[0].icon
            var dayOneT = data.list[1].temp.day
            var dayOneH = data.list[1].humidity

            var dayTwoW = data.list[2].weather[0].icon
            var dayTwoT = data.list[2].temp.day
            var dayTwoH = data.list[2].humidity

            var dayThreeW = data.list[3].weather[0].icon
            var dayThreeT = data.list[3].temp.day
            var dayThreeH = data.list[3].humidity

            var dayFourW = data.list[4].weather[0].icon
            var dayFourT = data.list[4].temp.day
            var dayFourH = data.list[4].humidity

            var dayFiveW = data.list[5].weather[0].icon
            var dayFiveT = data.list[5].temp.day
            var dayFiveH = data.list[5].humidity



            SetInfo(todaysTemp, citySearched, todaysWind, todaysHumidity)

            setWeather(dayOneH, dayOneT, dayOneW, 1)
            setWeather(dayTwoH, dayTwoT, dayTwoW, 2)
            setWeather(dayThreeH, dayThreeT, dayThreeW, 3)
            setWeather(dayFourH, dayFourT, dayFourW, 4)
            setWeather(dayFiveH, dayFiveT, dayFiveW, 5)

            var history = localStorage.getItem("searchHistory")

            if (history == null) {
                history = city;
            } else {
                history = city + "," + history;
            }

            localStorage.setItem("searchHistory", history)

        },
        error: function (xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert("Input not valid, Please enter a valid City")
        }




    })
})

function SetInfo(todaysTemp, citySearched, todaysWind, todaysHumidity){
    $("#cityInfo").text(citySearched)
    $("#temp").text("Temp: " + todaysTemp + " F")
    $("humidity").text("Humidity " + todaysHumidity + "%")
    $("wind").text("Wind Spped" + todaysWind +"MPH") 
}

function setWeather(temp, humidity, day){
    $("#day"+day).text("=", icon)
    $("#day"+"Temp").text(temp)
    $("#day"+day+"Humidity").text(humidity)
}