import {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import GoalForm from '../components/GoalForm'

const AddGoal = ({kidList, setKidList, accessCode, validAccessCode}) => {

  const {kidId} = useParams()

  const navigate = useNavigate()

  const [errors, setErrors] = useState({})
  // const [goalId, setGoalId] = useState('')
  // const [kidToUpdate, setKidToUpdate] = useState({})

  const createGoal = goalParam => {
    axios.post('http://localhost:8000/api/goals', goalParam)
      .then( res => {
        console.log('Added new goal id to kid goals array.  Here is the kid info:', res.data)
        // setGoalId(res.data._id)
        navigate(`/kids/${res.data._id}`)
      })
      .catch( err => {
        console.log(err.response.data.errors)
        setErrors(err.response.data.errors)
      })
}

  return (
    <>
      <h1 className="text-white">Add Goal</h1>
      <div className="create-goal-form d-flex flex-column align-items-center">
        <>
          <GoalForm 
            kidList={kidList}
            setKidList={setKidList}
            initialKidId = {kidId}
            initialSummary = ''
            initialPledge = ''
            initialReward = ''
            initialRewardURL = ''
            initialTotalStars = {0}
            initialAwardedStars = {0}
            goalFormHandler = {createGoal}
            formType = 'create'
            errors = {errors}
            accessCode={accessCode}
            validAccessCode={validAccessCode}
          />
        </>
      </div>
    </>
  )
}

export default AddGoal