import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://myburger-7f009.firebaseio.com/'
})

export default instance