import { Button, TextField } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import useApi from "../../users/hooks/useApi";
import { FormStyled } from "./RegisterStyled";

const Register = (): JSX.Element => {
  const initialState = {
    username: "",
    password: "",
    image: "",
  };

  const { registerUser } = useApi();
  const [formData, setFormData] = useState(initialState);

  const onSubmitData = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (formData.image === "") {
      formData.image =
        "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg";
    }

    registerUser(formData);

    setFormData(initialState);
  };

  const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const hasEmptyFields =
    formData.username.length < 5 || formData.password.length < 5;
  return (
    <FormStyled onSubmit={onSubmitData} className="form">
      <h2 className="form__heading">Create your account:</h2>
      <TextField
        id="username"
        className="form__input"
        label="Username"
        variant="outlined"
        autoComplete="off"
        placeholder="min 5 characters"
        required
        onChange={onChangeData}
        value={formData.username}
      />
      <TextField
        id="password"
        className="form__input"
        label="Password"
        variant="outlined"
        type="password"
        placeholder="min 5 characters"
        autoComplete="off"
        required
        onChange={onChangeData}
        value={formData.password}
      />
      <TextField
        id="image"
        className="form__input"
        label="Profile picture"
        variant="outlined"
        type="outlined"
        autoComplete="off"
        onChange={onChangeData}
        value={formData.image}
      />
      <Button variant="contained" type="submit" disabled={hasEmptyFields}>
        Register
      </Button>
    </FormStyled>
  );
};
export default Register;
