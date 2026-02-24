
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_Path } from '../../helpers/ApiPath'


const Register_Page = ({showLoginHandler}) => {
  console.log(showLoginHandler)
  const navigate = useNavigate()
  const [username , setUserName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [error , setError] = useState("");
  const [loading , setLoading] = useState("");

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      const response = await fetch(`${API_Path}/vendor/register`,{
        method:'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({username,email,password})
      })

      const data = await response.json();
      if(response.ok){
        console.log(data);
        setUserName();
        setEmail();
        setPassword();
        alert('Vendor registered Successfully');
        navigate('/')
      }
    } catch (error) {
      console.log('registeration failed' , error);
      alert("Registeration Failed")
    }
  }




  return (
    <div className="Register_Page">
        <h2>Register Here</h2>
            <form onSubmit={handleSubmit} className='Register_Table'>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="" value={username}  onChange={(e) => setUserName(e.target.value)}/><br />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="" value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                
                {/* Submit Button */}
                <input type="submit" name="" id="" />
            </form>
            <div className="login">
              <p>Already have  an account please login ? <span onClick={() => navigate('/')}>Login</span></p>
            </div>
        </div>

  )
}

export default Register_Page