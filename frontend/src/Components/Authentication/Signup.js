import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Authentication/authenticate.css';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const navigate = useNavigate()

   
    useEffect(()=>{
      const auth = localStorage.getItem('authToken')
      if(auth){
         navigate('/login')
      }
    })

    const getData =async ()=>{
        console.log(name, email, password, cpassword);
        const result = await fetch('http://localhost:5000/signin', {
          method:'post',
          body:JSON.stringify({name, email, password, cpassword}),
          headers:{
            'Content-Type':'application/json'
          },
        })
        const data = await result.json()
        console.log(data)
        if(result){
   
          navigate('/login')
        }
    }
  return (
    <div>
      <div className="auth-container" >
        <h1 className='head-1'>Signup</h1><br/>
        <input className="auth-input" type="text" value={name} placeholder="Enter Name"
         onChange={(e)=>setName(e.target.value)} />
        <br/>
        <input className="auth-input" value={email} type="text" placeholder="Enter Email"
         onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input className="auth-input" type="password" value={password} placeholder="Enter Password" 
        onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <input className="auth-input" type="password" value={cpassword} placeholder="Confirm Password"
         onChange={(e)=>setCPassword(e.target.value)} />
        <br/>
        <button className='button' onClick={getData} >Signin</button>
      </div>
    </div>
  )
}

export default Signup
