// import './index.css'
// import { useState } from 'react'
// import Home from './components/Home/Home'
// import Signup from './components/Signup/Signup'
// import Login from './components/Login/Login'
// import Profile from './components/Profile/Profile'

// import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
// import LandingPage from './components/LandingPage/LandingPage'


// function CryptoApp() {

//   return (
//     <div>
      

//     </div>
//   )
// }

// export default CryptoApp



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


import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Coins from "./cryptoComponents/Coins";
import CoinDetails from "./cryptoComponents/CoinDetails";
import Exchange from "./cryptoComponents/Exchange";


function CryptoApp() {
  return (
    <Router>
    {/* <Header /> */}
      <Routes>
      <Route path="/coins" exact element={<Coins/>} />
        
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/coins" exact element={<Coins/>} />
        <Route path="/exchange" exact element={<Exchange/>} />
        <Route path="/coins/:id" exact element={<CoinDetails/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default CryptoApp;
