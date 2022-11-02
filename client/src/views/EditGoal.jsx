import React from 'react'
import GoalForm from '../components/GoalForm'

const EditGoal = ({kidList, setKidList, kidId}) => {
  return (
    <>
        <h1 className="text-white">Edit Goal</h1>
        <div className="edit-goal-form d-flex flex-column align-items-center">
            <GoalForm kidList={kidList} setKidList={setKidList} kid={{}}/>
        </div>
    </>
  )
}

export default EditGoal