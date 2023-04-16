let movienamereference = document.getElementById("movie-name");
let btnsearch = document.getElementById("search-button");
let result = document.getElementById("answer");

let getmovie = () => {
	let moviename = movienamereference.value;
	let url = `http://www.omdbapi.com/?t=${moviename}&apikey=3a1e999a`;
	if (moviename.length <= 0) {
		result.innerhtml = `<h3>Please Enter a movie name</h3>`;
	} else {
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				console.log(data);
				console.log(data.Poster);
				console.log(data.Title);
				console.log(data.imdbRating);
				console.log(data.Rated);
				console.log(data.Year);
				console.log(data.Runtime);
				console.log(data.Genre);
				console.log(data.Plot);
				console.log(data.Actors);
				if (data.Response == "True") {
					result.innerHTML = `<div class="info">
                    <img src=${data.Poster} class="poster">
                    <div>
                        <h2>${data.Title}</h2>
                        <div class="rating">
                            <h4>⭐</h4>
                            <h4>${data.imdbRating}</h4>
                        </div>
                        <div class="details">
                            <span>${data.Rated}</span>
                            <span>${data.Year}</span>
                            <span>${data.Runtime}</span>
                        </div>
                        <div class="genre">
                            <div>${data.Genre.split(",").join(
															"</div><div>"
														)}</div>
                        </div>
                    </div>
                </div>
                <h3>Plot:</h3>
                <p>${data.Plot}</p>
                <h3>Cast:</h3>
                <p>${data.Actors}</p>
                `;
				} else {
					result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`;
				}
			})
			.catch(() => {
				result.innerHTML = `<h3 clas="msg">Error Occured</h3>`;
			});
	}
};
btnsearch.addEventListener("click", getmovie);
Window.addEventListener("load", getmovie);
