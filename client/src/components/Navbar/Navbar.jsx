import React, { useState } from 'react'
import axios from 'axios';
import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import Profile from '../Profile/Profile';

const Navbar = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('User');
    let url;
    const handleLogout = async () => {
        // localStorage.removeItem("token");
        // window.location.reload();
        url = "http://localhost:8000/api/v1/user/logout";
        await axios.get(url, {
            withCredentials: true,
        });
        navigate("/login")
    };



    const getProfile = async () => {
        url = "http://localhost:8000/api/v1/user/getUserData"
        const { data: res } = await axios.get(url, {
            withCredentials: true,
        });
        //   console.log(res);
        setName(res.user.name);
    }
    getProfile();

    return (
        <nav className="navbar">

            <h1>Finova</h1>
            <div className="n-list">
                <ul style={{ listStyleType: "none", display: "flex" }}>
                    <Link to='/home'><li>{props.home}</li></Link>
                    <Link to='/hindiQuiz'><li>{props.hindi}</li></Link>
                    <Link to='/englishQuiz'><li>{props.english}</li></Link>
                    <Link to='/profile'><li className='usernameStyle'>{name}</li></Link>
                </ul>

            </div>
            <button className="white_btn" onClick={handleLogout}>
                Logout
            </button>
        </nav>
    );
}


// export const profileData = () => {
//     return (
//         <h1>Hello World</h1>
//     );
// }


export default Navbar