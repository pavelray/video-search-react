import axios from 'axios';

const KEY = "AIzaSyAzGwDUAUMVktXWZ1OFbkvO8APfrrNRqN0";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 10,
        key: KEY
    }
});