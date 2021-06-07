import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BaseBox } from '../shared';

const SButtomBox = styled(BaseBox)`
  padding: 10px 0px;
  text-align: center;
  a {
    font-weight: 600;
    color: ${props => props.theme.accent};
    margin-left: 5px;
  }
`

const BottomBox = ({ cta, link, linkText }) => {
  return (
    <SButtomBox>
      <span>{cta}</span>
      <Link to={link}>{linkText}</Link>
    </SButtomBox>
  );
}

export default BottomBox;