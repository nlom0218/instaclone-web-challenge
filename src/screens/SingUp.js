import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import BottomBox from '../components/auth/BottomBox';
import FormBox from '../components/auth/FormBox';
import Input from '../components/auth/Input';
import Button from '../components/auth/Button';
import Separator from '../components/auth/Separator';
import routes from '../routes';
import styled from 'styled-components';
import { FatLink } from '../components/shared';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../components/PageTitle';
import { useForm } from 'react-hook-form';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SubTitle = styled(FatLink)`
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
`

const CREATE_ACCOUNT_MUTATAION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
 `

const SingUp = () => {
  const history = useHistory()
  const onCompleted = (data) => {
    const { username, password } = getValues()
    const { createAccount: { ok, error } } = data
    if (!ok) {
      return
    }
    history.push(routes.home, { message: "Account created. Please log in.", username, password })
  }
  const [createAccuton, { loading }] = useMutation(CREATE_ACCOUNT_MUTATAION, {
    onCompleted
  })
  const { register, handleSubmit, formState: { errors, isValid }, getValues } = useForm({
    mode: "onChange"
  })
  const onSubmitVaild = (data) => {
    if (loading) {
      return
    }
    createAccuton({
      variables: { ...data }
    })
  }
  return (<AuthLayout>
    <PageTitle title="Sign up" />
    <FormBox>
      <HeaderContainer>
        <FontAwesomeIcon icon={faInstagram} size="3x" />
        <SubTitle>
          Sign up to see photos and videos from your friends.
        </SubTitle>
      </HeaderContainer>
      <form onSubmit={handleSubmit(onSubmitVaild)}>
        <Input
          {...register("firstName", {
            required: "First Name is required."
          })}
          type="text" placeholder="First Name" autoComplete="off" />
        <Input
          {...register("lastName", {})}
          type="text" placeholder="Last Name" autoComplete="off" />
        <Input
          {...register("email", {
            required: "Email is required."
          })}
          type="text" placeholder="Email" autoComplete="off" />
        <Input
          {...register("username", {
            required: "Username is required."
          })}
          type="text" placeholder="Username" autoComplete="off" />
        <Input
          {...register("password", {
            required: "Password is required."
          })}
          type="password" placeholder="Password" autoComplete="off" />
        <Button type="submit" value={loading ? "Loading..." : "Sign up"} disabled={!isValid || loading} />
      </form>
    </FormBox>
    <BottomBox
      cta="Have an account?"
      link={routes.home}
      linkText="Log in"
    />
  </AuthLayout>);
}

export default SingUp;