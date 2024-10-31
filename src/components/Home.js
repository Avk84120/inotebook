// import React, { useContext } from "react";
import Notes from './Notes';


const Home = () => {
  
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>{" "}
      <Notes/>

    </div>
  );
};

export default Home;
