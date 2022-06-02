'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
    b = prompt('На сколько оцените его', '');
  
   if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    i--;
  } 
 }
};

rememberMyFilms(); 

  function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      console.log('Вы киноман');
    } else {
      console.log('Ошибка');
    }
  }

  detectPersonalLevel();

  function showMyDB(data) {
    if( data == false) {
      console.log(personalMovieDB);
    }
  }

  showMyDB(personalMovieDB.privat);

  function writeYourGenres(data) {
    for (let i = 1; i <=3; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`);
      data[i - 1] = genre;
    }
  }

writeYourGenres(personalMovieDB.genres);


/* const validAnswer = prompt('Введите ваш логин', '');
if (validAnswer == 'Админ') {
  prompt("Пароль", '');
} else if (validAnswer != 'Админ') {
  alert('Я вас не знаю');
} else if (validAnswer == '' || validAnswer == null) {
  alert('Отменено');
}
let message;
login = '';
message = (login == 'Сотрудник') ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' :
'';
console.log(message); */