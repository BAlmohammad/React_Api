
import { Outlet } from 'react-router-dom'
import Dash from '../../Dash/Dash'
import Info from '../../Info/Info'
import './Items.css'

const Items = () => {


  return (

      <div className='pageproudtcs'>

      <div className='col1'> <Dash img="image/Logo.svg"
      inps={[{icon:"image/perfor.svg" , content : "Dashboard"},{icon:"image/dash.svg" , content : "Products"},{icon:"image/out.svg" , content : "Logout"}]}
      /> </div>
        <div className='row1'>   
          <Info product="Products" img={`${localStorage.getItem("img") || "image/user-icon.svg"}`} who={`${localStorage.getItem("user")|| "user"} `} />
          <div className='col2'>

        
          <Outlet /> 
          
        </div>
        
        </div>

        
    </div>
  )
}

export default Items