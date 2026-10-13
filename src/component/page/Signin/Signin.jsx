import { useState } from 'react'
import './Signin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const Signin = () => {
    const navigate = useNavigate();
    const [formdata ,setformdata] = useState({
      email:"",
      password:"",
      device_id:"1"
    })  
    const handleLogin = (e)=>{
      setformdata({
        ...formdata ,
        [e.target.name]:[e.target.value]
      })
    }
   
   

    const send = (event)=>{
        event.preventDefault()
        const data = new FormData()
        data.append("email" , formdata.email)
        data.append("password" , formdata.password)
        data.append("device_id" , "1")
        
    axios.post("https://vica.website/api/login" ,data,{
        headers : {
                        "Content-Type" : "application/json"
                            
                    } 
    }).then(res => {
 
        console.log(res) ,
        localStorage.setItem("token" , `Bearer ${res.data.data.token}`)
        navigate("/item")
    }) 
    
    .catch(error=>alert(error))
    
    }
  return (
    <div className='all'>

        <form className='for'>
        <h1> Sign In </h1>
        <p> Please enter your email and password to continue  </p>
       
      <div className='l1'><p>Email</p>  <input type="email" placeholder='Email' name='email' value={formdata.email} onChange={handleLogin} /></div>
      <div className='l1'><p>Password</p>  <input type="password"  placeholder='********' name='password' value={formdata.password} onChange={handleLogin}/></div>
        <input onClick={()=>send(event)} className='submit' type="submit" value = "Sign In "/>

        <p className='Dhave'>Don’t have an account? <span  onClick={()=>{navigate('/')}} className='up'>Sign Up</span></p>
        </form>
    </div>
  )
}

export default Signin