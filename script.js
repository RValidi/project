const numberOfFilms = prompt('Сколько фильмов посмотрел?');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Последний фильм?');
const b = prompt('Оценка?');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB)