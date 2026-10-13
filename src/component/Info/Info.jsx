import './Info.css'

const Info = ({product , img , who}) => {
  return (
    <div className='info'>

        <p className='pagename'>{product}</p>
      <div className='person'>  <img className='imguser' src={img} alt="" />
        <p>{who}</p>
        </div>
    </div>
  )
}

export default Info