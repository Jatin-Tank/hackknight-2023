import './index.css'
import { useState } from 'react'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'


function App() {

  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Routes>
        {/* {user && <Route path="/" exact element={<Home />} />} */}
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>

    </div>
  )
}

export default App
