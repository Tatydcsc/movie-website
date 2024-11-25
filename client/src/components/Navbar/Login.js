import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Axios from "axios";

export const Login = () => {
  const handleClickLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      console.log(response);
    });
  };
  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("Não é um e-mail válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter 8 caracteres")
      .required("ERste campo é obrigatório"),
  });

  return (
    <div className="container">
      <h1>Entrar</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeHolder="E-mail" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="login-form-group">
            <Field
              name="password"
              className="form-field"
              placeHolder="Senha"
              type="password"
            />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">
            Entrar
          </button>
        </Form>
      </Formik>
    </div>
  );
};
