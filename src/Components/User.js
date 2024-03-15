import React from 'react'
import {useState} from 'react'
 const User = ({name}) => {
    const[count ]=useState(0);

   
  return (
    <div className='user-card'>
        <h1>Count:{count}</h1>
        <h2>Name:{name}</h2>
        <h2>Location:Tirupathi</h2>
        <h4>Cotact:9553394020</h4>
        </div>
  )
}
export default User;