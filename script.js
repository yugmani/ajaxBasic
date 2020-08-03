
// Array of some selected movies 
let movies = ["Interstellar", "Mr. Nobody", "Avatar", "Commando"]

//calling function to get movies information from api.
moviesApi(movies);

    function moviesApi(arr) {
        for (let i=0; i<movies.length; i++){
            let queryURL = "https://www.omdbapi.com/?t=" + arr[i] + "&apikey=trilogy";
        
            $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
                //calling function to display response to HTML
                displayResult(response);
            });

        }
    }

    //function to display result in HTML
    function displayResult(record) {

        let characters = record.Actors.split(",");
        let htm = `
            <div id=${record.Title} class="card" style="width: 18rem;">
            <img src=${record.Poster} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${record.Title}</h5>
                <p class="card-text">${record.Year}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item font-weight-bold" >Actors</li>`
        for (let j=0; j<characters.length; j++){
            htm += `<li class="list-group-item">${characters[j]}</li>`
        
            }
        htm += `</ul> </div>`;

        $("#movies-card").append(htm);
    }

// Repeat the above logic to add rows for two more movies of your choice

// BONUS: Once complete, try to make your code as DRY as possible through the use of functions