import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const GoalDetails = () => {
  const [goal, setGoal] = useState({})
  const{goalId} = useParams()

  useEffect(() => {
    axios.get('http://localhost:8000/api/goals/' + goalId)
      .then( res => {
        setGoal(res.data)
      })
      .catch( err => console.log(err))
  }, [goalId, goal])

  const starArray = []
  for(let i=0;i<goal.awardedStars;i++){
    starArray.push('awardedStar')
  }
  for(let i=0; i<goal.totalStars-goal.awardedStars;i++){
    starArray.push('')
  }

  const awardStar = e => {
    e.preventDefault()
    console.log('addStar was clicked')
    if(goal.awardedStars < goal.totalStars){
      const updatedGoal = {...goal}
      updatedGoal['awardedStars'] = goal.awardedStars+1
      updateGoal(updatedGoal)
    }
  }

  const updateGoal = goalParam => {
    axios.put('http://localhost:8000/api/goals/' + goalId, goalParam)
      .then( res => {
        console.log('Update was succesful', res.data)
      })
      .catch( err => {
        console.log(err)
      })
  }

  return (
    <div className="goal-details d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center">
          <h1 className="text-white">{goal.summary}</h1>
          <p className="text-white"><em>"{goal.pledge}"</em></p>
          <div className='star-display mt-3 d-flex justify-content-center flex-wrap'>
            { starArray
                .filter((star)=>(star === 'awardedStar'))
                .map((star,i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="goldenrod" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
            ))}
            { starArray
                .filter((star)=>(star !== 'awardedStar'))
                .map((star,i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
            ))}
          </div>
          { goal.awardedStars < goal.totalStars &&
            <button onClick={awardStar} className='btn btn-success mt-3'> Award Star </button>
          }
          <div className='mt-5'>
            {/* { (goal.reward || goal.rewardURL) &&
              <h2 className="text-white">Reward</h2>
            } */}
            {goal.rewardURL &&
              <img src={goal.rewardURL} alt='reward image' className='w-50'></img>
            }
            {goal.reward &&
              <h4 className="text-white">{goal.reward}</h4>
            }
        </div>
      </div>
    </div>
  )
}

export default GoalDetails