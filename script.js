// The below code fills in the first row of the table
var movie = "Mr. Nobody";
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
console.log(response);
console.log(response.Title);
  // Create and save a reference to new empty table row
  
  const rowEl = $("<tr>");
    
  const tdEl1 = $("<td>");
  const tdEl2 = $("<td>");
  const tdEl3 = $("<td>");
  rowEl.apendTo(".movies-table");
  tdEl1.text(response.Title);
  tdEl2.text(response.Year);
  tdEl3.text(response.Actors);
  rowEl.append(tdEl1);
  rowEl.append(tdEl2);
  rowEl.append(tdEl3);

  // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
  // Append the td elements to the new table row
  // Append the table row to the tbody element
});

// Repeat the above logic to add rows for two more movies of your choice

// BONUS: Once complete, try to make your code as DRY as possible through the use of functions