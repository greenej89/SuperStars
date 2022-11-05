import React from 'react'
import KidForm from '../components/KidForm'
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ControlCenter = ({accessCode,setAccessCode,validAccessCode, kidList, setKidList}) => {
  const [kid, setKid] = useState({})
  const [kidId, setKidId] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if(accessCode !== validAccessCode){
      //Secure the route from backward/forward page navigation
      setAccessCode('')
      navigate('/dashboard')
    }}, [])

  useEffect(() => {
    setLoaded(false)
    console.log('In use effect')
    if(kidId){
      console.log('in if(kidId)')
      axios.get('http://localhost:8000/api/kids/' + kidId)
      .then( res => {
        setKid(res.data)
        setLoaded(true) //Indicate that person is loaded
      })
      .catch( err => console.log(err) )
    }}, [kidId])

  const editKid = kidParam => {
    axios.put('http://localhost:8000/api/kids/' + kid._id, kidParam)
      .then( res => {
        console.log('Update was succesful', res.data)
        setErrors({})
        setKidList(initialKidList => initialKidList.map((kidInList)=>{
          if(kid._id === kidInList._id){
            kidInList = res.data
          } 
          return kidInList
        }))
        setKid(res.data)
        navigate('/kids/' + res.data._id)
      })
      .catch( err => {
        setErrors(err.response.data.errors)
      })
  }

  const deleteGoal = (goalId) => {
    axios.delete('http://localhost:8000/api/goals/' + goalId)
      .then( res => {
        console.log('goal deleted', res.data)
        navigate('/kids/' + kid._id)
      })
      .catch( err => console.log(err))
  }

  //Delete
  const deleteKid = e => {
    e.preventDefault()
    axios.delete('http://localhost:8000/api/kids/' + kid._id)
      .then( res => {
        setKidList( kidList.filter( kidInList => kidInList._id !== kid._id ))
      })
      .catch( err => console.log(err))
    navigate('/dashboard')
  }

  return (
    <div className="edit-kid-form d-flex flex-column align-items-center">
      <h1 className="text-white">Control Center</h1>
      <div>
        <select className="form-control mb-3" value={kidId} onChange={(e)=>setKidId(e.target.value)}>
          <option value={null} >Select A Kid to Edit</option>
          {kidList.map( kid => <option key={kid._id} value={kid._id}> {kid.name} </option>)}
        </select>
      </div>
      { loaded &&
        <div className="border rounded bg-warning p-3">
              <h3>Edit {kid.name}'s Information</h3> 
              <KidForm 
                initialName = {kid.name}
                initialImageURL ={kid.imageURL}
                kidFormHandler={editKid}
                errors = {errors}
              />
          <hr/>
          { kid.goals.length > 0 &&
            <div className="goal-list mt-3">
              <h3 className='mt-3'>Edit {kid.name}'s Goals</h3> 
              <table className="table bg-white">
                  <tbody>
                    {
                      kid.goals.map((goal)=>(
                        <tr key={goal._id}>
                          <td>
                            <Link to={`/kids/${goal.kidId}/goals/${goal._id}/edit`}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                              </svg>
                            </Link>
                          </td>
                          <td>{goal.summary}</td>
                          <td>{goal.awardedStars}</td>
                          <td>/</td>
                          <td>{goal.totalStars}</td>
                          <td>
                            <button className='btn' onClick={ e => {deleteGoal(goal._id)}}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
            </div>
          }
          <button className='btn btn-danger mt-5' onClick={deleteKid}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
            <span className='ms-2'>Delete {kid.name}</span>
          </button>
        </div>
      }
    </div>
  )
}

export default ControlCenter