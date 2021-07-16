import axios from 'axios';

const KEY = 'AIzaSyBjgHnBCsga0AE-IZ3VNfwZqcUxAObd85I';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
