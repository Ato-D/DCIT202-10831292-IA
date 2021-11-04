import axios from "axios";

const instance = axios.create({
    baseURL: "https://v1-sneakers.p.rapidapi.com/v1"
})

export default instance