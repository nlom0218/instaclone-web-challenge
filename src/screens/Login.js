import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
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

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
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
  const { register, watch, handleSubmit, formState: { errors, isValid }, getValues, setError } = useForm({
    mode: "onChange"
  })
  const onCompleted = (data) => {
    const { login: { ok, error, token } } = data
    if (!ok) {
      setError("result", {
        message: error
      })
    }
  }
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted
  })
  console.log(errors);
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
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <Input
          {...register("username", {
            required: "Username is required.",
            minLength: {
              value: 5,
              message: "Usernmae should be longer than 5 chars."
            }
          })}
          type="text" placeholder="Username" autoComplete="off" hasError={Boolean(errors?.username?.message)} />
        <FormError message={errors?.username?.message} />
        <Input
          {...register("password", {
            required: "Password is required."
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