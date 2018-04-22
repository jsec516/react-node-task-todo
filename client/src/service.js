import axios from 'axios';

export function findTask(params) {
    let query;
    if(params) {
        query = { params: params };
    }
    return axios.get(process.env.REACT_APP_API_URL + 'tasks', query)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        console.log(err);
    });
}

export function createTask(payload) {
    return axios.post(process.env.REACT_APP_API_URL + 'tasks/create', payload)
    .then(response => {
        return true;
    })
    .catch(err => {
        console.log(err);
    });
}