import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
      

    </div>
  );
}

export default App;
