import React from 'react';
import styled from 'styled-components';
import { darkModeVar, isLoggedInVar } from '../apollo';

const Title = styled.h1`
`

const Container = styled.div`
`

const Login = () => {
  return (<Container>
    <Title>
      You need Login
    </Title>
    <button onClick={() => darkModeVar(true)}>To Dark</button>
    <button onClick={() => darkModeVar(false)}>To Ligth</button>
  </Container>)
}

export default Login;