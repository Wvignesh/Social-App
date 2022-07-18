import './register.css';

export default function Register() {
  return (
    <div className='login'> 

     <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Vickysocial</h3>
            <span className="loginDesc">Connect with friends and the world around you on Vickysocial.</span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Username" className='loginInput' /> 
                <input placeholder="Email" className='loginInput' /> 
                <input placeholder="password" className='loginInput' /> 
                <input placeholder="password Again" className='loginInput' /> 

                <button className="loginBtn">
                     Sign Up
                </button>
                
                <button className="loginRegisterBtn">
                    Log into Account
                </button>
            </div>
        </div>
     </div>

    </div>
  )
}

