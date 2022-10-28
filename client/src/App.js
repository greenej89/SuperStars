import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import KidMenu from './components/KidMenu';
import Footer from './components/Footer';
import ControlCenter from './components/ControlCenter';
import GoalForm from './components/GoalForm';
import Dashboard from './views/Dashboard';
import {useState} from 'react'

function App() {
  const validAccessKey = '123456789'
  const [accessKey, setAccessKey] = useState('')
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <KidMenu/>
        <div className='container main'>
          <Routes>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/kids' element={<ControlCenter accessKey={accessKey} setAccessKey={setAccessKey} validAccessKey={validAccessKey}/>}/>
            <Route path='goals/new' element={<GoalForm/>}/>
          </Routes>
        </div>
        <div className='footer'>
          <Footer accessKey={accessKey} setAccessKey={setAccessKey} validAccessKey={validAccessKey}/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
