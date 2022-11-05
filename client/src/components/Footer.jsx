import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = ({accessCode, setAccessCode, validAccessCode}) => {
//const [accessCodeRequested, setAccessCodeRequested] = useState(false)

  const navigate = useNavigate()
  const [inputAccessCode, setInputAccessCode] = useState('')
  const [displayError, setDisplayError] = useState(false)

  const requestAccessCode = e => {
    alert(`The access code is:  ${validAccessCode}`)
    // setAccessCodeRequested(true)
  }

  const accessControlCenter = e => {
    e.preventDefault()
    if (inputAccessCode === validAccessCode) {
      console.log("Valid access control ID....Navigating to Control Center")
      setAccessCode(inputAccessCode)
      setInputAccessCode('')
      navigate("/kids")
    }
  }

  return (
    <div className="bg-dark text-white w-100 d-flex align-items-center pt-1 justify-content-end">
        <form onSubmit={accessControlCenter} className="d-flex align-items-center justify-content-between me-2">
          <label htmlFor=""> Control Center Access Code</label>
          <div className="col-sm-3">
              <input type="text" className="form-control" id="inputEmail3" onChange={e => {setInputAccessCode(e.target.value)}} value={inputAccessCode}/>
          </div>
          <button type="submit" className="btn btn-info">Go</button>
          {(inputAccessCode && inputAccessCode !== validAccessCode) &&
              <button className="btn rounded-circle" onClick={requestAccessCode}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </svg>
                <p className='text-danger'>Show Access Code</p> 
              </button>
          }
        </form>
    </div>
  )
}

export default Footer