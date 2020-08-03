// The below code fills in the first row of the table
var movie1 = "Mr. Nobody";
var queryURL = "https://www.omdbapi.com/?t=" + movie1 + "&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // Create and save a reference to new empty table row
  
  const rowEl = $("<tr>");
 
  $("tbody").append(rowEl);
  const tdEl1 = $("<td>").text(response.Title);
  const tdEl2 = $("<td>").text(response.Year);
  const tdEl3 = $("<td>").text(response.Actors);
 
  rowEl.append(tdEl1);
  rowEl.append(tdEl2);
  rowEl.append(tdEl3);

  // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
  // Append the td elements to the new table row
  // Append the table row to the tbody element
});

let movie2 = "Avatar";
var URL = "https://www.omdbapi.com/?t=" + movie2 + "&apikey=trilogy";

$.ajax({
    url: URL,
    method: "GET"
  }).then(function(response) {
  console.log(response);
  console.log(response.Title);
    // Create and save a reference to new empty table row
    
    const rowEl = $("<tr>");
   
    $("tbody").append(rowEl);
    const tdEl1 = $("<td>").text(response.Title);
    const tdEl2 = $("<td>").text(response.Year);
    const tdEl3 = $("<td>").text(response.Actors);
   
    rowEl.append(tdEl1);
    rowEl.append(tdEl2);
    rowEl.append(tdEl3);
  
  });


let movie3 = "Commando";
let QURL = "https://www.omdbapi.com/?t=" + movie3 + "&apikey=trilogy";

$.ajax({
    url: QURL,
    method: "GET"
  }).then(function(response) {
  console.log(response);
  console.log(response.Title);
    // Create and save a reference to new empty table row
    
    const rowEl = $("<tr>");
   
    $("tbody").append(rowEl);
    const tdEl1 = $("<td>").text(response.Title);
    const tdEl2 = $("<td>").text(response.Year);
    const tdEl3 = $("<td>").text(response.Actors);
   
    rowEl.append(tdEl1);
    rowEl.append(tdEl2);
    rowEl.append(tdEl3);
  
  });
// Repeat the above logic to add rows for two more movies of your choice

// BONUS: Once complete, try to make your code as DRY as possible through the use of functions