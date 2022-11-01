import React from 'react'
import AddGoalButton from '../components/AddGoalButton'
import KidForm from '../components/KidForm'

const Dashboard = () => {

  const createKid = e => {
    e.preventDefault()
  }
  
  return (
    <div className="create-kid-form d-flex flex-column align-items-center">
      <div className='mb-1 align-items-center justify-content-start' >
        <AddGoalButton/>
      </div>
      <div className="col-sm-5 border rounded bg-warning p-3">
        <h2>Add Kid</h2>
        <KidForm kidFormHandler={createKid}/>
      </div>
    </div>
  )
}

export default Dashboard