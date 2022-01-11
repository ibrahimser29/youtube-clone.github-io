import axios from 'axios';
const KEY = 'AIzaSyCS08gPLapc9mYdDbzHemjnFbnxvpVeSLk';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
