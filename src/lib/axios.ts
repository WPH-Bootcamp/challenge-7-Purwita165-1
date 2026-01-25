import axios from "axios"

const instance = axios.create({
  baseURL: "https://restaurant-be-400174736012.asia-southeast2.run.app",
  headers: {
    "Content-Type": "application/json",

    // 🔧 sementara: token dummy supaya backend mau jawab
    Authorization: "Bearer dummy-token-for-challenge-7",
  },
})

export default instance
