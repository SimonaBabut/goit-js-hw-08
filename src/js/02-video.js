// Importă librăriile necesare
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Selectăm iframe-ul Vimeo din HTML
const iframe = document.querySelector('#vimeo-player');

// Inițializăm player-ul Vimeo
const player = new Player(iframe);

// Obținem timpul de redare salvat în local storage (dacă există)
const savedTime = localStorage.getItem('videoplayer-current-time');

// Dacă există un timp salvat, îl setăm în player
if (savedTime) {
  player.setCurrentTime(savedTime).catch((error) => {
    console.error('Eroare la setarea timpului curent: ', error);
  });
}

// Functia care salvează timpul de redare în localStorage
const saveCurrentTime = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

// Adăugăm un eveniment pentru actualizarea timpului de redare la fiecare schimbare de timp
player.on('timeupdate', throttle(saveCurrentTime, 1000)); // Timpul se actualizează nu mai des de o dată pe secundă
