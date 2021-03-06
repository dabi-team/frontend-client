import React, { useState } from "react";
import { useHistory } from "react-router";
import { login } from "../redux/auth/auth_api_slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "./login.scss";

interface user {
  password: string;
  email: string;
}

const Login = () => {
  const ini: user = {
    password: "",
    email: "",
  };
  const [User, setUser] = useState(ini);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.auth.auth);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // await dispatch(
    //   login({
    //     email: User.email,
    //     password: User.password,
    //   })
    // );
    history.push("/");
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...User, [event.target.name]: event.target.value });
  };
  return (
    <div className="login-box">
      <div>
        <form className="shadow-xl">
          <h3>Welcome back</h3>
          <div className="form-group poppins">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={onChange}
              name="email"
            />
          </div>

          <div className="form-group poppins">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={onChange}
              name="password"
            />
          </div>
          <div className="button-container grid-button poppins">
            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-primary btn-block m-1"
            >
              Login
            </button>
            <button
              type="submit"
              onClick={() => {
                console.log(User);
                history.push("/Register");
              }}
              className="btn btn-primary btn-block m-1 signup"
            >
              Create An Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
