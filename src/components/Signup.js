import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Signup = (props) => {
  const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const  {name, email, password} = credentials; 
    const responce = await fetch(`http://localhost:1000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password
      }),
    });
    const json = await responce.json();
    console.log(json);
    if(json.success){
    localStorage.setItem('token',json.authtoken)
    navigate.push("/");
    props.showAlert("Account Created Successfully","success");
    }else{
        props.showAlert("Invalid Credentials","danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container mt-2">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2 className="text-center mb-4">Create an Account to Use iNotebook</h2>
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={onChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={onChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={onChange}
                  placeholder="Enter your password"
                  minLength={5}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  onChange={onChange}
                  placeholder="Confirm your password"
                  minLength={5}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Signup;
