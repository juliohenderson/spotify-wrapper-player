import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('AlbumTracks', function () {
  let data;
  let data2;
  let markup;
  let markup2;

  beforeEach(function () {
    data = [{
      id: '6FVYwnVrnAEIRnY3bHJb46',
      name: 'Beast and the Harlot',
      duration_ms: 343600,
      preview_url: 'https://p.scdn.co/mp3-preview/4c0d4abd77a4cdabd09a3958d73fffe7d2ec40f6?cid=774b29d4f13844c495f206cafdad9c86',
      track_number: 1,
    }];

    data2 = [
      {
        id: '6FVYwnVrnAEIRnY3bHJb46',
        name: 'Beast and the Harlot',
        duration_ms: 343600,
        preview_url: 'https://p.scdn.co/mp3-preview/4c0d4abd77a4cdabd09a3958d73fffe7d2ec40f6?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
      },
      {
        id: '6FVYwnVrnAEIRnY3bHJb46',
        name: 'Beast and the Harlot',
        duration_ms: 343600,
        preview_url: 'https://p.scdn.co/mp3-preview/4c0d4abd77a4cdabd09a3958d73fffe7d2ec40f6?cid=774b29d4f13844c495f206cafdad9c86',
        track_number: 1,
      },
    ];

    markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/4c0d4abd77a4cdabd09a3958d73fffe7d2ec40f6?cid=774b29d4f13844c495f206cafdad9c86">
      <p class="music-number">1</p>
      <p class="music-title">Beast and the Harlot</p>
      <p class="music-duration">${convertToHumanTime(343600)}</p>
    </div>
`;

    markup2 = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/4c0d4abd77a4cdabd09a3958d73fffe7d2ec40f6?cid=774b29d4f13844c495f206cafdad9c86">
      <p class="music-number">1</p>
      <p class="music-title">Beast and the Harlot</p>
      <p class="music-duration">${convertToHumanTime(343600)}</p>
    </div>

    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/4c0d4abd77a4cdabd09a3958d73fffe7d2ec40f6?cid=774b29d4f13844c495f206cafdad9c86">
      <p class="music-number">1</p>
      <p class="music-title">Beast and the Harlot</p>
      <p class="music-duration">${convertToHumanTime(343600)}</p>
    </div>
`;
  });

  it('should cread and append the markup given a correct data', function () {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append the markup when more than 1 item', function () {
    const element = document.createElement('div');
    renderAlbumTracks(data2, element);

    expect(element.innerHTML).to.be.eql(markup2);
  });
});
