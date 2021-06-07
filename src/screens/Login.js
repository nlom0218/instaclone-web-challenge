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

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`

const Login = () => {
  return (<AuthLayout>
    <PageTitle title="Login" />
    <FormBox>
      <div>
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </div>
      <form>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" value="Log In" />
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