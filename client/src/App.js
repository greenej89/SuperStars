import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import KidMenu from './components/KidMenu';
import Footer from './components/Footer';
import KidForm from './components/KidForm';
import ControlCenter from './components/ControlCenter';
import GoalForm from './components/GoalForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <KidMenu/>
        <div className='main'>
          <Routes>
            <Route path='/dashboard' element={<KidForm/>}/>
            <Route path='/kids' element={<ControlCenter/>}/>
            <Route path='goals/new' element={<GoalForm/>}/>
          </Routes>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
