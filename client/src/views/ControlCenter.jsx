import React from 'react'
import KidForm from '../components/KidForm'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ControlCenter = ({accessCode,setAccessCode,validAccessCode, kidList, setKidList}) => {
  const [kid, setKid] = useState({})
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if(accessCode !==validAccessCode){
      navigate('/dashboard')
    }
    if(kid){
      axios.get('http://localhost:8000/api/kids/' + kid._id)
      .then( res => {
        setKid(res.data)
        setLoaded(true) //Indicate that person is loaded
      })
      .catch( err => console.log(err) )
    }
  }, [])

  const editKid = kidParam => {
    axios.put('http://localhost:8000/api/kids/' + kid._id, kidParam)
      .then( res => {
        console.log('Update was succesful', res.data)
        setKid(res.data)
        setErrors({})
      })
      .catch( err => {
        setErrors(err.response.data.errors)
      })
      
  }
  
  //Secure the route from backward/forward page navigation
  setAccessCode('')
  console.log("Access key was reset to:" + accessCode)

    return (
      <div className="edit-kid-form d-flex flex-column align-items-center">
        <h1 className="text-white">Control Center</h1>
          <div className="col-sm-5 border rounded bg-warning p-3">
            <h2>Edit Kid</h2>
            <form>
              <select className="form-control mb-3" value={kid} onChange={(e)=>setKid(e.target.value)}>
                  <option>Select A Kid</option>
                  {/* <option value="value">What Will Appear on Screen</option> */}
                  {kidList.map( kid => <option value={kid}>{kid.name}</option>)}
              </select>
            </form>
            <KidForm 
              initialName = {kid.name}
              initialImageURL = {kid.imageURL}
              kidFormHandler={editKid}
              errors = {errors}
            />
          </div>
          <div className="goal-list mt-3 w-50">
            <table className="table bg-white">
              <tbody>
                <tr>
                  <td>Clean Up Toys</td>
                  <td>3</td>
                  <td>/</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Be Nice to Brother</td>
                  <td>7</td>
                  <td>/</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Do Not Cry at Bedtime</td>
                  <td>1</td>
                  <td>/</td>
                  <td>10</td>
                </tr>
                <tr>
                  <td>Wash Hands Before Dinner</td>
                  <td>20</td>
                  <td>/</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    )
}

export default ControlCenter