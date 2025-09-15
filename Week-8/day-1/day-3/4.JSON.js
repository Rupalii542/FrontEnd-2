let movie = { title: "Inception", year: 2010, rating: 8.8 };

let jsonString = JSON.stringify(movie);
let parsedMovie = JSON.parse(jsonString);

console.log(parsedMovie.title);
