import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../../App'
import { useNavigate } from 'react-router-dom'

export default function CreatUser() {
    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    const [rNumber,setRNumber] = useState('')
    const [email,setEmail] = useState('')
    const [country,setCountry] = useState('')
    const {data,setData} = useContext(Context)
    const navigate = useNavigate() 
    const firstRender=useRef(true)


    useEffect(()=>{   
        if(firstRender.current) {
            firstRender.current=false
        } else {
            localStorage.setItem('initialData',JSON.stringify(data))
            navigate('/')
        }
    },[data])
    
    const handleCreation = (e) => {
        
        e.preventDefault()
        if(country&&email&&rNumber&&number&&name){
            setData(prev=>[...prev,{
                name:name,
                phone:number,
                email:email,
                country:country,
                numberrange:rNumber
            }])
        }
    }


  return (
    <div className='create'>
       <h1> Create a new User</h1>
        <form onSubmit={handleCreation}>
           <label>
             Username
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
           </label>
           <label>
             Phone Number
            <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
           </label>
           <label>
             Number Range
            <input type='number' value={rNumber} onChange={(e)=>setRNumber(e.target.value)}/>
           </label>
           <label>
             Email
            <input type='email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
           </label>
           <label>
             Country
            <input type='text' value={country}  onChange={(e)=>setCountry(e.target.value)}/>
           </label>
           <button className='createToNav'>Create</button>
        </form>
    </div>
  )
}
