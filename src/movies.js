// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const allDirectors = [
  "David Lynch",
  "Pedro Almodovar",
  "Quentin Tarantino",
  "Steven Spielberg",
];

function getAllDirectors(moviesArray) {
  return moviesArray
    .map(function (movies) {
      return movies.director;
    })

    .filter(function (director, index, srcMovies) {
      return srcMovies.indexOf(director) === index;
    });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(function (movies) {
    return (
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const avg = moviesArray.reduce(function (acc, movie) {
    if (!movie.score) {
      movie.score = 0;
    }

    return acc + movie.score;
  }, 0);

  return parseFloat((avg / moviesArray.length).toFixed(2));
}

//console.log(scoresAverage([{ score: 8 }, { score: 9 }, { score: 9 }]));

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  const avgDramaMovieScore = scoresAverage(dramaMovies);
  return avgDramaMovieScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderMoviesByYear = [...moviesArray];
  const orderingMovies = orderMoviesByYear.sort((a, b) => {
    if (a.year === b.year) {
      return a.title < b.title ? -1 : 1; // if the year is the same it orders by title
    } else {
      return a.year < b.year ? -1 : 1; // if not it orders by year
    }
  });
  return orderingMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const orderMoviesByYear = [...moviesArray];
  const orderingMovies = orderMoviesByYear.sort((a, b) => {
    return a.title < b.title ? -1 : 1; // if the year is the same it orders by title
  });
  const theFirst20Titles = orderingMovies.slice(0, 20);
  const onlyTheTitles = theFirst20Titles.map(function (movie) {
    return movie.title;
  });
  return onlyTheTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
