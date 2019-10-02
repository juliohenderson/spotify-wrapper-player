import convertToHumanTime from './ConvertToHumanTime';

const createMarkup = (tracks) => (
  tracks.map((track) => `
    <div class="music" data-track-preview="${track.preview_url}">
      <p class="music-number">${track.track_number}</p>
      <p class="music-title">${track.name}</p>
      <p class="music-duration">${convertToHumanTime(track.duration_ms)}</p>
    </div>
`).join('')
);

export default (data, element) => {
  const el = element;
  const markup = createMarkup(data);

  el.innerHTML = markup;
};
