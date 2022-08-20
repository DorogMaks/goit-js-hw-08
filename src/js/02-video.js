import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYBACK_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (evt) {
  localStorage.setItem(PLAYBACK_KEY, evt.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(localStorage.getItem(PLAYBACK_KEY))
  .catch(function (error) {
    console.error(error);
  });
