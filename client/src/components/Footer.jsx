import {useState} from 'react'
import { Link } from 'react-router-dom'

const Footer = ({accessCode, setAccessCode, validAccessCode}) => {

  const [inputAccessCode, setInputAccessCode] = useState('')

  const requestAccessCode = e => {
    alert(`The access code is:  ${validAccessCode}`)
    // setAccessCodeRequested(true)
  }

  const unlockControlCenter = e => {
    e.preventDefault()
    if (inputAccessCode === validAccessCode) {
      console.log("Valid access control ID....Navigating to Control Center")
      setAccessCode(inputAccessCode)
      setInputAccessCode('')
    }
  }
  const lockControlCenter = () => {
    setAccessCode('')
    console.log("Access key was reset to:" + accessCode)
  }

  return (
    <div className="bg-dark text-white w-100 d-flex align-items-center p-2">
        {
          accessCode === validAccessCode ?
          <div className='d-flex justify-content-between w-100 m-3'>
            <button className='btn btn-info ms-3'>
              <Link className='text-black text-decoration-none' to={'/kids'}>Control Center</Link>
            </button>
            <button className='btn btn-success me-3' onClick={lockControlCenter}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-unlock" viewBox="0 0 16 16">
                <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
              </svg>
              <span>  Grown-Up Mode</span>
            </button>
          </div>
          : 
            <form onSubmit={unlockControlCenter} className="w-100 d-flex align-items-center justify-content-between me-2">
              <div className='col-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                </svg>
                <p> Kid Mode </p>
              </div>
              <div className="d-flex col-8 px-2 align-items-center">
                <label htmlFor="inputAccessCode"> Access Code</label>
                <input type="text" className="form-control w-50 ms-3" id="inputAccessCode" onChange={e => {setInputAccessCode(e.target.value)}} value={inputAccessCode}/>
              </div>
              {(inputAccessCode !== validAccessCode) ?
                  <button className="btn rounded-circle" onClick={requestAccessCode}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                    </svg>
                    <p className='text-danger'>Show Access Code</p> 
                  </button>
                  :
                  <button type="submit" className="btn btn-success">Unlock Grown-Up Mode</button>
              }
            </form>
        }
    </div>
  )
}

export default Footer