import { useState } from 'react'
import KidForm from '../components/KidForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({kidList, setKidList, accessCode, validAccessCode}) => {

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
      <div className="border rounded bg-warning p-3">
      <h2>Add Kid</h2>
        <KidForm 
          initialName = ''
          initialImageURL = {undefined} //'https://cdn-icons-png.flaticon.com/512/206/206880.png'
          kidFormHandler={createKid}
          errors = {errors}
          accessCode ={accessCode}
          validAccessCode = {validAccessCode}
        />
      </div>
    </div>
  )
}

export default Dashboard