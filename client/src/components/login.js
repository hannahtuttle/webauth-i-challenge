import React, {useState} from 'react'
import axios from 'axios'


const Login = props => {
    const [user, setUser] = useState({username: '', password: ''})

    const handleSubmit = event => {
        event.preventDefault()
        axios.post('http://localhost:8001/api/login', user)
        .then(res => {console.log(res)
            localStorage.setItem('user', JSON.stringify(user))
        props.history.push('/users')
        })
        .catch(err => console.log('error from post',err))

    }

    const handleChange = event => {
        setUser({
            ...user,
            [event.target.name]:event.target.value
        })
    }

    return (
       
        <form onSubmit ={event => handleSubmit(event)}>
            <h3>Login</h3>
            <label>Username</label>
            <input 
            name="username"
            type= 'text'
            value={user.username}
            onChange={event => handleChange(event)}
            />
            <label>Password</label>
            <input 
            name= 'password'
            type= 'text'
            value={user.password}
            onChange={event => handleChange(event)}
            />
            <button type='submit'>Login</button>
        </form>)
       
}

export default Login;