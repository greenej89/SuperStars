import React from 'react'
import { useState } from 'react'

const GoalDetails = () => {

  const [goal, setGoal] = useState({
    'earnedStars':2, 
    'totalStars':20
  })
  const starArray = []
  for(let i=0;i<goal.earnedStars;i++){
    starArray.push('earnedStar')
  }
  for(let i=0; i<goal.totalStars-goal.earnedStars;i++){
    starArray.push('')
  }
  console.log(starArray)

  const awardStar = e => {
    e.preventDefault()
    console.log('addStar was clicked')
    if(goal.earnedStars < goal.totalStars){
      const updatedGoal = {...goal}
      updatedGoal['earnedStars'] = goal.earnedStars+1
      setGoal(updatedGoal)
    }
  }

  return (
    <div className="goal-details d-flex justify-content-center">
      <div className="d-flex flex-column align-items-center">
          <h1 className="text-white">Clean Up Toys</h1>
          <h2 className="text-white">“I will pick up my toys before bed.”</h2>
          <div className='star-display mt-3 d-flex justify-content-center flex-wrap'>
            { starArray
                .filter((star)=>(star === 'earnedStar'))
                .map(star => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="goldenrod" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
            ))}
            { starArray
                .filter((star)=>(star !== 'earnedStar'))
                .map(star => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
            ))}
          </div>
            <button onClick={awardStar} className='btn btn-success mt-3'> Award Star </button>
          <div>
            <img></img>
            <h2 className="text-white">Reward</h2>
            <p className="text-white">Little Orange Helicopter</p>
        </div>
      </div>
    </div>
  )
}

export default GoalDetails