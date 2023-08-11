import './index.css'
import { useState } from 'react'
import Home from './components/Home/Home'
import Signup from './components/Signup/Signup'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage'

import MakeCoin from './MakeCoin'
import MakeCoinDetails from './MakeCoinDetails'
import MakeExchange from './MakeExchange'

// import Coins from './components/Coins/Coins'

import Level0 from './components/Level/Level0'
import Level1 from './components/Level/Level1'
import Level2 from './components/Level/Level2'
import Level3 from './components/Level/Level3'
import CompoundInt from './CompoundInt'
import QuizCaller from './components/Quiz/QuizCaller'
import Level4 from './components/Level/Level4'
import RetirementInt from './RetirementInt'
import HindiQuiz from './components/Quiz/HindiQuiz'


function App() {

  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Routes>
        {/* {user && <Route path="/" exact element={<Home />} />} */}
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/englishQuiz" exact element={<QuizCaller />} />
        <Route path="/hindiQuiz" exact element={<HindiQuiz />} />

        <Route path="/home" exact element={<Home />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path='/coins' exact element={<MakeCoin />} />
        <Route path="/coins/:id" exact element={<MakeCoinDetails />} />
        <Route path="/exchanges" exact element={<MakeExchange />} />
        <Route path="/calculator" exact element={<CompoundInt />} />
        <Route path='/retirementCalc' exact element={<RetirementInt/>} />

        <Route path='/levelZero' exact element={<Level0 />} />
        <Route path='/levelOne' exact element={<Level1 />} />
        <Route path='/levelTwo' exact element={<Level2 />} />
        <Route path='/levelThree' exact element={<Level3 />} />
        <Route path='/levelFour' exact element={<Level4 />} />

        {/* <Route path='/levelFour' exact element={<Level4 />} /> */}
      </Routes>
    </div>
  )
}

export default App



// import {BrowserRouter as Router, Routes , Route,Navigate} from "react-router-dom";
// // import Header from "./components/Header";
// // import Home from "./components/Home";
// // import Coins from "./components/Coins";
// // import CoinDetails from "./components/CoinDetails";
// // import Exchange from "./components/Exchange";
// // import Footer from "./components/Footer";

// function App() {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" exact element={<LandingPage />} />
//         <Route path="/home" exact element={<Home />} />
//         <Route path="/signup" exact element={<Signup />} />
//         <Route path="/login" exact element={<Login />} />
//         <Route path="/profile" exact element={<Profile />} />
//         <Route path="/" element={<Navigate replace to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
