import './App.css';
import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header';
import KidMenu from './components/KidMenu';
import Footer from './components/Footer';

import ControlCenter from './views/ControlCenter';
import EditGoal from './views/EditGoal';
import Dashboard from './views/Dashboard';
import AddGoal from './views/AddGoal';
import KidDetails from './views/KidDetails';
import GoalDetails from './views/GoalDetails';

function App() {
  const validAccessCode = '123456789'
  const [accessCode, setAccessCode] = useState('')
  const [kidList, setKidList] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/api/kids')
      .then( res => {
        setKidList(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <KidMenu kidList={kidList} setKidList={setKidList}/>
          <div className='main'>
            <div className='container mt-5'>
            <Routes>
                <Route path='/dashboard' element={<Dashboard kidList={kidList} setKidList={setKidList}/>}/>
                <Route path='/kids' element={<ControlCenter accessCode={accessCode} setAccessCode={setAccessCode} validAccessCode={validAccessCode} kidList={kidList} setKidList={setKidList}/>}/>
                <Route path='/kids/:kidId/goals/new' element={<AddGoal kidList={kidList} setKidList={setKidList}/>}/>
                <Route path='/goals/:id/edit' element={<EditGoal kidList={kidList} setKidList={setKidList}/>}/>
                <Route path='/kids/:id' element={<KidDetails/>}/>
                <Route path='/goals/:id' element={<GoalDetails/>}/>
            </Routes>
            </div>
          </div>
          <div className='footer'>
            <Footer accessCode={accessCode} setAccessCode={setAccessCode} validAccessCode={validAccessCode}/>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
