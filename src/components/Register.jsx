import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="vh-100 bg-login">
      <div className="row w-100 justify-content-center align-items-center h-100 m-0">
        <div className="col-lg-5 col-md-7 col-10">
          {/* <img src={logo} alt="" /> */}
          <h2 className="mb-4 text-white fs-1">Register</h2>
          <form>
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
            <div class="mb-3">
              <label for="cpassword" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control bg-white py-2 rounded-4"
                id="cpassword"
                aria-describedby="passwordHelp"
                placeholder="*****"
              />
            </div>
            <div className="mb-3">
              <Link
                to={"/login"}
                className="btn btn-primary w-100 rounded-4"
                style={{ padding: "10px 0" }}
              >
                Register
              </Link>
            </div>
            <div>
              <p className="text-white text-center">
                Already have an account ?{" "}
                <Link
                  className="text-decoration-none text-primary2 fw-semibold"
                  to={"/login"}
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
