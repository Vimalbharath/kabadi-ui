import React, { useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
//import { Button, Form, Grid, Segment, Message } from 'semantic-ui-react'
import { useAuth } from '../Context/AuthContext'
import { api } from '../misc/api'
import { handleLogError } from '../misc/Helpers'

function Login() {
  const Auth = useAuth()
  const isLoggedIn = Auth.userIsAuthenticated()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false)

  const handleInputChange = (event) => {
   const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
       default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!(username && password)) {
      setIsError(true)
      return
    }

    try {
      const response = await api.authenticate(username, password)
      const { id, name, role } = response.data
      const authdata = window.btoa(username + ':' + password)
      const authenticatedUser = { id, name, role, authdata }

      Auth.userLogin(authenticatedUser)

      setUsername('')
      setPassword('')
      setIsError(false)
    } catch (error) {
      handleLogError(error)
      setIsError(true)
    }
  }

  if (isLoggedIn) {
    return <Navigate to={'/'} />
  }

  return (
   <div className="login-container"> 
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={username} 
            onChange={handleInputChange} 
            placeholder="Enter Username" 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password} 
            onChange={handleInputChange} 
            placeholder="Enter Password" 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {isError && <div className="error">{isError}</div>} 
      <p>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
    </div>
  );
};

export default Login;