import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const AddGoalButton = () => {
  const navigate = useNavigate()
  const routeChange = e => {
    navigate('/goals/new')
  }
  return (
    <>
      <button onClick={routeChange} className="mt-1 mb-3 btn btn-success btn-lg">Add Goal</button>
    </>
  )
}

export default AddGoalButton