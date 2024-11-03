import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
  const navigate= useNavigate(); 
  return (
    <div className='evalautionContainer'>
  <div className='evalautionCard'>
      <h2 className='evaluation-header2'> Dash Board </h2>
      <button className='next-btn'onClick={()=>{navigate("/task-evaluation")}} > Task evaluation </button>
    </div>
    </div>
  
  )
}

export default DashBoard
