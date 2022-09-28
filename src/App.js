import {BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import { Antonsblog } from './components/Antonsblog';
import { Emmasblog } from './components/Emmasblog';
import {Header} from './components/Header'
import { Jarisblog } from './components/Jarisblog';
import { Olgasblog } from './components/Olgasblog';
import {Homepage} from './components/Homepage'
import{Loginpage} from './components/Loginpage'


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/antonsblog' element={<Antonsblog/>}/>
        <Route path='/emmasblog' element={<Emmasblog/>}/>
        <Route path='/jarisblog' element={<Jarisblog/>}/>
        <Route path='/olgasblog' element={<Olgasblog/>}/>
        <Route path='/login' element={<Loginpage/>}/>
      </Routes>
       
      
      
    </div>
  
    
  );
}

export default App;