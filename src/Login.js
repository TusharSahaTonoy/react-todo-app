import React, { useContext } from "react";
import { AppContext } from "./context";

function Login() {
  const { doLogin } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin();
  };

  return (
    <div className="container col-4">
      <h2 className="text-center">Login</h2>
      <hr />

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>User Name</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
