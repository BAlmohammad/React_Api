import { useEffect, useState } from 'react'
import './Add.css'
import Edit from './Edit'

const Add = () => {
   



  return (
    <div className='add' >
    
    <Edit 
  
    process = "Add Products"
url="https://vica.website/api/items"
title1="Proudct Name"
title2="Price"
    />
 
    </div>
  )
}

export default Add

