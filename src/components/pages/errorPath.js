import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const ErrorPath = () => {
  return(
    <H1>Такой страницы не существует, пожалуйста вернитесь на <Link to='/'>главную страницу</Link></H1>
  )
}

export default ErrorPath;

const H1 = styled.h1`
  text-align: center;
  color: #ffffff;
`;
