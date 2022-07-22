let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let answerAboutLastFilm = prompt('Один из последних просмотренных фильмов?', '');
let answerAboutRating = prompt('На сколько оцените его?');

personalMovieDB.movies[answerAboutLastFilm] = answerAboutRating;

