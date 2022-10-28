import React from 'react'
import AddGoalButton from '../components/AddGoalButton'
import KidForm from '../components/KidForm'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const createKid = e => {
    e.preventDefault()
  }
  
  return (
    <div className="create-kid-form d-flex flex-column align-items-center">
      <div className='mb-1 align-items-center justify-content-start' >
        <AddGoalButton/>
      </div>
        <h2 className="text-white">Add Kid</h2>
        <KidForm kidFormHandler={createKid}/>
    </div>
  )
}

export default Dashboard