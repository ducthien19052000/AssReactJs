import axios from 'axios'

export default axios.create({
    baseURL:"https://restapiangular.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
})