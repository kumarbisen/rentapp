import './login.scss'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='login'>
        <div className="formContainer">
          <form >

            

            <h1>Welcome back</h1>
            <input type="text"  required maxLength={20} minLength={3} name='username' placeholder='Username' />
            <input type="password" name='password' placeholder='Password' />
            <button>Login</button>
            <Link to="/register">{"Don't"} you have an account?</Link>

          </form>
        </div>
        <div className="imgContainer">

        </div>
    </div>
  )
}
export default Login