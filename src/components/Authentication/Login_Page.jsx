
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_Path } from '../../helpers/ApiPath'

const Login_Page = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_Path}/vendor/login`,{
                method:"POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({email,password})
            })
           
            const data = await response.json();
            if(response.ok){
                console.log(data);
                setEmail("");
                setPassword("");
                alert("Login Success")
                localStorage.setItem('loginToken' , data.token)
                navigate('/Home_Page')
            }

        } catch (error) {
            console.log("Login Failed" , error);
            alert("Login Failed")
        }
    }

  return (
    
    <div className="Login">
       <div className="Authentication_Page">
               <div className="Welcome">
                   <h2>Hello Admin Welcome</h2>
                   <h3>Please Login</h3>
               </div>
           </div>

        <form onSubmit={handleLogin} className='Login_Table'>
            <label htmlFor="email">Email</label>
            <input type="text"  placeholder="Enter your email" name="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)}/><br /><br />
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Enter Your password" name="password" id=""  value={password} onChange={(e) =>  setPassword(e.target.value)}/>
            <br /><br />
            <input type="Submit" name="" id="" />
        </form>
        <div className="register">
           <p>Already have account please login ? </p>
           <p>Do you want to Create Account / <span onClick= {() => navigate('/register')}>Register Here</span></p>
        </div>
    </div>
  )
}

export default Login_Page