document.getElementById("authorSubmit").addEventListener("click", function(event) {
    /*global fetch*/
    /*global moment*/
      event.preventDefault();
  const value = document.getElementById("authorInput").value;
  if (value === "")
    return;
  console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=0b5b970e132186e1aaf9cb44427da110";
    //fix this so that it leads to the author api^
    
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
      //edit this so that we get the output from the api that we want^
      document.getElementById("authorResults").innerHTML = results;
      console.log(json);
    });
});



document.getElementById("bookSubmit").addEventListener("click", function(event) {
    /*global fetch*/
    /*global moment*/
      event.preventDefault();
  const value = document.getElementById("bookInput").value;
  if (value === "")
    return;
  console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=0b5b970e132186e1aaf9cb44427da110";
    //fix this so that it leads to the book api^
    
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
      //edit this so that we get the output from the api that we want^
      document.getElementById("bookResults").innerHTML = results;
      console.log(json);
    });
});
