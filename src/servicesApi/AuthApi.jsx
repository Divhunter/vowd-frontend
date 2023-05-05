import axios from "axios"
import { getItem, addItem, removeItem } from './LocalStorage'

export function hasAuthenticated() {
    const token = getItem('token')
    const result = token ? token.result : false
    if (result === false) {
        removeItem('token')
    }
    return result
}

export function login(credentials) {
    axios.post('https://vowd-project-app-api.onrender.com/api/auth/login', credentials)
    .then(res => JSON.stringify(res.data.token))
    .then(token => {
        addItem('token', token)
        return true
    })
}

export function logout() {
    removeItem('token')
}