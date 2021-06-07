import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
`

const AuthLayout = ({ children }) => {
  return (<Container>
    <Wrapper>{children}</Wrapper>
  </Container>);
}

export default AuthLayout;