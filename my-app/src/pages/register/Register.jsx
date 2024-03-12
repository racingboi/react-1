import React, { useState } from 'react'
import axios from 'axios';
export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [img, setImg] = useState('');
  const register = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
        img
      });

      console.log(response.data);
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };
  
  return (
    <>
      <div>
        <h2>Registration Form</h2>
        <form>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="button" onClick={register}>
            Register
          </button>
        </form>
      </div>
    </>
  )
}
