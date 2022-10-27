import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const KidForm = () => {
    const [name, setName] = useState('')
    const [imageURL, setImageURL] = useState('')
  return (
    <div className="create-kid-form d-flex flex-column align-items-center">
      <button onClick={useNavigate('/')} className="col-sm-5  mt-1 mb-3 btn btn-success btn-lg">Add Goal</button>
      <form className="col-sm-5 border rounded bg-warning p-3">
          <div className='mb-1 d-flex align-items-center justify-content-center' >
            <label className='col-sm-4 col-form-label-lg text-start' htmlFor='name'> Name:</label>
            <input className='form-control' type='text' id='name' onChange = {e => setName(e.target.value)} value={name}/>
          </div>
          <div className='mb-1 d-flex align-items-center justify-content-center'>
            <label className='col-sm-4 col-form-label-lg text-start' htmlFor='imageURL'>Photo Link (optional):</label>
            <input className='form-control' type='text' id='imageURL' onChange = {e => setImageURL(e.target.value)} value={imageURL}/>
          </div>
          <div className='mb-1 align-items-center justify-content-start' >
            <button type="submit" className="col-sm-11 btn btn-success btn-lg">Add Kid</button>
          </div>
      </form>
    </div>
  )
}

export default KidForm