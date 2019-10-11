document.getElementById("authorSubmit").addEventListener("click", function(event) {
  /*global fetch*/
  /*global moment*/
  event.preventDefault();
  const value = document.getElementById("authorInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://www.googleapis.com/books/v1/volumes?q=+inauthor:" + value;
  
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2>' + value + '\'s Books</h2></div>';
      results += "<div class='row'><div class='col-sm'>";
      for (let i = 0; i < json.items.length; i++) {
        results += '<p>' + json.items[i].volumeInfo.title + '</p>';
      }
      results += "<p>";
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
  //https://www.googleapis.com/books/v1/volumes?q=search+inauthor
  const url = "https://www.googleapis.com/books/v1/volumes?q=" + value + "&key=AIzaSyBFe2MdA8GPSMqKejEr-QcXfHcNVZvU_Wk";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2>Author: ' + json.items[0].volumeInfo.authors[0] + "</h2>";
      results += '<p>' + json.items[0].volumeInfo.description + '</p>';
      //need to give the text some more spacing and probably make it a little bigger
      console.log(json);
      document.getElementById("bookResults").innerHTML = results;
    });
    
});
