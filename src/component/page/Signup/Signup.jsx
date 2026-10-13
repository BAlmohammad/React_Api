import { useState } from 'react'
import './Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
 const navigate = useNavigate()
  const [first_name , setfirst_name]= useState("");
  const [last_name , setlast_name]= useState("");
  const [user_name , setuser_name] = useState("") ;
  const [email ,setemail] = useState("");
  const [password ,setpassword] = useState("");
  const [password_confirmation , setpassword_confirmation] = useState("");
  const [profile_image , setprofile_image] = useState(null)

  const send = (event)=>{
event.preventDefault();
axios.post("https://vica.website/api/register" , {
  first_name , 
  last_name , 
  user_name ,
  email , 
  password , 
  password_confirmation , 
  profile_image 
},{
  headers:{
    "Content-Type": "multipart/form-data"
  }
}).then(res => {
 
  console.log(res) ,
  localStorage.setItem("token" , `Bearer ${res.data.data.token}`),
  localStorage.setItem('img',res.data.data.user.profile_image_url),
  localStorage.setItem('user',res.data.data.user.user_name)
  navigate("/item")
   
})
.catch(error=>console.log(error))
  }
  return (
    <div className='parentup'>

    <form className='signup' onSubmit={(event)=>send(event)}>
    <div className='headsign'><h1>Sign Up</h1><p>Create a account to continue</p></div>
<div className='signbody'>
<div className='line1'><div><p>First Name</p><input type="text" placeholder='First Name' onChange={(event)=>setfirst_name(event.target.value)}/></div>
<div><p>Last Name</p><input type="text" placeholder='Last Name' onChange={(event)=>setlast_name(event.target.value)}/></div>
</div>
<p>User Name</p><input  type="text" placeholder='User Name' onChange={(event)=>setuser_name(event.target.value)}/>

<p>Email</p><input className='email' type="email" placeholder='Email' onChange={(event)=>setemail(event.target.value)}/>
<div className='line1'><div><p>Password</p><input type="password" placeholder='Password' onChange={(event)=>setpassword(event.target.value)} /></div>
<div><p>Confirm</p><input className='line' type="password" placeholder='Confirm'  onChange={(event)=>setpassword_confirmation(event.target.value)}/></div>
</div>
<p>Profile Image</p><input type="file" onChange={(event)=>setprofile_image(event.target.files[0])} />
<input type="submit" className='sub' value={"Sign UP"}/>
<p  className='subsign' onClick={()=>{navigate("/signin")}}>  Already have an account ? <span className='in'>Sign In</span></p>
</div>
    </form>
    </div>
  )
}

export default Signup