import { useState } from 'react'
import AddGoalButton from '../components/AddGoalButton'
import KidForm from '../components/KidForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({kidList, setKidList}) => {

  const navigate = useNavigate()

  const [errors, setErrors] = useState({})

  const createKid = kidParam => {
    axios.post('http://localhost:8000/api/kids', kidParam)
      .then( res => {
        console.log('Created new kid', res.data)
        setKidList([...kidList, res.data])
        navigate(`/kids/${res.data._id}`)
      })
      .catch( err => {
        setErrors(err.response.data.errors)
      })
  }
  
  return (
    <div className="create-kid-form d-flex flex-column align-items-center">
      <div className='mb-1 align-items-center justify-content-start' >
        <AddGoalButton/>
      </div>
      <div className="col-sm-5 border rounded bg-warning p-3">
        <h2>Add Kid</h2>
        <KidForm 
          initialName = ''
          initialImageURL = {undefined} //'https://cdn-icons-png.flaticon.com/512/206/206880.png'
          kidFormHandler={createKid}
          errors = {errors}
        />
      </div>
    </div>
  )
}

export default Dashboard