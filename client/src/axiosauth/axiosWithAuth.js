import axios from 'axios';

export const axiosWithAuth = (name, pass) => {
  

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'username': `${name}`,
            'password': `${pass}`,
        },
    });
};