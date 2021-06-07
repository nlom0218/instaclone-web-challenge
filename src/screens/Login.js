import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
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

const WhiteBox = styled.div`
  background-color: white;
  border: 1px solid ${props => props.theme.borderColor};
  width: 100%;
`

const TopBox = styled(WhiteBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 35px 40px 25px 40px;
  margin-bottom: 10px;
  form {
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

const Separator = styled.div`
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.borderColor};
  }
  span {
    margin: 0px 10px;
    font-weight: 600;
    color: #8e8e8e;
    font-size: 12px;
  }
`

const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
`

const ButtonBox = styled(WhiteBox)`
  padding: 10px 0px;
  text-align: center;
  a {
    font-weight: 600;
    color: ${props => props.theme.accent};
    margin-left: 5px;
  }
`

const Input = styled.input`
      width: 100%;
      border-radius: 3px;
      padding: 7px;
      background-color: #fafafa;
      border: 0.5px solid ${props => props.theme.borderColor};
      margin-top: 5px;
      &::placeholder {
        font-size: 12px;
      }
`

const Button = styled.input`
  border: none;
  margin-top: 12px;
  background-color: ${props => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  width: 100%;
  border-radius: 3px;
`

const Login = () => {
  return (<Container>
    <Wrapper>
      <TopBox>
        <div>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </div>
        <form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button type="submit" value="Log In" />
        </form>
        <Separator>
          <div></div>
          <span>Or</span>
          <div></div>
        </Separator>
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Log in with Facebook</span>
        </FacebookLogin>
      </TopBox>
      <ButtonBox>
        <span>Don't have an account?</span>
        <Link to="/sign-up">Sign up</Link>
      </ButtonBox>
    </Wrapper>
  </Container>)
}

export default Login;