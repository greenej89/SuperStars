import React from 'react'
import KidForm from './KidForm'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ControlCenter = ({accessKey,setAccessKey,validAccessKey}) => {
  const navigate =useNavigate()
  useEffect(() => {
    if(accessKey !==validAccessKey){
      navigate('/dashboard')
    }}, [])
  
  //Secure the route from backward/forward page navigation
  setAccessKey('')
  console.log("Access key was reset to:" + accessKey)

  const editKid = e => {
    e.preventDefault()
  }

    return (
      <div className="edit-kid-form d-flex flex-column align-items-center">
        <h1 className="text-white">Control Center</h1>
          <h2 className="text-white">Edit Kid</h2>
          <KidForm kidFormHandler={editKid}/>
      </div>
    )
}

export default ControlCenter