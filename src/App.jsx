import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './component/page/Signup/Signup'
import Signin from './component/page/Signin/Signin'
import Products from './component/Products/Products'
import Del from './component/Products/Data/Del'
import Add from './component/Products/Data/Add'
import Edit from './component/Products/Data/Edit'
import Logout from './component/Logout/Logout'
import Items from './component/page/Items/Items'




function App() {


  return (
    <>
  
<Routes>
  <Route path="/" element={<Signup/>} />
  <Route path='/signin' element={<Signin/>} />


  <Route path='/item' element={<Items/>} >
 <Route path='' element={ <Products/>}/>
 <Route path='/item/del' element={<Del />}/>
 
 <Route path='/item/edit' element={<Edit
 process = "Edit Products"
 url={`https://vica.website/api/items/${localStorage.getItem("id")}`}
 title1="Proudct Name"
 title2="Price"

 />} /> 

<Route path='/item/add' element={<Add 


/>}/> 

 </Route>

</Routes>
<Logout />
    </>
  )
}

export default App
