import React from 'react'
import Navbar from '../Navbar/Navbar'

const Profile = () => {
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
                      <h1 style={{ fontSize: "40px" }} className="mb-1">Danny McLoan</h1>
                      <p className="mb-2 pb-1" style={{ color: "#2b2a2a", fontSize: "16px" }}>dannymcloan@gmail.com</p>
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
          <form>

            <div className="form-outline mb-4">
              <input style={{ padding: "10px", fontSize: "15px" }} type="text" id="form5Example1" className="form-control" />
              <label style={textStyle} className="form-label" for="form5Example1">Name</label>
            </div>


            <div className="form-outline mb-4">
              <input style={{ padding: "10px", fontSize: "15px" }} type="email" id="form5Example2" className="form-control" />
              <label style={textStyle} className="form-label" for="form5Example2">Email address</label>
            </div>

            <button type="submit" style={{ backgroundColor: "var(--secondary-color)", fontSize: "18px", padding: "5px 20px 5px 20px" }} className="btn btn-block mb-4">Update</button>
          </form>
        </div>

      </section>

    </>
  )
}

export default Profile