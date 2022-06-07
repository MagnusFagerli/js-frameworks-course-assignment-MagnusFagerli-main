import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "../common/FormError";
import { BASE_URL, TOKEN_PATH } from "../../constants/url";
import AuthContext from "../../context/AuthContext";
import Form from "react-bootstrap/Form";

const url = BASE_URL + TOKEN_PATH;

export default function LogInForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useNavigate();

  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter a valid username")
      .min(3, "Please enter a valid username!"),
    password: yup
      .string()
      .required("Please enter your passord!")
      .min(3, "Please enter your password!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    console.log(data);

    try {
      const response = await axios.post(url, data);
      console.log("response", response.data);
      setAuth(response.data);
      history("/dashboard");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <FormError>{loginError}</FormError>}
        <fieldset disabled={submitting}>
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                placeholder="Username"
                typer="username"
                {...register("username")}
              />
              {errors.username && <span>{errors.username.message}</span>}
              {/* These throw an error! */}
            </Form.Group>
          </div>

          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                placeholder="Password"
                type="password"
                {...register("password")}
              />
              {errors.password && <span>{errors.password.message}</span>}
              {/* These throw an error! */}
            </Form.Group>
          </div>
          <button className="button-25">
            {submitting ? "Loggin in..." : "Login"}
          </button>
        </fieldset>
      </Form>
    </>
  );
}
