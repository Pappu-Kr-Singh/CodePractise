import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      alert("Login Successful");
      navigate("/"); // Redirect to the home page
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        if (
          status === 400 &&
          data.message.includes("username or email is required")
        ) {
          alert("Username or email is required");
        } else if (
          status === 401 &&
          data.message.includes("Invalid user credentials")
        ) {
          alert("Invalid username or password");
        } else {
          alert("An error occurred during login. Please try again.");
        }
        console.error("Error during login:", data);
      } else {
        alert("An error occurred during login. Please try again.");
        console.error("Error during login:", error);
      }
    }
  };

  return (
    <section
      className="vh-70 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        className="form-control form-control-lg"
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="email">
                        Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        className="form-control form-control-lg"
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="userName">
                        Username
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        className="form-control form-control-lg"
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Don't have an account?{" "}
                      <Link to={"/"} className="fw-bold text-body">
                        <u>Sign Up here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
