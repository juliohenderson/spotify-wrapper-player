import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');
const albumList = document.getElementById('album-list');

export default () => {
  albumList.addEventListener('click', (e) => {
    const { target } = e;

    spotify.album.getAlbum(target.getAttribute('data-album-id'))
      .then((data) => renderAlbumInfo(data, albumInfo))
      .then((data) => renderAlbumTracks(data.tracks.items, albumTracks));
  });
};
