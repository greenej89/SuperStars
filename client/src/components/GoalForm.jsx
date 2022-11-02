import { useState } from 'react'

const GoalForm = ({kidList, setKidList, goalFormHandler, errors }) => {
  const [kidId, setKidId] = useState('')
  const [summary, setSummary] = useState('')
  const [pledge, setPledge] = useState('')
  const [reward, setReward] = useState('')
  const [rewardImageURL, setRewardImageURL] = useState('')
  const [totalStars, setTotalStars] = useState(0)

  const onSubmitHandler = e => {
    e.preventDefault()
    goalFormHandler()
  }
  return (
    <>
      <form onSubmit={onSubmitHandler} className="col-sm-5 border rounded bg-warning p-3">
        <div className='mb-1 d-flex align-items-center justify-content-center' >
          <label className='col-sm-4 col-form-label-lg text-start' htmlFor='kid' >Kid</label>
          <select className="form-control" value={kidId} onChange={(e)=>setKidId(e.target.value)}>
              <option value={null} >Select A Kid</option>
              {kidList.map( kid => <option value={kid._id}> {kid.name} </option>)}
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
          <label className='col-sm-4 col-form-label-lg text-start' htmlFor='rewardImageURL'>Reward Image URL: (optional)</label>
          <input className='form-control' type='text' id='rewardImageURL' onChange = {e => setRewardImageURL(e.target.value)} value={rewardImageURL}/>
        </div>
        <div className='mb-1 d-flex align-items-center justify-content-center'>
          <label className='col-sm-4 col-form-label-lg text-start' htmlFor='totalStars'>Total Stars:</label>
          <input className='form-control' type='number' id='totalStars' onChange = {e => setTotalStars(e.target.value)} value={totalStars}/>
          <button type="submit" className="btn btn-success btn-lg">Submit</button>
        </div>
        </form>
    </>
  )
}

export default GoalForm