import { useState } from 'react'

const GoalForm = (
  { initialKidId, 
    initialSummary, 
    initialPledge, 
    initialTotalStars, 
    initialAwardedStars,
    initialReward, 
    initialRewardURL, 
    goalFormHandler, 
    formType, 
    errors,
    accessCode,
    validAccessCode
  }) => {

  const [kidId] = useState(initialKidId)
  const [summary, setSummary] = useState(initialSummary)
  const [pledge, setPledge] = useState(initialPledge)
  const [totalStars, setTotalStars] = useState(initialTotalStars)
  const [awardedStars, setAwardedStars] = useState(initialAwardedStars)
  const [reward, setReward] = useState(initialReward)
  const [rewardURL, setRewardURL] = useState(initialRewardURL)

  const onSubmitHandler = e => {
    e.preventDefault()
    goalFormHandler({
      kidId,
      summary,
      pledge,
      reward,
      rewardURL,
      totalStars,
      awardedStars
    })
  }
  return (
    <form onSubmit={onSubmitHandler} className="border rounded bg-warning p-3">
      <div className='mb-1 d-flex align-items-center justify-content-center' >
        <label className='col-4 col-form-label-lg text-start' htmlFor='summary'> Summary:</label>
        <input className='form-control' type='text' id='summary' onChange = {e => setSummary(e.target.value)} value={summary}/>
      </div>
      <p className='text-danger'>{ errors.summary && errors.summary.message }</p>
      <div className='mb-1 d-flex align-items-center justify-content-center'>
        <label className='col-4 col-form-label-lg text-start' htmlFor='pledge'>Pledge:</label>
        <input className='form-control' type='text' id='pledge' onChange = {e => setPledge(e.target.value)} value={pledge}/>
      </div>
      <p className='text-danger'>{ errors.pledge && errors.pledge.message }</p>
      <div className='mb-1 d-flex align-items-center justify-content-center'>
        <label className='col-4 col-form-label-lg text-start' htmlFor='totalStars'>Total Stars:</label>
        <input className='form-control' type='number' id='totalStars' min='0' max = '50' onChange = {e => setTotalStars(e.target.value)} value={totalStars}/>
      </div>
      <p className='text-danger'>{ errors.totalStars && errors.totalStars.message }</p>
      { formType === 'edit' &&
        <div className='mb-1 d-flex align-items-center justify-content-center'>
          <label className='col-4 col-form-label-lg text-start' htmlFor='awardedStars'>Awarded Stars:</label>
          <input className='form-control' type='number' id='awardedStars' min='0' max = {`${totalStars}`} onChange = {e => setAwardedStars(e.target.value)} value={awardedStars}/>
        </div>
      }
      <div className='mb-1 d-flex align-items-center justify-content-center'>
        <label className='col-4 col-form-label-lg text-start' htmlFor='reward'>Reward: (optional)</label>
        <input className='form-control' type='text' id='reward' onChange = {e => setReward(e.target.value)} value={reward}/>
      </div>
      <div className='mb-1 d-flex align-items-center justify-content-center'>
        <label className='col-4 col-form-label-lg text-start' htmlFor='rewardURL'>Reward Image URL: (optional)</label>
        <input className='form-control' type='text' id='rewardURL' onChange = {e => setRewardURL(e.target.value)} value={rewardURL}/>
      </div>
      {
        accessCode === validAccessCode &&
        <button type="submit" className="btn btn-success btn-lg">Submit</button>
      }
    </form>
  )
}

export default GoalForm