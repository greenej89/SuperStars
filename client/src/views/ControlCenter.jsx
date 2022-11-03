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
    if(accessCode !==validAccessCode){
      navigate('/dashboard')
      //Secure the route from backward/forward page navigation
      setAccessCode('')
      console.log("Access key was reset to:" + accessCode)
    }}, [])

  useEffect(() => {
    if(kidId){
      axios.get('http://localhost:8000/api/kids/' + kidId)
      .then( res => {
        setKid(res.data)
        setLoaded(true) //Indicate that person is loaded
      })
      .catch( err => console.log(err) )
  }}, [kidId,kid])

  const editKid = kidParam => {
    axios.put('http://localhost:8000/api/kids/' + kid._id, kidParam)
      .then( res => {
        console.log('Update was succesful', res.data)
        setKid(res.data)
        setErrors({})
        navigate('/kids/' + res.data._id)
      })
      .catch( err => {
        setErrors(err.response.data.errors)
      })
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
      <div className="col-sm-5 border rounded bg-warning p-3">
        { kidId &&<h3>Edit {kid.name}'s Information</h3> }
        <KidForm 
          kid = {kid}
          kidFormHandler={editKid}
          errors = {errors}
        />
        <hr></hr>
        { kidId && <h3 className='mt-3'>Edit {kid.name}'s Goals</h3> }
        <div className="goal-list mt-3">
          { kid.goals &&
            <table className="table bg-white">
              {/* <thead>
                <th>Summary</th>
                <th>Awarded</th>
                <th>of</th>
                <th>Stars</th>
                <th>Edit</th>
              </thead> */}
              <tbody>
                  {
                    kid.goals.map((goal)=>(
                      <tr key={goal._id}>
                        <td>
                          <Link to={`/goals/${goal._id}/edit`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                          </Link>
                        </td>
                        <td>{goal.summary}</td>
                        <td>{goal.awardedStars}</td>
                        <td>/</td>
                        <td>{goal.totalStars}</td>
                        <td>
                          <button className='btn' > {/*onClick={ e => {deletePet(pet._id)}}> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
              </tbody>
            </table>
          }
        </div>
      </div>
      <button className='btn btn-danger mt-5'> {/*onClick={ e => {deletePet(pet._id)}}>*/}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
        <span className='ms-2'>Delete {kid.name}</span>
      </button>
    </div>
  )
}

export default ControlCenter