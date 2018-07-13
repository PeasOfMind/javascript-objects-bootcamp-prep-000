let playlist = {};

function updatePlaylist(playObj, artist, song){
  Object.assign(playObj, {artist: song});
  return playObj;
}