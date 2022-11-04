import { useState } from 'react'

const GoalForm = (
  {kidList, setKidList, initialKidId, initialSummary, initialPledge,
    initialReward, initialRewardURL, initialTotalStars, initialAwardedStars,
    goalFormHandler, errors}) => {
  const [kidId, setKidId] = useState(initialKidId)
  const [summary, setSummary] = useState(initialSummary)
  const [pledge, setPledge] = useState(initialPledge)
  const [reward, setReward] = useState(initialReward)
  const [rewardURL, setRewardURL] = useState(initialRewardURL)
  const [totalStars, setTotalStars] = useState(initialTotalStars)
  const [awardedStars, setAwardedStars] = useState(initialAwardedStars)

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
    <>
      <form onSubmit={onSubmitHandler} className="col-sm-5 border rounded bg-warning p-3">
        <div className='mb-1 d-flex align-items-center justify-content-center' >
          <label className='col-sm-4 col-form-label-lg text-start' htmlFor='kid' >Kid</label>
          <select className="form-control" value={kidId} onChange={(e)=>setKidId(e.target.value)}>
              <option value={kidId} >Select A Kid</option>
              {kidList.map( kid => <option value={kid._id} key={kid._id}> {kid.name} </option>)}
          </select>
        </div>
        <div className='mb-1 d-flex align-items-center justify-content-center' >
          <label className='col-sm-4 col-form-label-lg text-start' htmlFor='summary'> Summary:</label>
          <input className='form-control' type='text' id='summary' onChange = {e => setSummary(e.target.value)} value={summary}/>
        </div>
        <div className='mb-1 d-flex align-items-center justify-content-center'>
          <label className='col-sm-4 col-form-label-lg text-start' htmlFor='pledge'>Pledge:</label>
          <input className='form-control' type='text' id='pledge' onChange = {e => setPledge(e.target.value)} value={pledge}/>
        </div>
        <div className='mb-1 d-flex align-items-center justify-content-center'>
          <label className='col-sm-4 col-form-label-lg text-start' htmlFor='reward'>Reward: (optional)</label>
          <input className='form-control' type='text' id='reward' onChange = {e => setReward(e.target.value)} value={reward}/>
        </div>
        <div className='mb-1 d-flex align-items-center justify-content-center'>
          <label className='col-sm-4 col-form-label-lg text-start' htmlFor='rewardURL'>Reward Image URL: (optional)</label>
          <input className='form-control' type='text' id='rewardURL' onChange = {e => setRewardURL(e.target.value)} value={rewardURL}/>
        </div>
        <div className='mb-1 d-flex align-items-center justify-content-center'>
          <label className='col-sm-4 col-form-label-lg text-start' htmlFor='totalStars'>Total Stars:</label>
          <input className='form-control' type='number' id='totalStars' min='0' onChange = {e => setTotalStars(e.target.value)} value={totalStars}/>
          <button type="submit" className="btn btn-success btn-lg">Submit</button>
        </div>
        </form>
    </>
  )
}

export default GoalForm