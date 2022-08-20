import { Button, TextField } from "@mui/material";

const Register = (): JSX.Element => {
  return (
    <form className="register-container__form">
      <h2 className="register-container__heading">Create your account:</h2>
      <TextField
        id="username"
        className="register-container__form-input"
        label="Username"
        variant="outlined"
        autoComplete="off"
        required
      />
      <TextField
        id="password"
        className="register-container__form-input"
        label="Password"
        variant="outlined"
        type="outlined"
        autoComplete="off"
        required
      />
      <TextField
        id="image"
        className="register-container__form-input"
        label="Profile picture:"
        variant="outlined"
        type="outlined"
        autoComplete="off"
      />
      <Button variant="contained" type="submit">
        Register
      </Button>
    </form>
  );
};
export default Register;
