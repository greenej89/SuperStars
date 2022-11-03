import { useEffect } from 'react'
import {useState} from 'react'

const KidForm = ({initialName, initialImageURL, kidFormHandler, errors}) => {
    const [name, setName] = useState(initialName)
    const [imageURL, setImageURL] = useState(initialImageURL)

    const onSubmitHandler = e => {
      e.preventDefault()
      kidFormHandler({name, imageURL})
    }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
          <div className='mb-1 d-flex align-items-center justify-content-center' >
            <label className='col-sm-4 col-form-label-lg text-start' htmlFor='name'> Name:</label>
            <input className='form-control' type='text' id='name' onChange = {e => setName(e.target.value)} value={name}/>
          </div>
          <p className='text-danger'>{ errors.name && errors.name.message }</p>

          <div className='mb-1 d-flex align-items-center justify-content-center'>
            <label className='col-sm-4 col-form-label-lg text-start' htmlFor='imageURL'>Photo Link (optional):</label>
            <input className='form-control' type='text' id='imageURL' onChange = {e => setImageURL(e.target.value)} value={imageURL}/>
          </div>

          <div className='mb-1 align-items-center justify-content-start' >
            <button type="submit" className="btn btn-success btn-lg">Submit</button>
          </div>
        </form>
      </>
  )
}

export default KidForm