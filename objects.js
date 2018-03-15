var playlist = {
  artistName: 'songTitle'
};
function updatePlaylist(playlist, artistName, songTitle) {
  Object['artistName'] = songTitle;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist["artistName"];
}