import axios from 'axios'
import './login.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Login() {
  const { error, setError } = useState("")
  const {isloading, SetIsloading} = useState(false)

  // const navigate = useNavigate()
  // HERE e STAND FOR EVENTS
  const handleSubmit = async (e) => {
    e.preventDefault()
    SetIsloading(true)
    setError("")
    const formData = new FormData(e.target);


    const username = formData.get("username");
    
    const password = formData.get("password");


    try {

      const res = await axios.post("http://localhost:8800/api/auth/login", {
        username, password
      });

      // navigate("/login")
    } catch (err) {
      // there is a problem with error response here i'll do it later
      setError(err.response.data.message)
      console.log(err)
    }finally{
      SetIsloading(false)
    }


  }
  return (
    <div className='login'>
        <div className="formContainer">
          <form  onSubmit={handleSubmit}>
            <h1>Welcome back</h1>
            <input type="text"  required maxLength={20} minLength={3} name='username' placeholder='Username' />
            <input type="password" name='password' placeholder='Password' />
            <button disabled={isloading}>Login</button>
            {error && <span>{error}</span>}
            <Link to="/register">{"Don't"} you have an account?</Link>

          </form>
        </div>
        <div className="imgContainer">

        </div>
    </div>
  )
}
export default Login