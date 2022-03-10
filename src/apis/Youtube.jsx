import Axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: API_KEY
    }
})