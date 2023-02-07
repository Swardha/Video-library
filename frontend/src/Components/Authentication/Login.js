import React from 'react'
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../Authentication/authenticate.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    
    useEffect(()=>{
      const auth = localStorage.getItem('authToken')
      if(auth){
         navigate('/')
      }
    })

    const getData = async ()=>{

        console.log( email, password);
        let result = await fetch('http://localhost:5000/login', {
          method:'post',
          body:JSON.stringify({email, password}),
          headers:{
            'Content-Type':'application/json'
          },

        })
        const data = await result.json()
        console.log(data)
        if(result.status === 400 || !data){
          console.log("enter correctly")
        }else{
          localStorage.setItem("authToken", data.authToken)
          localStorage.setItem("userEmail", email)
          console.log(localStorage.getItem("authToken"))
          navigate('/')
        }
      
    }
  return (
    <div className='auth-section'>
       <div className="auth-container" >
        <h1 className='head-1'>Login</h1><br/>
        <input className="auth-input" value={email} type="text" placeholder="Enter Email"
         onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input className="auth-input" type="password" value={password} placeholder="Enter Password" 
        onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <button className='button' onClick={getData} >Login</button>
      </div>
    </div>
  )
}

export default Login
