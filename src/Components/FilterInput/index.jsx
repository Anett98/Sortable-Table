import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../App'

export default function Filter() {

    const [inputVal,setInputVal] = useState('')
    const {data, setData} = useContext(Context)
 
    useEffect(()=>{
       if (localStorage.getItem('initialData')) {
            setData(JSON.parse(localStorage.getItem('initialData')).filter(user=>user.name.toLocaleLowerCase().includes(inputVal.trim().toLocaleLowerCase())))
        }

    },[inputVal])

    const handleFilter = (e) => {
        setInputVal(e.target.value)
        console.log('bda');
    }
 
  return (
        <input placeholder='Enter the name' className='filter' type='text' value={inputVal} onChange={(e)=>handleFilter(e)} />
  )
}
