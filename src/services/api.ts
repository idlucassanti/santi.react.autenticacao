import axios from 'axios'

const token = localStorage.getItem('auth.token')

export const api = axios.create({
  baseURL: 'https://localhost:7200',
  headers : {
    Authorization: `Bearer ${token}`
  }
})