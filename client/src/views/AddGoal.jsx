import React from 'react'
import GoalForm from '../components/GoalForm'

const AddGoal = ({kidList, setKidList}) => {
  return (
    <>
      <h1 className="text-white">Add Goal</h1>
      <div className="create-goal-form d-flex flex-column align-items-center">
          <GoalForm kidList={kidList} setKidList={setKidList}/>
      </div>
    </>
  )
}

export default AddGoal