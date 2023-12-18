import React from 'react'
import './prfile.css'
function prfile({image,email,name,time,post}) {
  return (
   <>
    <div className='person1'>
        <div className='parent1'>
           <div className='photo'>
            <img src={image} alt="Leslie" height={50} width={50}/>
           </div>
           <div className='words'>
              <p>{name}</p>
              <span>{email}</span>
           </div>
        </div>

        <div className='parent2'>
           <p>{post}</p>
           <span>{time}</span>
        </div>
    </div>
   </>
  )
}

export default prfile
