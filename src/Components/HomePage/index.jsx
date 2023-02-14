import React from 'react'
import Table from '../Table'
import Filter from '../FilterInput'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
    const navigate = useNavigate()
  return (
    <div>
     <div className='accs'> 
     <button className='creatBtn' onClick={()=>navigate('/CreateUser')}>Create User</button>
      <Filter/>
     </div>
      <Table/>
    </div>
  )
}
