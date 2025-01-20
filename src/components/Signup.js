import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { api } from '../misc/api';
import { handleLogError } from '../misc/Helpers';

const Signup = () => {
  const Auth = useAuth()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null); // Use a single state for error message

  const navigate = useNavigate();
  const { login } = useAuth(); // Assuming login function from AuthContext

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password || !name || !email) {
      setError('Please fill in all fields.');
      return;
    }

    const user = { username, password, name, email };

    try {
      const response = await api.signup(user);
      const { id, name, role } = response.data;
      const authdata = window.btoa(username + ':' + password)
      const authenticatedUser = { id, name, role, authdata }

      Auth.userLogin(authenticatedUser)
      navigate('/'); // Redirect to home page
    } catch (error) {
      handleLogError(error);
      let errorMessage = 'Signup failed.';
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        errorMessage = errorData.message || errorMessage;
      }
      setError(errorMessage);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
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
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter Email"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      {error && <div className="error">{error}</div>}
      <p>
        Already have an account?{' '}
        <NavLink to="/login" color="teal">
          Login
        </NavLink>
      </p>
    </div>
  );
};

export default Signup;