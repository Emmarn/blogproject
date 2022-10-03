import {BrowserRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import { Antonsblog } from './components/Antonsblog';
import { Emmasblog } from './components/Emmasblog';
import {Header} from './components/Header'
import { Jarisblog } from './components/Jarisblog';
import { Olgasblog } from './components/Olgasblog';
import {Homepage} from './components/Homepage'
import{Loginpage} from './components/Loginpage'
import { Addpost } from './components/Addpost';
import {Blogpost} from './components/Blogpost';
import { Bloggers } from './Views/Bloggers';
 

function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/antonsblog' element={<Antonsblog/>}/>
        <Route path='/emmasblog' element={<Emmasblog/>}/>
        <Route path='/jarisblog' element={<Jarisblog/>}/>
        <Route path='/olgasblog' element={<Olgasblog/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/addpostform' element={<Addpost/>}/>
        <Route path="/Blogpost.js" element={<Blogpost/>}/>
        <Route path="/Bloggers.js" element={<Bloggers/>}/>
      </Routes>
       </>
       
      
      
    </div>
  
    
  );
}

export default App;