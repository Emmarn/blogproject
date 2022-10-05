import {BrowserRouter,  Route, Routes, Router } from 'react-router-dom';
import './App.css';
import { Antonsblog } from './Views/Antonsblog';
import { Emmasblog } from './Views/Emmasblog';
import {Header} from './components/Header'
import { Jarisblog } from './Views/Jarisblog';
import { Olgasblog } from './Views/Olgasblog';
import {Homepage} from './Views/Homepage'
import{Loginpage} from './Views/Loginpage'
import { Addpost } from './Views/Addpost';
import {Blogpost} from './Views/Blogpost';
import { Bloggers } from './Views/Bloggers';

 
function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;