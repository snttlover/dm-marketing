import axios from 'axios'

export default ({
    url,
    method,
    params,
    data,
    headers
}) => {
    return axios.create({
        url: `http://localhost:3000/api/${url}`,
        method,
        params,
        data,
        headers,
        withCredentials: true
    }).catch(err => {
        console.log(err);
        throw err
    })
}