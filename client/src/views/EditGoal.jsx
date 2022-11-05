import {useState, useEffect} from 'react'
import GoalForm from '../components/GoalForm'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditGoal = ({kidList, setKidList, kidId, accessCode, validAccessCode}) => {

  //Destructure the pet id from the path variable
  const {id} = useParams()

  //Define getters and setters for the pet object to update
  const [goal, setGoal] = useState({})

  //Indicate that object is not loaded
  const [loaded, setLoaded] = useState(false)

  //Stores backend validation errors
  const [errors, setErrors] = useState({})

  const navigate = useNavigate()

  //Retrive goal from database and store properties in state
  //The indicate that object that loaded to prepopulate form fields
  useEffect(()=>{
    axios.get('http://localhost:8000/api/goals/' + id)
      .then( res => {
        setGoal(res.data)
        setLoaded(true) //Indicate that goal is loaded
      })
      .catch( err => console.log(err) )
  }, [id])

  //Updates pet in db using the petParam object argument
  const updateGoal = goalParam => {
    axios.put('http://localhost:8000/api/goals/' + id, goalParam)
      .then( res => {
        console.log('Updated goal', res.data)
        setGoal(res.data)
        setErrors({})
        navigate(`/kids/${goal.kidId}/goals/` + id)
      })
      .catch( err => {
        setErrors(err.response.data.errors)
      })
  }

  return (
    <>
        <h1 className="text-white">Edit Goal</h1>
        <div className="edit-goal-form d-flex flex-column align-items-center">
          {loaded &&  
            <>
              <GoalForm 
                kidList={kidList}
                setKidList={setKidList}
                initialKidId = {goal.kidId}
                initialSummary = {goal.summary}
                initialPledge = {goal.pledge}
                initialReward = {goal.reward}
                initialRewardURL = {goal.rewardURL}
                initialTotalStars = {goal.totalStars}
                initialAwardedStars = {goal.awardedStars}
                goalFormHandler = {updateGoal}
                formType = 'edit'
                errors = {errors}
                accessCode={accessCode}
                validAccessCode={validAccessCode}
              />
            <form onSubmit={e => updateGoal(goal)}>
            {/* <div className='mb-1 d-flex align-items-center justify-content-center'>
              <label className='col-sm-4 col-form-label-lg text-start' htmlFor='awardedStars'>
              Awarded Stars:
              </label>
              <input className='form-control' type='number' id='awardedStars' 
                min = '0'
                max = {`${goal.totalStars}`}
                onChange = { e => {
                  const updatedGoal = {...goal}
                  updatedGoal.awardedStars = e.target.value
                  setGoal(updatedGoal)
                }} 
                value={goal.awardedStars}
              />
              <button type="submit" className="btn btn-success btn-lg">Update</button>
            </div> */}
            </form>
          </>
          }
        </div>
    </>
  )
}

export default EditGoal