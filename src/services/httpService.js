import axios from 'axios'

const headers = {
  Accept: 'application/json, text/javascript'
}

export const apiService = () => {
  return axios.create({
    headers,
    baseURL: 'https://static-content.bivilabs.com.br/challenges'
  })
}
