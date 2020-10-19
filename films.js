let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов посмотрел?');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов посмотрел?');
  }
}
start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

console.log(personalMovieDB);

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("Вы не любите кино");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зриетель");
  } else if (personalMovieDB.count >= 30) {
    alert("Вы киноман!");
  } else {
    alert('Error!');
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB)
  }
}

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {

    const favouriteGenres = prompt(`Любимый жанр ${i}?`);
    personalMovieDB.genres[i - 1] = favouriteGenres;

    /* personalMovieDB.ganres[i - 1] = prompt(`Любимый жанр ${i}?`); */

  }
}

//@ ЦИКЛЫ

//* while

/* let i = 0;

while (i < 2) {
  const a = prompt('Последний фильм?'),
        b = prompt('Оценка?');

  personalMovieDB.movies[a] = b;
  i++;
} */

//* do

/* let i = 0;

do {
  const a = prompt('Последний фильм?'),
        b = prompt('Оценка?');

  personalMovieDB.movies[a] = b;
  i++;
}
while (i < 2); */

//* for

function rememberMyFilms() {

  for (let i = 0; i < 7; i++) {

    if (i === 2) {
      break;
    }

    const a = prompt('Последний фильм?'),
          b = prompt('Оценка?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
      personalMovieDB.movies[a] = b;
      alert('Done!');
    } else {
      alert('Error!');
      i--;
    }
  }

}

console.log(personalMovieDB)
