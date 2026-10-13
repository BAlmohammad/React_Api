


import './Dash.css'



const Dash = ({img , inps }) => {


const setchild = (index)=>{
 
   const x = document.querySelectorAll(".option")

  
   x.forEach(element => {
   
   element.classList.remove('active')
   
});
x[index].classList.add('active')
if(x[index]==x[x.length-1]){

document.querySelector('.sureLogout').classList.add('nonelogout')
window.scrollTo({
   top: 0,
   left: 0,
   behavior: "smooth",
 });
 

}

}


    return (


    <div className='dash'>
        <img className='dashlogo' src={img} alt="" />
        <ul className='ulinput'>
         {inps.map((item , index)=>{return(
            <li className='option' key={index}  onClick={()=>setchild(index)} > <img style={{"width":"12%"}}  src={item.icon} /> <p>{item.content} </p> </li>
            
         )})} 
        
        </ul>
       
        

    </div>
   
  )
}

export default  Dash






