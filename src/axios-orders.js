import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-27e6e.firebaseio.com/'
});

export default instance;