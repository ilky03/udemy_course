const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

flag: for (let i = 0; i < numberOfFilms; i++) {

    let answerAboutLastFilm = prompt('Один из последних просмотренных фильмов?', '');

    if (answerAboutLastFilm == null || answerAboutLastFilm == '' || answerAboutLastFilm.length >= 50) {
        i--;
        continue flag;
    }

    let answerAboutRating = prompt('На сколько оцените его?');

    if (answerAboutRating == null || answerAboutRating == '' || answerAboutRating.length >= 50) {
        i--;
        continue flag;
    }

    personalMovieDB.movies[answerAboutLastFilm] = answerAboutRating;

}

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}



