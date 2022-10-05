import {BrowserRouter,  Route, Routes, Router } from 'react-router-dom';
import './App.css';
import {Header} from './components/Header'
import {Homepage} from './Views/Homepage'
import{Loginpage} from './components/Loginpage';
import { Addpost } from './Views/Addpost';
import {Blogpost} from './Views/Blogpost';
import { Bloggers } from './Views/Bloggers';

 
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/addpostform' element={<Addpost/>}/>
        <Route path="/Blogpost.js" element={<Blogpost/>}/>
        <Route path="/Bloggers.js" element={<Bloggers/>}/>
      </Routes> 
    </div>
  );
}

export default App;