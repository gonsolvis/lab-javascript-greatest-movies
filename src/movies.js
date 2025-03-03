// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



function getAllDirectors(moviesArray) {
    const newStringDirectors = moviesArray.map(function (movie) {
        return movie.director;
    })
    return newStringDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesFiltered = moviesArray.filter((movie) => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) { return movie }

    })
    return moviesFiltered.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray == "") return 0;
    let average = moviesArray.reduce((accumulator, currentValue) => {
        if (!currentValue.score) return accumulator;
        else return accumulator + currentValue.score;
    }, 0);
    let totalMovies = moviesArray.length;
    return Math.round((average / totalMovies) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
let average = 0
let filtArray = moviesArray.filter((film) => 
film.genre.includes("Drama"))
if (filtArray.length === 0) {
return 0;}
average = filtArray.reduce((accumulator, currentValue) => {
    if (!currentValue.score) return accumulator;
    else return accumulator + currentValue.score;
}, 0);
let totalMovies = filtArray.length;
return (Math.round((average / totalMovies) * 100) / 100)}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
    let newArr = JSON.parse(JSON.stringify(moviesArray))
        newArr = newArr.sort((a, b) => {
        let YearOne = a.year 
        let YearTwo = b.year
    if ( YearOne < YearTwo) return -1
    if ( YearOne > YearTwo) return 1
    if (YearOne == YearTwo) {
            if (a.title < b.title)  return -1
            else if (a.title > b.title ) return 1            
            else return 0 }

            })
return newArr


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let result = 0
    let moviesCopy = JSON.parse(JSON.stringify(moviesArray))
        moviesCopy.sort((a, b) => {
            return a.title.localeCompare(b.title);

        })

    if ( moviesCopy.length > 20) 
    {result = moviesCopy.slice(0, 20)
    return result.map((movie) => movie.title) }
    else return moviesCopy.map((movie) => movie.title)


}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
