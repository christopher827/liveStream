import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function HomePage() {
const [roomCode,setRoomCode]=useState('')
const navigate=useNavigate()
const handleFormSubmit=(e)=>{
    e.preventDefault();
navigate(`/room/${roomCode}`)
  }

return (
    <div className='home-page'>
<form className='form' onSubmit={handleFormSubmit}>
  <div>
    <label>Enter Room Code</label>
    <input type='text' required placeholder='Enter Room Code' value={roomCode} onChange={e=>setRoomCode(e.target.value)}/>
  </div>
  <button className='' type='submit'>Enter Room</button>
</form>
    </div>
  )
}
export default HomePage
