import React from 'react'
import KidForm from '../components/KidForm'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ControlCenter = ({accessCode,setAccessCode,validAccessCode, kidList, setKidList}) => {
  const [kid, setKid] = useState({})
  const navigate =useNavigate()
  useEffect(() => {
    if(accessCode !==validAccessCode){
      navigate('/dashboard')
    }}, [])
  
  //Secure the route from backward/forward page navigation
  setAccessCode('')
  console.log("Access key was reset to:" + accessCode)

  const editKid = e => {
    e.preventDefault()
  }

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
            <KidForm kidFormHandler={editKid}/>
          </div>
          <div className="goal-list mt-3 w-50">
            <table class="table bg-white">
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