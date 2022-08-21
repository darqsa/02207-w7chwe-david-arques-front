import { Button, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useApi from "../../users/hooks/useApi";
import Register from "../Register/Register";

const Login = (): JSX.Element => {
  const initialState = {
    username: "",
    password: "",
    token: "",
  };
  let isUserLogged = false;

  const { loginUser, logoutUser } = useApi();

  const userState = useSelector((state: RootState) => state.loginUser);

  const [loginData, setLoginData] = useState(initialState);

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();
    setLoginData(initialState);

    isUserLogged = !isUserLogged;
    loginUser(loginData);
  };

  const onLogOut = () => {
    logoutUser();
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const hasEmptyFields =
    loginData.username.length < 5 || loginData.password.length < 5;

  if (!userState.id) {
    return (
      <>
        {!isUserLogged && <Register />}
        <form onSubmit={onSubmitData} className="form">
          <h2 className="form__heading">Login:</h2>
          <TextField
            name="username"
            className="form__input"
            label="Username"
            variant="standard"
            autoComplete="off"
            onChange={onChangeData}
            value={loginData.username}
          />
          <TextField
            name="password"
            className="form__input"
            label="Password"
            variant="standard"
            type="password"
            autoComplete="off"
            onChange={onChangeData}
            value={loginData.password}
          />
          <Button variant="text" type="submit" disabled={hasEmptyFields}>
            Login
          </Button>
        </form>
      </>
    );
  } else {
    return (
      <>
        <span className="form__heading">Logged as {userState.username}</span>
        <Button variant="text" type="submit" onClick={onLogOut}>
          Logout
        </Button>
      </>
    );
  }
};
export default Login;
