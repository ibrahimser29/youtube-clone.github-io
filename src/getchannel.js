import axios from 'axios';
const KEY = 'AIzaSyCS08gPLapc9mYdDbzHemjnFbnxvpVeSLk';
export default axios.create({
  baseURL: 'http://martialdidit.github.io/YoutubeID/',
  params: {
    part: 'snippet',
    maxResults: 11,
    key: KEY,
  },
});
