import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000"})

export const getUser = (userId) => API.get(`/user/${userId}`)
export const updateUser = (id, formData) => API.put(`/user/${id}`,formData)
export const getAllUser = ()=> API.get('/user')
export const followeUser = (id, data)=> API.put(`/user/${id}/follower`, data)
export const unFolloweUser = (id, data)=> API.put(`/user/${id}/unfollow`, data)