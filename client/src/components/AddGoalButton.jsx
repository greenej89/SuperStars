import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddGoalButton = () => {
  return (
    <>
      <button onClick={useNavigate('/')} className="mt-1 mb-3 btn btn-success btn-lg">Add Goal</button>
    </>
  )
}

export default AddGoalButton