import React, { useState } from "react";

export default function Auth(props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn form gửi lại trang
    // Thực hiện xử lý đăng ký hoặc đăng nhập tại đây
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            {authMode === "signin" ? "Sign In" : "Sign Up"}
          </h3>
          <div className="text-center">
            {authMode === "signin" ? "Not registered yet? " : "Already registered? "}
            <span className="link-primary" onClick={changeAuthMode}>
              {authMode === "signin" ? "Sign Up" : "Sign In"}
            </span>
          </div>
          <div className="form-group mt-3">
            {authMode === "signup" && (
              <>
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="e.g Jane Doe"
                />
              </>
            )}
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#" onClick={(e) => e.preventDefault()}>password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}
