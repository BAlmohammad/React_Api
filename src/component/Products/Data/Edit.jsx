

import { useEffect, useState } from 'react'
import './Edit.css'
import axios from 'axios'
import img from '/image/upload.png' ;
const Edit = ({process,url,title1 , title2 } ) => {
  const [getda , setgetda] = useState(false)
  const [Image , setImage]  = useState(img)  
  const [name ,setname] = useState('')
  const [price , setprice] = useState('') 
  const formdata= new FormData();
  formdata.append('name' , name)
  formdata.append('price',price)

  const imagefile = document.querySelector('#addimg')?.files[0]

  if(imagefile){
    formdata.append('image' , imagefile)
  }
  if(process =='Edit Products'){
    formdata.append('_method','put')
  }
 
  const save = ()=>{
    setgetda(!getda)
  }

useEffect(()=>{  
  
  console.log(document.querySelector('#addimg').files[0])
    console.log(url)
    axios.post(url , formdata 
     ,
      {headers:{
Authorization:`Bearer ${localStorage.getItem('token')}` ,
Accept : "application/json " ,
"Content-Type" : "multipart/form-data"
    }
  }).then(res=>{ console.log(res)
    
  })
  .catch(error=>(console.log(error)))
  
},[getda])
      

const [c , setc] = useState('')
useEffect(()=>{
axios.get(url,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`,
            "Accept":"application/json"
        }
    }).then(   res=> {setname(res.data.name);
      setprice(res.data.price)
    })
    .catch(error=>(console.log(error)))
  },[])

  return (
    <div>
        <h1>{process}</h1>
        <div className='editprod'>
            <div className='side1'>
                <p>{title1}</p>
                <input id='in1' type="text" value={name}  onChange={(event)=>setname(event.target.value)}/>
                <p>{title2}</p>
                <input id='in2' type="text" value={price} onChange={(event)=>setprice(event.target.value)}/>
               
                
            </div>
            
            <div className='side2'>
          <div  className='imgside2' > 
          <form  onClick={ ()=>document.querySelector('.input-field').click()}>
    <input type="file" className='input-field' hidden id='addimg'
    onChange={({target:{files}})=>{
      files[0]
      if(files){
        setImage(URL.createObjectURL(files[0]))
      }
    }}
    />
    {Image ?
      <img  src={Image} width={300} height={350}/> :<img src={c.image_url} className='defaultimage' width={100} height={100}  />
    }
   
    
    </form>
           </div>
        
          
            </div>
        </div>
      <div className='divsave' onClick={()=>save()} >Save</div>
    </div>
  )
}

export default Edit