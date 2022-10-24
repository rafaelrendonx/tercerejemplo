import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = (nameObject) => {
    return axios.post(baseUrl, nameObject)
}

const update = (nameObject) => {
    return axios.put(`${baseUrl}/${nameObject.id}`, nameObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export { getAll, create, update, deletePerson } 