import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import styled from 'styled-components';
import AuthLayout from '../components/auth/AuthLayout';
import Button from '../components/auth/Button';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import Separator from '../components/auth/Separator';
import BottomBox from '../components/auth/BottomBox';
import routes from '../routes';
import PageTitle from '../components/PageTitle';
import { useForm } from "react-hook-form";
import FormError from '../components/auth/FormError';
import { gql, useMutation } from '@apollo/client';
import { logUserIn } from '../apollo';
import { useLocation } from 'react-router-dom';

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`

const Notification = styled.div`
  margin-top: 20px;
  color: #2ecc71;
`

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username:$username, password:$password) {
      ok
      token
      error
    }
  }
`

const Login = () => {
  const location = useLocation()
  console.log(location.state);
  const { register, watch, handleSubmit, formState: { errors, isValid }, getValues, setError, clearErrors, trigger } = useForm({
    mode: "onChange",
    defaultValues: {
      username: location?.state?.username || "",
      password: location?.state?.password || ""
    }
  })
  const onCompleted = (data) => {
    const { login: { ok, error, token } } = data
    if (!ok) {
      return setError("result", {
        message: error
      })
    }
    if (token) {
      logUserIn(token)
    }
  }
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted
  })
  const onSubmitValid = (data) => {
    if (loading) {
      return
    }
    const { username, password } = getValues()
    login({
      variables: { username, password }
    })
  }

  return (<AuthLayout>
    <PageTitle title="Login" />
    <FormBox>
      <div>
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </div>
      {location?.state?.message ? <Notification>{location?.state?.message}</Notification> : null}
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <Input
          {...register("username", {
            required: "Username is required.",
            minLength: {
              value: 5,
              message: "Usernmae should be longer than 5 chars."
            },
            validate: () => {
              if (errors?.result) {
                clearErrors("result")
                trigger()
              }
            }
          })}
          type="text" placeholder="Username" autoComplete="off" hasError={Boolean(errors?.username?.message)} />
        <FormError message={errors?.username?.message} />
        <Input
          {...register("password", {
            required: "Password is required.",
            validate: () => {
              if (errors?.result) {
                clearErrors("result")
                trigger()
              }
            }
          }
          )}
          type="password" placeholder="Password" autoComplete="off" hasError={Boolean(errors?.password?.message)} />
        <FormError message={errors?.password?.message} />
        <Button type="submit" value={loading ? "Loading..." : "Log in"} disabled={!isValid || loading} />
        <FormError message={errors?.result?.message} />
      </form>
      <Separator />
      <FacebookLogin>
        <FontAwesomeIcon icon={faFacebookSquare} />
        <span>Log in with Facebook</span>
      </FacebookLogin>
    </FormBox>
    <BottomBox
      cta="Don't have an account?"
      link={routes.signUp}
      linkText="Sign Up"
    />
  </AuthLayout>)
}

export default Login;