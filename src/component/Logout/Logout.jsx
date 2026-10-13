
import './Logout.css'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigateLogout = useNavigate()
    
 
    const surelogout =()=>{
        navigateLogout('/signin')
        document.querySelector('.sureLogout').classList.remove('nonelogout')
        
    }
    const nonelogout = ()=>{

       document.querySelector('.sureLogout').classList.remove('nonelogout')
        
    }
  return (
 
    <div className='sureLogout' >
        
        <div className='optionLogout'>
          <p className='messageOut'>Are you sure you want to Logout?</p>
          <div className='optionUser'>
            <div className='red' onClick={()=>surelogout()}>Yes</div>
            <div className='blue' onClick={()=>nonelogout()}>No</div>
          </div>
        </div>
      </div>
   
  )
}

export default Logout