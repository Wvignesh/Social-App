import './login.css';

export default function Login() {
  return (
    <div className='login'> 

     <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Vickysocial</h3>
            <span className="loginDesc">Connect with friends and the world around you on Vickysocial.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Email" className='loginInput' /> 
                
                <input placeholder="password" className='loginInput' /> 

                <button className="loginBtn">
                    Log In
                </button>
                <span className="loginForgot">
                    Forgot password
                </span>
                <button className="loginRegisterBtn">
                    Create a New Account
                </button>
            </div>
        </div>
     </div>

    </div>
  )
}

