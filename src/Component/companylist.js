import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

function Companylist() {
 
    const value =  ["aditya" , "ankit" , "delhi"]
    const navigate = useNavigate();
  return (
    <>
    <div>companylist</div>
     {
      value.map((name , index)=> (
        <ul>
            <li>{index} , {name}</li>
            <li> <button className=' bg-slate-500 ' onClick={()=> navigate('/detail' , {state:{reportid:"hello"}}) }  >click</button></li>
        </ul>
      ) )  
     }
</>
  )
}

export default Companylist