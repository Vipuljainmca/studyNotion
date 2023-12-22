import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashbord from './pages/Dashbord';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Signin from './pages/Signin';

function App() {
  const [isLogin, loginChangeHandler] = useState(false)
  return (
  <div className='App'>
    <Navbar isLogin={isLogin} set={loginChangeHandler}/>

    <Routes>
      <Route >
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login isLogin={isLogin} set={loginChangeHandler}/>}/>
        <Route path='/signup' element={<Signin isLogin={isLogin} set={loginChangeHandler} />}/>
        <Route path='/dashboard' element={<Dashbord/>}/>

      </Route>
    </Routes>
  </div>
  );
}

export default App;
