import './Products.css'
import {useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate()
    const [data , setdata] = useState([])
    const [getdata , setgetdata] = useState(false)
    const addprod = ()=>{
    navigate('/item/add')
    }

    const listdel = (id)=>{
const d = document.querySelector('.sureDelete')
d.classList.add('showdelete')

 localStorage.setItem("id" , id)

    }
    const pageEdit = (id)=>{
      localStorage.setItem("id" , id)
     navigate('/item/edit')


    }

          

    const nonedel = ()=>{
      const d = document.querySelector('.sureDelete')
      d.classList.remove('showdelete')
          }

    useEffect(()=>{
    axios.get("https://vica.website/api/items" ,{
      headers:{
          "Authorization":localStorage.getItem("token")
      }
  })
  .then(res=>{setdata(res.data)})
  .catch(error=>{console.log(error)
  })
  
  },[getdata])
  
  const delprod = ()=>{

    axios.delete(`https://vica.website/api/items/${localStorage.getItem("id")}`,{
      headers :{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    }).then(res=>console.log(res.data))
    .catch(error=>console.log(error))
    setgetdata(!getdata)
    nonedel()
              }


    return (
      <div className="parentProducts">
  
      <div className="line1" ><p className="manage">Manage Products</p> 
      <div className="add" onClick={()=>addprod()}>+ Add Products</div>
  
     
      
      </div>
  
      <div className="allproducts">
      
      <div className="one two">
        <span className='idProduct'>#</span>
        <p>Products Name</p>
        <p>Price</p>
        <p>Image</p>
        <p>Action</p>
       
      </div>
  
      {data.map((pro , index)=>{
         
        return(
  
       

  <div className="one" key={index}>

        <span className='idProduct'>{index}</span>
        <p>{pro.name}</p>
        <p>{pro.price}</p>
        <img className="imgapi" src={pro.image_url} alt="" />
        <div className="process">
          <div className="add" onClick={()=>pageEdit(pro.id)}><img src="/image/pencil-write.svg" alt="" /></div>
          <div className="delete" onClick={()=>listdel(pro.id)}><img src="/image/bin.svg"alt="" /></div>
        </div>
  
  
        <div className='sureDelete' >
        <div className='divOption'>
          <p className='message'>Are you sure you want to delete the product?</p>
          <div className='userOption'>
            <div className='red' onClick={()=>delprod(pro.id)}>Yes</div>
            <div className='blue' onClick={()=>nonedel()}>No</div>
          </div>
        </div>
      </div>
     
  </div>
  

  
  )})}
      
      </div>


      
      </div>
    )
}

export default Products