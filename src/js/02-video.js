import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYBACK_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem(PLAYBACK_KEY, evt.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem(PLAYBACK_KEY))
  .catch(function (error) {
    console.error(error);
  });
