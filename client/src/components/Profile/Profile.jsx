import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';

const Profile = () => {

  const [userName,setUserName]=useState("");
  const [userEmail,setUserEmail]=useState("");
  let url;

  const getProfile = async () => {
    url = "http://localhost:8000/api/v1/user/getUserData"
    const { data: res } = await axios.get(url, {
        withCredentials: true,
    });
    //   console.log(res);
    setUserName(res.user.name);
    setUserEmail(res.user.email);
}

getProfile();


  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(data);
  };


 

const handleSubmit = async(e) => {
  e.preventDefault();

  const url = "http://localhost:8000/api/v1/user/updateProfile";
  const { data: res } = await axios.put(url, data, { withCredentials: true });
  console.log(res.message);
}


  const textStyle = {
    fontSize: "18px"
  }
  return (
    <>
      <Navbar home="Home" profile="Profile" expenses="Expenses" />

      {/* <section className="vh-50" style={{ backgroundColor: "#cca8f1" }}> */}
      <section className="vh-50" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <img src={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"}
                        alt="Generic placeholder image" className="img-fluid"
                        style={{ width: "180px", bordeRadius: "10px" }} />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h1 style={{ fontSize: "40px" }} className="mb-1">{userName}</h1>
                      <p className="mb-2 pb-1" style={{ color: "#2b2a2a", fontSize: "16px" }}>{userEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vh-50" >
        <div className="container w-50">
          <form onSubmit={handleSubmit}>

            <div className="form-outline mb-4">
              <label style={textStyle} className="form-label" htmlFor="form5Example1">Name</label>
              <input required style={{ padding: "10px", fontSize: "15px" }}  onChange={handleChange} type="text" name="name" id="name" className="form-control" />
            </div>


            <div className="form-outline mb-4">
              <label style={textStyle} className="form-label"  htmlFor="form5Example2">Email address</label>
              <input required style={{ padding: "10px", fontSize: "15px" }} onChange={handleChange} type="email" name="email" id="email" className="form-control" />
            </div>

            <button type="submit" style={{ backgroundColor: "var(--secondary-color)", fontSize: "18px", padding: "5px 20px 5px 20px" }} className="btn btn-block mb-4" >Update</button>
          </form>
        </div>

      </section>

    </>
  )
}

export default Profile