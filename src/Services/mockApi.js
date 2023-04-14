import axios from 'axios';

axios.defaults.baseURL = 'https://643933484660f26eb1ace6ef.mockapi.io';

export const addContactApi = contact => {
    return axios.post('/contacts', contact)
};

export const getContactApi = () => {
    return axios.get('/contacts')
};

export const removeContactApi = id => {
    return axios.delete(`/contacts/${id}`)
};