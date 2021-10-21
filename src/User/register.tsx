import React, { useState } from "react";
import { useHistory } from "react-router";
import { sign } from "../redux/auth/auth_api_slice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import "./login.scss";

interface user {
  password: string;
  email: string;
  username: string;
  number: number;
}

const Login = () => {
  const ini: user = {
    password: "",
    email: "",
    username: "",
    number: 0,
  };
  const [User, setUser] = useState(ini);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.auth.auth);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...User, [event.target.name]: event.target.value });
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    await dispatch(
      sign({
        email: User.email,
        password: User.password,
        number: User.number,
        name: User.username,
      })
    );

    history.push("/");
  };
  return (
    <div className="login-box">
      <div>
        <form className="shadow-xl">
          <h3>Welcome</h3>
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
            <label>Display Name</label>
            <input
              type="string"
              className="form-control"
              placeholder="Enter display name"
              onChange={onChange}
              name="username"
            />
          </div>
          <div className="form-group poppins">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter number"
              onChange={onChange}
              name="number"
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
          <div className="register-button">
            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-primary btn-block m-1 "
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
