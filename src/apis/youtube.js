import axios from 'axios'

const KEY = 'AIzaSyD_P5peZVw6s3-OqBaj5e6U9V7WYhCB9rE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 15,
    type: 'video',
    key: KEY,
  },
})
