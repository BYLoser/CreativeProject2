document.getElementById("weatherSubmit").addEventListener("click", function(event) {
    /*global fetch*/
    /*global moment*/
      event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=0b5b970e132186e1aaf9cb44427da110";
    
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      results += "<div class='container'><div class='row'>";
      results += '<h2>Current Weather in ' + json.name + "</h2></div>";
      results += "<div class='row'><div class='col-sm'>";
      for (let i=0; i < json.weather.length; i++) {
	results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += "<p>";
      for (let i=0; i < json.weather.length; i++) {
        results += json.weather[i].description;
	      if (i !== json.weather.length - 1)
	      results += ", ";
      }
      results += "</p></div>";
      results += '<div class="col-sm"><h2>' + json.main.temp + " &deg;F</h2>";
      results += '<h5>' + "High: " + json.main.temp_min + " &deg;F</h5>";
      results += '<h5>' + "Low: " + json.main.temp_max + " &deg;F</h5></div>";
      results += '<div class="col-sm"><h3>' + "Humidity: " + json.main.humidity + '%</h3>';
      results += '<h3>' + "Pressure: " + json.main.pressure + " hPa</h3></div>";
      results += '<div class="col-sm"><h3>' + "Wind Speed: " + json.wind.speed + " mph</h3>";
      results += '<h3>' + "Wind Direction: " + json.wind.deg + " &deg;</h3></div></div>";
      
      document.getElementById("weatherResults").innerHTML = results;
      console.log(json);
    });
    
    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ",US&units=imperial" + "&APPID=0b5b970e132186e1aaf9cb44427da110";
  fetch(url2)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let forecast = "";
      for (let i=0; i < json.list.length; i++) {
  forecast += "<div class='container'>";
	forecast += "<div class='row'><h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2></div>";
	forecast += "<div class='row'>";
	forecast += "<div class='col-sm'><p>Temperature: " + json.list[i].main.temp + "</p>";
	forecast += "<p>High: " + json.list[i].main.temp_max + "</p>";
	forecast += "<p>Low: " + json.list[i].main.temp_min + "</p>";
	forecast += "</div>";
	forecast += "<div class='col-sm'>";
	forecast += '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
	forecast += "<p>" + json.list[i].weather[0].description + "</p></div>";
	forecast += '<div class="col-sm"><p>' + "Humidity: " + json.list[i].main.humidity + '%</p>';
  forecast += '<p>' + "Pressure: " + json.list[i].main.pressure + " hPa</p></div>";
  forecast += '<div class="col-sm"><p>' + "Wind Speed: " + json.list[i].wind.speed + " mph</p>";
  forecast += '<p>' + "Wind Direction: " + json.list[i].wind.deg + " &deg;</p></div></div>";
	forecast += "</div>";
      }
      forecast += "</div>";
      document.getElementById("forecastResults").innerHTML = forecast;
    });
});

