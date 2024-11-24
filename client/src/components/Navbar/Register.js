import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export const Register = () => {
  const handleClickRegister = (values) => console.log(values);
  const validationRegister = yup.object().shape({
    nome: yup.string().required("Este campo é obrigatório"),
    email: yup
      .string()
      .email("Não é um e-mail válido")
      .required("Este campo é obrigatório"),
    password: yup
      .string()
      .min(8, "A senha deve ter 8 caracteres")
      .required("ERste campo é obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não são iguais")
      .required("ERste campo é obrigatório"),
  });

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field
              name="nome"
              className="form-field"
              placeHolder="Nome Completo"
            />
            <ErrorMessage component="span" name="nome" className="form-error" />
          </div>
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
          <div className="login-form-group">
            <Field
              name="confirmPassword"
              type="password"
              className="form-field"
              placeHolder="Confirme sua Senha"
            />
            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error"
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
};
