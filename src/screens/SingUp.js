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

const SingUp = () => {
  return (<AuthLayout>
    <PageTitle title="Sign up" />
    <FormBox>
      <HeaderContainer>
        <FontAwesomeIcon icon={faInstagram} size="3x" />
        <SubTitle>
          Sign up to see photos and videos from your friends.
        </SubTitle>
      </HeaderContainer>
      <form>
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" value="Log in" />
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