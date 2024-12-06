import './register.scss'
import { Link, useNavigate } from "react-router-dom"
import Login from '../login/login'
import axios from 'axios'


import { useState } from 'react'
function Register() {

  

  const { error, setError } = useState("")

  const navigate = useNavigate()
  // HERE e STAND FOR EVENTS
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);


    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");


    try {

      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username, email, password
      });

      navigate("/login")
    } catch (err) {
      // there is a problem with error response here i'll do it later
      setError(err.response.data.message)
      console.log(err)
    }


  }
  return (
    <div className='register'>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input name='username' required minLength={3} maxLength={20} type="text" placeholder='Username' />
          <input name='email' type="text" placeholder='Email' />
          <input name='password' type="password" placeholder='Password' />
          <button>Register</button>
          {error && alert({error})}
          <Link to="/login">Do you have an account</Link>
        </form>

      </div>

      <div className="imgContainer">
        <img src="/" alt="" />
      </div>
    </div>
  )
}
export default Register