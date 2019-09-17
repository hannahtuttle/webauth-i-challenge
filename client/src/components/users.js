import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {axiosWithAuth} from '../axiosauth/axiosWithAuth.js'

const Users = () => {
    const [users, setUsers]= useState([])
    console.log('user', JSON.parse(localStorage.getItem('user')))
    
    useEffect(() => {
        const header = JSON.parse(localStorage.getItem('user'))
       const name = header.username
       const pass = header.password
        axiosWithAuth(name, pass).get('http://localhost:8001/api/users')
        .then(res => {
           console.log(res.data) 
           setUsers(res.data)
        })
        .catch(err => console.log('error from /get', err.responce))
    }, [])
    return(
    <>
        {users.map(user => {
            return (<div key={user.id}>
                <p>{user.username}</p>
                <p>{user.password}</p>
            </div>)
        })}
    </>) 
}

export default Users;