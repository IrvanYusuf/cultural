import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("id", 1);
    navigate("/");
  };
  return (
    <div className="vh-100 bg-login">
      <div className="row w-100 justify-content-center align-items-center h-100 m-0">
        <div className="col-lg-5 col-md-7 col-10">
          {/* <img src={logo} alt="" /> */}
          <h2 className="mb-4 text-white fs-1">Login</h2>
          <form onSubmit={handleLogin}>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control bg-white py-2 rounded-4"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email@gmail.com"
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control bg-white py-2 rounded-4"
                id="password"
                aria-describedby="passwordHelp"
                placeholder="*****"
              />
            </div>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label text-white" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <div className="mb-3">
              <button
                to={"/"}
                type="submit"
                className="btn btn-primary w-100 rounded-4"
                style={{ padding: "10px 0" }}
              >
                Login
              </button>
            </div>
            <div>
              <p className="text-white text-center">
                Don't have an account ?{" "}
                <Link
                  className="text-decoration-none text-primary2 fw-semibold"
                  to={"/register"}
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
